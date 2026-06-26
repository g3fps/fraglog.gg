/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { AGENT_KNOWLEDGE } from '../../lib/valorant-knowledge.js';
import { isAdminEmail } from '../../lib/admin.js';
import { checkRateLimit, getClientIp } from '../../lib/ratelimit.js';
import { buildRoutinePrompt } from '../../lib/routine-prompt.js';
import { getPremium, getLimits, featureLocked } from '../../lib/premium.js';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const authHeader = request.headers.get('authorization');
  const accessToken = authHeader?.replace('Bearer ', '').trim();

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

let verifiedUserId: string | null = null;
  let isAdmin = false;
  if (accessToken) {
    try {
      const { data: { user } } = await sb.auth.getUser(accessToken);
      verifiedUserId = user?.id || null;
      isAdmin = isAdminEmail(user?.email);
    } catch {}
  }

  if (!verifiedUserId) {
    return new Response(JSON.stringify({ error: 'Sign in to generate a gameplan.' }), { status: 401 });
  }

  const { isPremium } = await getPremium(sb, verifiedUserId, isAdmin);
  const generateLimit = getLimits(isPremium).routineGenerate;
  const finetuneLimit = getLimits(isPremium).routineFinetune;

  // ── Burst rate limit (serverless-safe, Postgres-backed) ──────
  if (!isAdmin) {
    const ip = getClientIp(request, clientAddress);
    const okUser = await checkRateLimit(sb, `genroutine:user:${verifiedUserId}`, 10, 60);
    const okIp = await checkRateLimit(sb, `genroutine:ip:${ip}`, 20, 60);
    if (!okUser || !okIp) {
      return new Response(JSON.stringify({ error: 'Too many requests. Try again in a minute.' }), { status: 429 });
    }
  }

  const body = await request.json().catch(() => ({}));
  const { goals, fineTune } = body;

  if (!Array.isArray(goals) || goals.length === 0) {
    return new Response(JSON.stringify({ error: 'No goals provided.' }), { status: 400 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const isFineTune = typeof fineTune === 'string' && fineTune.trim().length > 0;

  // ── Daily limits ──────────────────────────────────────────────
  const { data: routineRecord } = await sb
    .from('routine')
    .select('daily_generate_date, daily_generate_count, daily_finetune_count, daily_finetune_date')
    .eq('user_id', verifiedUserId)
    .maybeSingle();

  if (!isAdmin) {
    if (isFineTune) {
      const sameDay = routineRecord?.daily_finetune_date === today;
      const used = sameDay ? (routineRecord?.daily_finetune_count || 0) : 0;
      if (used >= finetuneLimit) {
        return new Response(JSON.stringify({ error: `Fine tune limit reached for today (${used}/${finetuneLimit}). Resets at midnight UTC.` }), { status: 429 });
      }
    } else {
      const sameDayGen = routineRecord?.daily_generate_date === today;
      const usedGen = sameDayGen ? (routineRecord?.daily_generate_count || 0) : 0;
      if (usedGen >= generateLimit) {
        const upsell = featureLocked(isPremium);
        return new Response(JSON.stringify({
          error: (generateLimit === 1
            ? 'Already generated today. Use fine tune to make adjustments.'
            : `Daily generate limit reached (${usedGen}/${generateLimit}). Use fine tune to adjust.`)
            + (upsell ? ' Go Premium for 3 generates/day.' : ''),
          limitReached: true,
          upsell,
        }), { status: 429 });
      }
    }
  }

  // ── Build prompt (shared with the prompt-iteration harness) ────
  const { systemPrompt, userContent, safeGoals, safeTimePerDay, safeDetails, safeWakeTime, allGoalText } = buildRoutinePrompt(body, { today });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 3000,
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: userContent }],
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    return new Response(JSON.stringify({ error: err.error?.message || 'AI error' }), { status: 502 });
  }

  const aiData = await response.json();
  let text = (aiData.content?.[0]?.text || '').trim();
  // Strip any markdown code fences
  text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
  // If the model added prose before the JSON, extract the object
  if (!text.startsWith('{')) {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) text = match[0];
  }

  let routine: any;
  try {
    const parsed = JSON.parse(text);
    if (!parsed.schedule || !Array.isArray(parsed.schedule) || parsed.schedule.length === 0) {
      throw new Error('invalid');
    }
    parsed.schedule = parsed.schedule.slice(0, 12).map((t: any, i: number) => ({
      id: `s${i + 1}`,
      time: String(t.time || '').slice(0, 20),
      category: ['wakeup','warmup','ranked','vod','review','break','done','utility','custom'].includes(t.category) ? t.category : 'custom',
      title: String(t.title || '').slice(0, 100),
      duration: Math.min(Math.max(Number(t.duration) || 15, 5), 360),
      description: typeof t.description === 'string' ? t.description.slice(0, 400) : '',
      count: typeof t.count === 'string' ? t.count.slice(0, 30) : '',
    }));
    parsed.wake_time = typeof parsed.wake_time === 'string' ? parsed.wake_time.slice(0, 20) : '';
    if (parsed.stats && typeof parsed.stats === 'object') {
      parsed.stats = {
        target_wr: Math.min(Math.max(Number(parsed.stats.target_wr) || 0, 0), 100),
        games_per_day: Math.min(Math.max(Number(parsed.stats.games_per_day) || 0, 0), 50),
        daily_hours: String(parsed.stats.daily_hours || '').slice(0, 20),
        games_needed: Math.min(Math.max(Number(parsed.stats.games_needed) || 0, 0), 9999),
      };
    } else {
      parsed.stats = null;
    }
    routine = parsed;
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to generate gameplan. Try again.' }), { status: 502 });
  }

  // ── Save routine to DB (service key bypasses RLS) ────────────
  const generatedAt = new Date().toISOString();
  let updatedCounts: Record<string, any>;
  if (isFineTune) {
    const sameDay = routineRecord?.daily_finetune_date === today;
    const prevCount = sameDay ? (routineRecord?.daily_finetune_count || 0) : 0;
    const newCount = prevCount + 1;
    updatedCounts = { daily_finetune_count: newCount, daily_finetune_date: today };
  } else {
    const sameDayGen = routineRecord?.daily_generate_date === today;
    const prevGen = sameDayGen ? (routineRecord?.daily_generate_count || 0) : 0;
    updatedCounts = { daily_generate_date: today, daily_generate_count: prevGen + 1, daily_finetune_count: 0, daily_finetune_date: today };
  }

  const { error: saveErr } = await sb.from('routine').upsert(
    { user_id: verifiedUserId, tasks: routine, generated_at: generatedAt, ...updatedCounts },
    { onConflict: 'user_id' }
  );

  // ── Save training data if user opted in ──────────────────────
  const { data: profileRow } = await sb.from('profiles').select('share_coaching').eq('id', verifiedUserId).maybeSingle();
  if (profileRow?.share_coaching) {
    const agentNames = Object.entries(AGENT_KNOWLEDGE)
      .filter(([name]) => allGoalText.includes(name))
      .map(([name]) => name)
      .join(', ');
    await sb.from('gameplan_training_data').insert({
      user_id: verifiedUserId,
      goals: safeGoals,
      time_per_day: safeTimePerDay,
      details: safeDetails || null,
      wake_time: safeWakeTime || null,
      agents: agentNames || null,
      routine,
    });
  }

  return new Response(JSON.stringify({ routine, generated_at: generatedAt, ...updatedCounts, save_error: saveErr?.message || null }), { headers: { 'Content-Type': 'application/json' } });
};
