/// <reference types="astro/client" />
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { notes, title, player } = await request.json();

  if (!notes?.trim()) {
    return new Response(JSON.stringify({ error: 'No notes provided' }), { status: 400 });
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 1000,
      system: 'You are a Valorant coaching assistant helping players learn from pro and Radiant player VODs. The user has taken notes while watching a pro player\'s POV. Analyze their notes and extract: key mechanics and techniques used by the pro that the viewer should practice, positioning or movement patterns worth copying, utility usage habits to adopt, decision-making tendencies to study, and specific things to drill in their own games. Be direct and actionable. Use short bold headers. Keep it under 300 words.',
      messages: [{
        role: 'user',
        content: `VOD: ${title}\nPlayer: ${player}\n\nMy notes:\n${notes}\n\nSummarize the key patterns and what I should focus on studying.`
      }]
    })
  });

  const data = await response.json();
  console.log("Anthropic response:", JSON.stringify(data));
  const text = data.content?.[0]?.text || 'No summary generated.';

  return new Response(JSON.stringify({ text }), {
    headers: { 'Content-Type': 'application/json' }
  });
};