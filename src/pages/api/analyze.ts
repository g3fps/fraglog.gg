/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '../../lib/admin.js';
import { checkRateLimit, getClientIp } from '../../lib/ratelimit.js';
import { buildCoachingPrompt } from '../../lib/coaching-prompt.js';
import { getPremium, getLimits, featureLocked } from '../../lib/premium.js';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // Require auth — verify session server-side, don't trust client-supplied userId
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
    return new Response(JSON.stringify({ error: 'You must be signed in to use the AI coach.' }), { status: 401 });
  }

  const isAdmin = isAdminEmail(verifiedUserEmail);
  const { isPremium } = await getPremium(sb, verifiedUserId, isAdmin);
  const { coaching: coachingLimit, followup: followupLimit } = getLimits(isPremium);

  if (!isAdmin && !verifiedEmailConfirmed) {
    return new Response(JSON.stringify({ error: 'Please verify your email before using the AI coach — check your inbox for a confirmation link.' }), { status: 403 });
  }

  // ── Burst rate limit (serverless-safe, Postgres-backed) ──────
  if (!isAdmin) {
    const ip = getClientIp(request, clientAddress);
    const okUser = await checkRateLimit(sb, `analyze:user:${verifiedUserId}`, 10, 60);
    const okIp = await checkRateLimit(sb, `analyze:ip:${ip}`, 20, 60);
    // Daily per-IP ceiling — stops one IP churning through throwaway accounts
    // to stack daily quotas. Keyed + sized per tier (3x that tier's combined
    // coaching+followup allowance) so premium households aren't capped at the
    // free-tier abuse threshold.
    const tier = isPremium ? 'premium' : 'free';
    const okIpDaily = await checkRateLimit(sb, `analyze:ip:daily:${tier}:${ip}`, (coachingLimit + followupLimit) * 3, 86400);
    if (!okUser || !okIp || !okIpDaily) {
      return new Response(JSON.stringify({ error: 'Too many requests. Slow down and try again in a minute.' }), { status: 429 });
    }
  }

  const body = await request.json();
  const { mode, shareCoaching } = body;

  // ── Per-user daily rate limit ─────────────────────────────
  const today = new Date().toISOString().slice(0, 10);
  const isFollowup = mode === 'followup';

  const { data: usage } = await sb
    .from('coaching_usage')
    .select('coaching_count, followup_count')
    .eq('user_id', verifiedUserId)
    .eq('date', today)
    .maybeSingle();

  const coachingCount = usage?.coaching_count ?? 0;
  const followupCount = usage?.followup_count ?? 0;

  if (!isAdmin) {
    const upsell = featureLocked(isPremium);
    const upsellMsg = upsell ? ' Go Premium for higher daily limits.' : '';
    if (isFollowup && followupCount >= followupLimit) {
      return new Response(JSON.stringify({ error: `You've used all ${followupLimit} follow-up questions for today. Resets at midnight UTC.${upsellMsg}`, upsell }), { status: 429 });
    }
    if (!isFollowup && coachingCount >= coachingLimit) {
      return new Response(JSON.stringify({ error: `You've used all ${coachingLimit} coaching sessions for today. Resets at midnight UTC.${upsellMsg}`, upsell }), { status: 429 });
    }
  }

  // ── Build prompt (shared with the prompt-iteration harness) ────
  const { system, userContent, safeNotes, safeAgent, safeMap, safeFollowup } = buildCoachingPrompt(body);

  if (mode !== 'followup' && !safeNotes.trim()) {
    return new Response(JSON.stringify({ error: 'No notes provided' }), { status: 400 });
  }

  // ── Follow-up mode ────────────────────────────────────────
  if (mode === 'followup') {
    if (!safeFollowup.trim()) {
      return new Response(JSON.stringify({ error: 'No follow-up question provided' }), { status: 400 });
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
        max_tokens: 400,
        system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
        messages: [{ role: 'user', content: userContent }],
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

    const isRejection = text.startsWith('Please ask a question about your Valorant gameplay.');
    if (!isRejection) {
      await sb.from('coaching_usage').upsert(
        { user_id: verifiedUserId, date: today, coaching_count: coachingCount, followup_count: followupCount + 1 },
        { onConflict: 'user_id,date' }
      );
    }

    if (text) {
      try {
        await sb.from('coaching_training_data').insert({
          user_id: verifiedUserId,
          notes: safeFollowup || null,
          agent: safeAgent || null,
          map: safeMap || null,
          mode: 'followup',
          coaching_output: text,
          share_coaching: shareCoaching === true,
          created_at: new Date().toISOString()
        });
      } catch {
        // Silently fail — don't break coaching if logging fails
      }
    }

    return new Response(JSON.stringify({ text }), { headers: { 'Content-Type': 'application/json' } });
  }

  // ── Main coaching mode (system + userContent already built above) ──
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1200,
      system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: userContent }],
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

  const isRejection = text.startsWith("These don't look like VOD notes.");
  if (!isRejection) {
    await sb.from('coaching_usage').upsert(
      { user_id: verifiedUserId, date: today, coaching_count: coachingCount + 1, followup_count: followupCount },
      { onConflict: 'user_id,date' }
    );
  }

  // Log training data if user opted in — use verified server-side userId only
  if (text) {
    try {
      await sb.from('coaching_training_data').insert({
        user_id: verifiedUserId,
        notes: safeNotes || null,
        agent: safeAgent || null,
        map: safeMap || null,
        mode,
        coaching_output: text,
        share_coaching: shareCoaching === true,
        created_at: new Date().toISOString()
      });
    } catch {
      // Silently fail — don't break coaching if logging fails
    }
  }

  return new Response(JSON.stringify({ text }), {
    headers: { 'Content-Type': 'application/json' }
  });
};