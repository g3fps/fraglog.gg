/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '../../lib/admin.js';
import { checkRateLimit, getClientIp } from '../../lib/ratelimit.js';
import { buildAskPrompt } from '../../lib/coaching-prompt.js';
import { getAllVods } from '../../lib/vods.js';
import { getPremium, getLimits, featureLocked } from '../../lib/premium.js';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const authHeader = request.headers.get('authorization');
  const accessToken = authHeader?.replace('Bearer ', '').trim();

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

  let verifiedUserId: string | null = null;
  let verifiedUserEmail: string | null = null;
  let verifiedEmailConfirmed = false;
  if (accessToken) {
    try {
      const { data: { user } } = await sb.auth.getUser(accessToken);
      verifiedUserId = user?.id || null;
      verifiedUserEmail = user?.email || null;
      verifiedEmailConfirmed = !!user?.email_confirmed_at;
    } catch {
      // Token invalid or expired
    }
  }

  if (!verifiedUserId) {
    return new Response(JSON.stringify({ error: 'You must be signed in to use Ask AI.' }), { status: 401 });
  }

  const isAdmin = isAdminEmail(verifiedUserEmail);
  const { isPremium } = await getPremium(sb, verifiedUserId, isAdmin);
  const DAILY_ASK_LIMIT = getLimits(isPremium).ask;

  if (!isAdmin && !verifiedEmailConfirmed) {
    return new Response(JSON.stringify({ error: 'Please verify your email before using Ask AI — check your inbox for a confirmation link.' }), { status: 403 });
  }

  if (!isAdmin) {
    const ip = getClientIp(request, clientAddress);
    const okUser = await checkRateLimit(sb, `ask:user:${verifiedUserId}`, 15, 60);
    const okIp = await checkRateLimit(sb, `ask:ip:${ip}`, 30, 60);
    // Per-tier daily IP ceiling (3x that tier's daily ask allowance) — keeps
    // premium households from sharing the free-tier abuse threshold.
    const tier = isPremium ? 'premium' : 'free';
    const okIpDaily = await checkRateLimit(sb, `ask:ip:daily:${tier}:${ip}`, DAILY_ASK_LIMIT * 3, 86400);
    if (!okUser || !okIp || !okIpDaily) {
      return new Response(JSON.stringify({ error: 'Too many questions. Slow down and try again in a minute.' }), { status: 429 });
    }
  }

  const body = await request.json().catch(() => ({}));
  const { conversationId } = body;

  // ── Build premium cross-context (VOD notes + other conversations) ──
  const allLibVods = await getAllVods();
  const libVodMap = new Map(allLibVods.map((v: any) => [v.id, v]));

  const [{ data: videoNotes }, { data: userVods }, { data: otherConvs }, { data: profileData }] = await Promise.all([
    sb.from('notes').select('video_id, content').eq('user_id', verifiedUserId).limit(30),
    sb.from('user_vods').select('video_id, title, map_id, agent_id').eq('user_id', verifiedUserId),
    // Other conversations (exclude current) for cross-conversation context
    sb.from('conversations')
      .select('title, history')
      .eq('user_id', verifiedUserId)
      .order('updated_at', { ascending: false })
      .limit(8),
    sb.from('profiles').select('share_coaching').eq('id', verifiedUserId).maybeSingle(),
  ]);
  const shareCoaching = profileData?.share_coaching === true;

  const userVodMap = new Map((userVods || []).map((v: any) => [v.video_id, v]));

  let crossContext = '';

  // VOD notes
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
    if (formatted.length) crossContext += `Player's VOD notes (${formatted.length} games):\n${formatted.join('\n\n')}`;
  }

  // Other conversations (exclude the current one)
  const relevantConvs = (otherConvs || []).filter((c: any) => c.id !== conversationId);
  if (relevantConvs.length) {
    const snippets = relevantConvs.map((c: any) => {
      const lastUser = [...(c.history || [])].reverse().find((m: any) => m.role === 'user');
      return `[${c.title}]${lastUser ? `: ${String(lastUser.content).slice(0, 200)}` : ''}`;
    }).filter(Boolean);
    if (snippets.length) crossContext += `\n\nPlayer's recent conversation topics:\n${snippets.join('\n')}`;
  }

  // Cross-context (VOD notes + other conversations) is premium-only
  const locked = featureLocked(isPremium);
  const finalContext = locked ? '' : crossContext;
  const { system, messages, safeQuestion } = buildAskPrompt(
    { ...body, playerNotesContext: finalContext },
    { isPremium }
  );

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
      error: `You've used all ${DAILY_ASK_LIMIT} Ask AI questions for today. Resets at midnight UTC.${locked ? ' Go Premium for 20/day.' : ''}`,
      limitReached: true,
      upsell: locked,
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
      system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
      messages,
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

  // Log training data
  try {
    await sb.from('coaching_training_data').insert({
      user_id: verifiedUserId,
      notes: safeQuestion || null,
      agent: null,
      map: null,
      mode: 'ask',
      coaching_output: text,
      share_coaching: shareCoaching,
      created_at: new Date().toISOString()
    });
  } catch { /* non-fatal */ }

  // contextLocked = free user has premium context that's being stripped
  const contextLocked = locked && crossContext !== '';
  return new Response(JSON.stringify({ text, askRemaining: Math.max(0, DAILY_ASK_LIMIT - (askCount + 1)), contextLocked }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
