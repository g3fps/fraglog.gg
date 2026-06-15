/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '../../lib/admin.js';
import { checkRateLimit, getClientIp } from '../../lib/ratelimit.js';
import { buildAskPrompt } from '../../lib/coaching-prompt.js';
import { getAllVods } from '../../data/data.js';

// ── Daily Ask AI limit ────────────────────────────────────────
// Flat cap for now; premium tiers (higher cap) can come later.
const DAILY_ASK_LIMIT = 5;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // Require auth — verify session server-side, never trust a client-supplied id
  const authHeader = request.headers.get('authorization');
  const accessToken = authHeader?.replace('Bearer ', '').trim();

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

  let verifiedUserId: string | null = null;
  let verifiedUserEmail: string | null = null;
  if (accessToken) {
    try {
      const { data: { user } } = await sb.auth.getUser(accessToken);
      verifiedUserId = user?.id || null;
      verifiedUserEmail = user?.email || null;
    } catch {
      // Token invalid or expired
    }
  }

  if (!verifiedUserId) {
    return new Response(JSON.stringify({ error: 'You must be signed in to use Ask AI.' }), { status: 401 });
  }

  const isAdmin = isAdminEmail(verifiedUserEmail);

  // ── Burst rate limit (serverless-safe, Postgres-backed) ──────
  if (!isAdmin) {
    const ip = getClientIp(request, clientAddress);
    const okUser = await checkRateLimit(sb, `ask:user:${verifiedUserId}`, 15, 60);
    const okIp = await checkRateLimit(sb, `ask:ip:${ip}`, 30, 60);
    if (!okUser || !okIp) {
      return new Response(JSON.stringify({ error: 'Too many questions. Slow down and try again in a minute.' }), { status: 429 });
    }
  }

  // Fetch user's notes for context
  const allLibVods = getAllVods();
  const libVodMap = new Map(allLibVods.map((v: any) => [v.id, v]));

  const [{ data: videoNotes }, { data: notebookNotes }, { data: userVods }] = await Promise.all([
    sb.from('notes').select('video_id, content').eq('user_id', verifiedUserId).limit(30),
    sb.from('notebook').select('title, content').eq('user_id', verifiedUserId).order('updated_at', { ascending: false }).limit(40),
    sb.from('user_vods').select('video_id, title, map_id, agent_id').eq('user_id', verifiedUserId),
  ]);

  const userVodMap = new Map((userVods || []).map((v: any) => [v.video_id, v]));

  let playerNotesContext = '';

  if (videoNotes?.length) {
    const formatted = videoNotes.map((n: any) => {
      const uv = userVodMap.get(n.video_id);
      const lv = libVodMap.get(n.video_id);
      const meta = uv
        ? `[${uv.title || n.video_id} | Map: ${uv.map_id} | Agent: ${uv.agent_id}]`
        : lv
        ? `[${lv.title} | Map: ${lv.mapName} | Agent: ${lv.agentName} | Player: ${lv.player}]`
        : `[video: ${n.video_id}]`;

      let text = meta + '\n';
      try {
        const parsed = JSON.parse(n.content);
        if (parsed.general?.trim()) text += `General: ${parsed.general.trim().slice(0, 250)}\n`;
        if (parsed.rounds?.length) {
          const roundLines = parsed.rounds
            .filter((r: any) => Object.values(r.categories || {}).some((v: any) => v?.trim()))
            .map((r: any) => {
              const cats = Object.entries(r.categories || {})
                .filter(([, v]: any) => v?.trim())
                .map(([cat, v]: any) => `${cat.split(' ')[0]}: ${String(v).trim().slice(0, 60)}`)
                .join(', ');
              return `R${r.round}: ${cats}`;
            });
          if (roundLines.length) text += `Rounds: ${roundLines.join(' | ').slice(0, 500)}`;
        }
      } catch {
        text += (n.content || '').trim().slice(0, 400);
      }
      return text.trim();
    }).filter(Boolean);

    if (formatted.length) playerNotesContext += `Player's VOD notes (${formatted.length} games):\n${formatted.join('\n\n')}`;
  }

  if (notebookNotes?.length) {
    const formatted = (notebookNotes as any[]).map(n =>
      `${n.title ? `[${n.title}] ` : ''}${(n.content || '').trim().slice(0, 1500)}`
    ).filter((t: string) => t.trim());
    if (formatted.length) playerNotesContext += `\n\nPlayer's notebook entries:\n${formatted.join('\n\n')}`;
  }

  const body = await request.json().catch(() => ({}));
  const { system, messages, safeQuestion } = buildAskPrompt({ ...body, playerNotesContext });

  if (!safeQuestion.trim()) {
    return new Response(JSON.stringify({ error: 'No question provided' }), { status: 400 });
  }

  // ── Per-user daily limit ──────────────────────────────────────
  const today = new Date().toISOString().slice(0, 10);
  const { data: usage } = await sb
    .from('coaching_usage')
    .select('coaching_count, followup_count, ask_count')
    .eq('user_id', verifiedUserId)
    .eq('date', today)
    .maybeSingle();

  const askCount = usage?.ask_count ?? 0;

  if (!isAdmin && askCount >= DAILY_ASK_LIMIT) {
    return new Response(JSON.stringify({
      error: `You've used all ${DAILY_ASK_LIMIT} Ask AI questions for today. Resets at midnight UTC.`,
      limitReached: true,
    }), { status: 429 });
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      system,
      messages
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    return new Response(JSON.stringify({ error: err.error?.message || 'Anthropic API error' }), { status: 502 });
  }

  const data = await response.json();
  const text = data.content?.[0]?.text || '';

  if (!text) {
    return new Response(JSON.stringify({ error: 'No response generated.' }), { status: 502 });
  }

  // Count this question against the daily limit (preserve coach counts)
  const isRejection = text.startsWith('Ask me anything about Valorant');
  if (!isRejection) {
    await sb.from('coaching_usage').upsert(
      {
        user_id: verifiedUserId,
        date: today,
        coaching_count: usage?.coaching_count ?? 0,
        followup_count: usage?.followup_count ?? 0,
        ask_count: askCount + 1,
      },
      { onConflict: 'user_id,date' }
    );
  }

  return new Response(JSON.stringify({ text, askRemaining: Math.max(0, DAILY_ASK_LIMIT - (askCount + 1)) }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
