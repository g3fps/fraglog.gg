/// <reference types="astro/client" />
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '../../lib/admin.js';
import { checkRateLimit } from '../../lib/ratelimit.js';

export const prerender = false;

const SUPABASE_URL = 'https://cvdtykmkajmhlxydhzzl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi';

async function loadExistingTitles(sb: any): Promise<string[]> {
  try {
    const { data } = await sb.from('vods').select('title').limit(5000);
    return (data || []).map((v: any) => v.title);
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

const SYSTEM_PROMPT = `Generate a Valorant VOD title matching this exact style:

Examples:
"demon1 Jett Ascent RADIANT OPERATOR"
"C9 OXY Jett Icebox RADIANT CLUTCH"
"NRG s0m Omen Haven RADIANT LURK"
"aspas Jett Split RADIANT ACE"
"NAVI hiro Phoenix Bind RADIANT PISTOL ROUND"
"TenZ Jett Fracture RADIANT ECO FRAGS"
"Tarik Skye Pearl RADIANT RETAKE"
"PRX f0rsakeN Chamber Lotus RADIANT POST PLANT"
"nAts Cypher Bind RADIANT ANCHOR"
"Dasnerth Killjoy Split RADIANT LOCKDOWN"

Format: [TEAM] Player Agent Map DESCRIPTOR
- TEAM prefix: if the YouTube title contains an esports org or team name/abbreviation appearing before or near the player name, extract the abbreviation and prepend it (e.g. "Cloud9 OXY..." → "C9", "NRG s0m..." → "NRG", "Paper Rex f0rsakeN..." → "PRX"). Omit if no team is clearly present.
- Player name: copy it EXACTLY as given — do not alter capitalization, spelling, or punctuation
- Agent and Map in Title Case
- End with 2-3 ALL CAPS words from the approved descriptor lists below. ONLY use words from these lists — do not invent descriptors. RADIANT may be used as the first word (e.g. "RADIANT ACE", "RADIANT OPERATOR") but is not required — vary the ending across titles for uniqueness.
- Pick the descriptor that best fits the agent's role:
  - Duelists (Jett, Reyna, Raze, Neon, Phoenix, Yoru, Iso, Waylay): ENTRY, OPERATOR, RIFLE, ACE, CLUTCH, DUELS, FRAG REEL, AGGRESSIVE, PEEK
  - Initiators (Sova, Breach, Skye, KAY/O, Fade, Gekko, Tejo): ENTRY, RETAKE, UTIL DUMP, INFO, SUPPORT, FLANK, ACE, CLUTCH
  - Controllers (Omen, Viper, Brimstone, Astra, Harbor, Clove, Miks): SMOKES, LURK, CONTROL, SETUP, POST PLANT, ROTATE, ACE, CLUTCH
  - Sentinels (Sage, Cypher, Killjoy, Chamber, Deadlock, Vyse, Veto): ANCHOR, LOCKDOWN, SITE HOLD, RETAKE, SENTINEL PLAY, SETUPS, TRIPS, ACE, CLUTCH
  - Any role: RADIANT, RANKED, MVP, DOMINATION, COMEBACK, OVERTIME, ACE, CLUTCH
- If the YouTube title mentions a specific kill count (e.g. "40 kills"), round number (e.g. "30 BOMB"), or game situation, use that as the descriptor instead (e.g. "40 KILLS", "30 BOMB")
- Max 65 chars, no quotes

Reply with only the title.`;

async function callAnthropic(player: string, map: string, agent: string, ytTitle: string, recentlyRejected: string[]): Promise<string | null> {
  const userMessage = `Player (use EXACTLY this, do not change case): ${player}
Map: ${map}
Agent: ${agent}${ytTitle ? `\nYouTube title: "${ytTitle}"` : ''}${recentlyRejected.length > 0 ? `\n\nDo NOT use any of these (already taken):\n${recentlyRejected.join('\n')}` : ''}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': import.meta.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 80,
      system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: userMessage }],
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

  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data: { user } } = await sb.auth.getUser(accessToken);
  if (!user || !isAdminEmail(user.email)) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

  // Generous circuit-breaker against a runaway loop (admin-only endpoint)
  const okBurst = await checkRateLimit(sb, `gentitle:user:${user.id}`, 30, 60);
  if (!okBurst) return new Response(JSON.stringify({ error: 'Too many requests. Try again in a minute.' }), { status: 429 });

  if (!videoId || !map || !agent || !player) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // Always load fresh from Supabase — don't trust client-supplied list
  const existingTitles = await loadExistingTitles(sb);

  let ytTitle = '';
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (res.ok) ytTitle = (await res.json()).title || '';
  } catch {}

  // Check duplicates server-side — never send the full existing list to the model
  const recentlyRejected: string[] = [];
  let title: string | null = null;

  for (let attempt = 0; attempt < 3; attempt++) {
    const candidate = await callAnthropic(player, map, agent, ytTitle, recentlyRejected);
    if (!candidate) return new Response(JSON.stringify({ error: 'Anthropic API error' }), { status: 502 });

    if (!isDuplicate(candidate, existingTitles)) {
      title = candidate;
      break;
    }
    recentlyRejected.push(candidate);
  }

  if (!title) {
    const tc = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    title = `${player} ${tc(agent)} ${tc(map)} RADIANT RANKED`;
  }

  return new Response(JSON.stringify({ title }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
