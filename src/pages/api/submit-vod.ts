/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { checkRateLimit, getClientIp } from '../../lib/ratelimit.js';
import { verifyTurnstile } from '../../lib/turnstile.js';
import { MAPS, AGENTS } from '../../data/data.js';

const MAP_IDS = new Set(MAPS.map((m: any) => m.id));
const AGENT_IDS = new Set(AGENTS.map((a: any) => a.id));

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );
  const ip = getClientIp(request, clientAddress);

  // 1. IP rate limit first — cheap, and stops abuse of the Turnstile verify call
  const okIp = await checkRateLimit(sb, `submit:ip:${ip}`, 5, 60);
  if (!okIp) {
    return new Response(JSON.stringify({ error: 'Too many submissions. Try again in a minute.' }), { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const { video_id, map_id, agent_id, player, note, hp, turnstileToken } = body;

  // 2. Honeypot — bots fill hidden fields. Pretend success, drop silently.
  if (typeof hp === 'string' && hp.trim()) {
    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
  }

  // 3. Turnstile (human check)
  const human = await verifyTurnstile(turnstileToken, ip);
  if (!human) {
    return new Response(JSON.stringify({ error: 'Verification failed. Refresh the page and try again.' }), { status: 403 });
  }

  // 4. Validate
  const vid = String(video_id || '').trim();
  const map = String(map_id || '').trim().toLowerCase();
  const agent = String(agent_id || '').trim().toLowerCase();
  const safePlayer = String(player || '').trim().slice(0, 100);
  const safeNote = String(note || '').trim().slice(0, 300);

  if (!/^[a-zA-Z0-9_-]{11}$/.test(vid)) {
    return new Response(JSON.stringify({ error: 'Invalid YouTube video ID.' }), { status: 400 });
  }
  if (!MAP_IDS.has(map)) {
    return new Response(JSON.stringify({ error: 'Invalid map.' }), { status: 400 });
  }
  if (!AGENT_IDS.has(agent)) {
    return new Response(JSON.stringify({ error: 'Invalid agent.' }), { status: 400 });
  }
  if (!safePlayer) {
    return new Response(JSON.stringify({ error: 'Player name is required.' }), { status: 400 });
  }

  // 5. Insert via service role (the only writer once anon-insert RLS is removed)
  const { error } = await sb.from('vod_submissions').insert({
    video_id: vid,
    map_id: map,
    agent_id: agent,
    player: safePlayer,
    note: safeNote,
    status: 'pending',
    submitted_at: new Date().toISOString(),
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'Could not submit. Try again later.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
};
