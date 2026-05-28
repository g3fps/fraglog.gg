import Anthropic from '@anthropic-ai/sdk';
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

  const client = new Anthropic({ apiKey: import.meta.env.ANTHROPIC_API_KEY });

  const prompt = `Generate a concise title for a Valorant VOD. Details:
Player: ${player}
Map: ${map}
Agent: ${agent}${kd ? `\nK/D: ${kd}` : ''}${ytTitle ? `\nYouTube title: "${ytTitle}"` : ''}

Rules: format like "Player Agent Map VOD" or natural variation, include rank if in YouTube title, max 60 chars, no quotes. Reply with only the title.`;

  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 80,
    messages: [{ role: 'user', content: prompt }],
  });

  const title = msg.content[0].type === 'text'
    ? msg.content[0].text.trim().replace(/^["']|["']$/g, '')
    : `${player} ${agent} ${map} VOD`;

  return new Response(JSON.stringify({ title }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
