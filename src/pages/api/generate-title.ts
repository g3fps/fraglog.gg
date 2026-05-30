import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const body = await request.json();
  const { videoId, map, agent, player, accessToken, existingTitles = [] } = body;

  if (!accessToken) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi'
  );
  const { data: { user } } = await sb.auth.getUser(accessToken);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  if (!videoId || !map || !agent || !player) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  let ytTitle = '';
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (res.ok) ytTitle = (await res.json()).title || '';
  } catch {}

  const prompt = `Generate a Valorant VOD title matching this exact style:

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
- Trailing ALL CAPS tag(s): rank (RADIANT, IMMORTAL) + a short punchy descriptor
- Good descriptors: RANKED, MVP, ENTRY, DOMINATION, CLUTCH, HIGHLIGHTS, FULL GAME, 1v5, or a kill count like 35 KILLS
- Only use PRO SCRIMS if the YouTube title explicitly confirms it's scrims or customs
- Default to RANKED when nothing notable stands out; only borrow from the YouTube title when it adds something genuinely interesting (high kill count, special game mode, notable matchup)
- Max 65 chars, no quotes

VOD info:
Player: ${player}
Map: ${map}
Agent: ${agent}${ytTitle ? `\nYouTube title: "${ytTitle}"` : ''}${existingTitles.length > 0 ? `\n\nAlready used titles (do not duplicate any of these):\n${existingTitles.slice(0, 100).join('\n')}` : ''}

Reply with only the title.`;

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
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) return new Response(JSON.stringify({ error: 'Anthropic API error' }), { status: 502 });

  const data = await res.json();
  const title = (data.content?.[0]?.text || `${player} ${agent} ${map} VOD`)
    .trim()
    .replace(/^["']|["']$/g, '');

  return new Response(JSON.stringify({ title }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
