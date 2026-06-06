/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { checkRateLimit, getClientIp } from '../../lib/ratelimit.js';

/**
 * Lightweight server-side routine mutations (clear, time-per-day).
 * The routine table is written with the service key — the client (anon key
 * under RLS) cannot write it, which is why these can't be done client-side.
 */
export const POST: APIRoute = async ({ request, clientAddress }) => {
  const authHeader = request.headers.get('authorization');
  const accessToken = authHeader?.replace('Bearer ', '').trim();

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

  let verifiedUserId: string | null = null;
  if (accessToken) {
    try {
      const { data: { user } } = await sb.auth.getUser(accessToken);
      verifiedUserId = user?.id || null;
    } catch {
      // invalid/expired
    }
  }

  if (!verifiedUserId) {
    return new Response(JSON.stringify({ error: 'Sign in to update your gameplan.' }), { status: 401 });
  }

  const ip = getClientIp(request, clientAddress);
  const ok = await checkRateLimit(sb, `saveroutine:user:${verifiedUserId}`, 20, 60);
  if (!ok) {
    return new Response(JSON.stringify({ error: 'Too many requests. Try again in a minute.' }), { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const { clear, timePerDay } = body as { clear?: boolean; timePerDay?: number };

  // `tasks` is NOT NULL — a cleared routine is an empty object, not null.
  const updates: Record<string, any> = {};
  if (clear === true) updates.tasks = {};
  if (timePerDay !== undefined) {
    const t = Number(timePerDay);
    if (!Number.isFinite(t) || t < 1 || t > 1440) {
      return new Response(JSON.stringify({ error: 'Invalid time per day.' }), { status: 400 });
    }
    updates.time_per_day = Math.round(t);
  }

  if (Object.keys(updates).length === 0) {
    return new Response(JSON.stringify({ error: 'Nothing to update.' }), { status: 400 });
  }

  // Update the existing row; if there's no routine row yet, create a minimal one.
  const { data, error } = await sb
    .from('routine')
    .update(updates)
    .eq('user_id', verifiedUserId)
    .select('user_id');
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  if (!data || data.length === 0) {
    const { error: insErr } = await sb
      .from('routine')
      .insert({ user_id: verifiedUserId, tasks: {}, ...updates });
    if (insErr) {
      return new Response(JSON.stringify({ error: insErr.message }), { status: 500 });
    }
  }

  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
};
