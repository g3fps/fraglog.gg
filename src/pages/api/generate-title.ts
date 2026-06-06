/// <reference types="astro/client" />
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { isAdminEmail } from '../../lib/admin.js';
import { checkRateLimit } from '../../lib/ratelimit.js';

export const prerender = false;

function loadExistingTitles(): string[] {
  try {
    const content = readFileSync(resolve('src/data/data.js'), 'utf-8');
    return [...content.matchAll(/title:"([^"]+)"/g)].map(m => m[1]);
  } catch { return []; }
}

// Two titles are duplicates if they have the same word set, OR if one has exactly
// one extra word (a team prefix like C9, NRG) and all other words match.
function isDuplicate(candidate: string, existingTitles: string[]): boolean {
  const words = (s: string) => new Set(s.toLowerCase().trim().split(/\s+/));
  const cand = words(candidate);
  return existingTitles.some(t => {
    const exist = words(t);
    if (cand.size === exist.size) return [...cand].every(w => exist.has(w));
    if (Math.abs(cand.size - exist.size) === 1) {
      const [larger, smaller] = cand.size > exist.size ? [cand, exist] : [exist, cand];
      return [...smaller].every(w => larger.has(w));
    }
    return false;
  });
}

async function callAnthropic(prompt: string): Promise<string | null> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': import.meta.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5',
      max_tokens: 80,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return (data.content?.[0]?.text || '').trim().replace(/^["']|["']$/g, '') || null;
}

export async function POST({ request }: { request: Request }) {
  const body = await request.json();
  const { videoId, map, agent, player, accessToken } = body;

  if (!accessToken) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi'
  );
  const { data: { user } } = await sb.auth.getUser(accessToken);
  if (!isAdminEmail(user?.email)) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

  // Generous circuit-breaker against a runaway loop (admin-only endpoint)
  const okBurst = await checkRateLimit(sb, `gentitle:user:${user.id}`, 30, 60);
  if (!okBurst) return new Response(JSON.stringify({ error: 'Too many requests. Try again in a minute.' }), { status: 429 });

  if (!videoId || !map || !agent || !player) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // Always load fresh from data.js — don't trust client-supplied list
  const existingTitles = loadExistingTitles();

  let ytTitle = '';
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (res.ok) ytTitle = (await res.json()).title || '';
  } catch {}

  const buildPrompt = (banned: string[]) => `Generate a Valorant VOD title matching this exact style:

Examples:
"ENVY demon1 Jett Ascent RADIANT RANKED"
"C9 OXY Jett Ascent RADIANT ENTRY"
"NRG s0m Omen Ascent RADIANT MVP"
"aspas Jett Ascent RADIANT DOMINATION"
"NAVI hiro Phoenix Ascent RADIANT RANKED"
"Tarik Jett Ascent RADIANT ENTRY"

Format: [TEAM] Player Agent Map RANK DESCRIPTOR
- TEAM prefix (org abbreviation like ENVY, C9, NRG, PRX, TL) only if confirmed in YouTube title — omit if unknown
- Player name as-is (preserve casing like TenZ, s0m, OXY)
- Agent and Map in Title Case
- End with 1-3 ALL CAPS words that describe the VOD — invent whatever fits best, no fixed list
- Draw from the YouTube title if it has something interesting (kill count, game mode, matchup); otherwise make something up
- If a tag combo is already used for this player/agent/map, pick something different — there are unlimited options
- Max 65 chars, no quotes

VOD info:
Player: ${player}
Map: ${map}
Agent: ${agent}${ytTitle ? `\nYouTube title: "${ytTitle}"` : ''}${banned.length > 0 ? `\n\nDo NOT generate any of these titles or anything with the same words regardless of order or team prefix:\n${banned.join('\n')}` : ''}

Reply with only the title.`;

  // Try up to 3 times, feeding duplicates back each round
  const banned = [...existingTitles];
  let title: string | null = null;

  for (let attempt = 0; attempt < 3; attempt++) {
    const candidate = await callAnthropic(buildPrompt(banned));
    if (!candidate) return new Response(JSON.stringify({ error: 'Anthropic API error' }), { status: 502 });

    if (!isDuplicate(candidate, existingTitles)) {
      title = candidate;
      break;
    }
    banned.push(candidate);
  }

  if (!title) {
    const tc = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    title = `${player} ${tc(agent)} ${tc(map)} RADIANT RANKED`;
  }

  return new Response(JSON.stringify({ title }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
