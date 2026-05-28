import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const body = await request.json();
  const { videoId, map, agent, player, kd, accessToken } = body;

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

  const prompt = `Generate a concise title for a Valorant VOD. Details:
Player: ${player}
Map: ${map}
Agent: ${agent}${kd ? `\nK/D: ${kd}` : ''}${ytTitle ? `\nYouTube title: "${ytTitle}"` : ''}

Rules: format like "Player Agent Map VOD" or natural variation, include rank if in YouTube title, max 60 chars, no quotes. Reply with only the title.`;

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
