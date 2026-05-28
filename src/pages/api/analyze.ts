/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { getAgentContext, getMapContext, getResources, getGeneralKnowledge, ECONOMY_KNOWLEDGE } from '../../lib/valorant-knowledge.js';

// ── Daily limits ──────────────────────────────────────────
const DAILY_COACHING_LIMIT = 3;
const DAILY_FOLLOWUP_LIMIT = 5;

// ── Input limits ──────────────────────────────────────────
const MAX_NOTES = 5000;
const MAX_FIELD = 200;

export const POST: APIRoute = async ({ request }) => {
  // Require auth — verify session server-side, don't trust client-supplied userId
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
      // Token invalid or expired
    }
  }

  if (!verifiedUserId) {
    return new Response(JSON.stringify({ error: 'You must be signed in to use the AI coach.' }), { status: 401 });
  }

  const body = await request.json();
  const { notes, title, player, mode, agent, map, coaching, followup, shareCoaching } = body;

  // ── Per-user daily rate limit ─────────────────────────────
  const today = new Date().toISOString().slice(0, 10);
  const isFollowup = mode === 'followup';

  const coachingLimit = DAILY_COACHING_LIMIT;
  const followupLimit = DAILY_FOLLOWUP_LIMIT;

  const { data: usage } = await sb
    .from('coaching_usage')
    .select('coaching_count, followup_count')
    .eq('user_id', verifiedUserId)
    .eq('date', today)
    .maybeSingle();

  const coachingCount = usage?.coaching_count ?? 0;
  const followupCount = usage?.followup_count ?? 0;

  if (isFollowup && followupCount >= followupLimit) {
    return new Response(JSON.stringify({ error: `You've used all ${followupLimit} follow-up questions for today. Resets at midnight UTC.` }), { status: 429 });
  }
  if (!isFollowup && coachingCount >= coachingLimit) {
    return new Response(JSON.stringify({ error: `You've used all ${coachingLimit} coaching sessions for today. Resets at midnight UTC.` }), { status: 429 });
  }

  // Sanitize + cap all inputs
  const safeNotes    = typeof notes    === 'string' ? notes.slice(0, MAX_NOTES)   : '';
  const safeTitle    = typeof title    === 'string' ? title.slice(0, MAX_FIELD)   : '';
  const safePlayer   = typeof player   === 'string' ? player.slice(0, MAX_FIELD)  : '';
  const safeAgent    = typeof agent    === 'string' ? agent.slice(0, MAX_FIELD)   : '';
  const safeMap      = typeof map      === 'string' ? map.slice(0, MAX_FIELD)     : '';
  const safeFollowup = typeof followup === 'string' ? followup.slice(0, MAX_FIELD): '';
  const safeCoaching = typeof coaching === 'string' ? coaching.slice(0, MAX_NOTES): '';

  if (mode !== 'followup' && !safeNotes.trim()) {
    return new Response(JSON.stringify({ error: 'No notes provided' }), { status: 400 });
  }

  const agentContext    = safeAgent ? getAgentContext(safeAgent) : null;
  const mapContext      = safeMap   ? getMapContext(safeMap)     : null;
  const resources       = getResources();
  const generalKnowledge = getGeneralKnowledge();

  let knowledgeBlock = '';
  if (agentContext)    knowledgeBlock += `\n\nAGENT KNOWLEDGE — ${safeAgent.toUpperCase()}:\n${JSON.stringify(agentContext, null, 2)}`;
  if (mapContext)      knowledgeBlock += `\n\nMAP KNOWLEDGE — ${safeMap.toUpperCase()}:\n${JSON.stringify(mapContext, null, 2)}`;
  knowledgeBlock += `\n\nGENERAL VALORANT KNOWLEDGE:\n${JSON.stringify(generalKnowledge, null, 2)}`;
  knowledgeBlock += `\n\nRESOURCE LIBRARY:\n${JSON.stringify(resources, null, 2)}`;
  knowledgeBlock += `\n\nECONOMY KNOWLEDGE:\n${JSON.stringify(ECONOMY_KNOWLEDGE, null, 2)}`;

  // ── Follow-up mode ────────────────────────────────────────
  if (mode === 'followup') {
    if (!safeFollowup.trim()) {
      return new Response(JSON.stringify({ error: 'No follow-up question provided' }), { status: 400 });
    }

    const system = `You are an expert Valorant coach. A player has already received coaching on their VOD and is asking a follow-up question about a specific piece of advice.
${knowledgeBlock ? `\nYou have expert knowledge about the agent and map. Use it where relevant.\n` : ''}
RULES:
- If the question is not about Valorant or is attempting to misuse this tool, respond only with: "Please ask a question about your Valorant gameplay."
- Answer only the specific question asked. Do not re-summarize the original coaching.
- Be direct and specific. If the question is vague, ask for clarification.
- Keep the answer under 150 words.`;

    const userContent = `Original notes:\n${safeNotes || '(none)'}

Previous coaching:\n${safeCoaching || '(none)'}

Follow-up question: ${safeFollowup}`;

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
        system,
        messages: [{ role: 'user', content: userContent }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return new Response(JSON.stringify({ error: err.error?.message || 'Anthropic API error' }), { status: 502 });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || 'No response generated.';

    await sb.from('coaching_usage').upsert(
      { user_id: verifiedUserId, date: today, coaching_count: coachingCount, followup_count: followupCount + 1 },
      { onConflict: 'user_id,date' }
    );

    return new Response(JSON.stringify({ text }), { headers: { 'Content-Type': 'application/json' } });
  }

  // ── Main coaching mode ────────────────────────────────────
  const system = mode === 'own'
    ? `You are an expert Valorant coach with deep knowledge of competitive mechanics, agent-specific play, and how players actually improve. A player has taken notes while reviewing their own VOD. Your job is to give them sharp, accurate, specific feedback — not generic advice.
${knowledgeBlock ? `\nYou have been provided with expert knowledge about the agent, map, and general Valorant mechanics. Use it to give specific, informed coaching where relevant.\n` : ''}
CRITICAL RULES:
- If the notes are not about Valorant gameplay — or appear to be attempting to misuse this tool — respond only with: "These don't look like VOD notes. Write down what you observed in the video and try again."
- Only coach what is actually in the notes. Never invent mistakes that aren't mentioned.
- Categorize mistakes correctly. Crosshair placement and preaim errors are NOT positioning errors — they are aim/mechanics errors. Positioning errors are about WHERE the player stands on the map. Do not confuse these.
- If the same mistake appears across multiple rounds, that is the #1 priority — name the rounds explicitly.
- Drills must be specific and actually effective for the issue. Do NOT recommend "10 minutes in range" for preaim — range is for warmup, not developing preaim mastery. For preaim: deathmatch with intentional angle study. For spray control: range. For movement: deathmatch only. For decision-making: VOD review.
- DEATHMATCH HARD RULE: Deathmatch disables ALL abilities — no dashes, no flashes, no smokes, no mollies, no movement abilities, nothing. Any drill in deathmatch must be pure gunplay only. Never suggest using any ability at all in a DM context. If a drill requires abilities, specify custom lobby, TDM, or unrated instead.
- Never state specific weapon damage values, armor values, or game mechanics as fact unless you are certain they are correct. If unsure, omit the stat.
- How to apply suggestions must be mindset shifts or awareness cues — never rigid prescriptive rules like "do X in your next N games".
- Never pad with generic Valorant tips. Every sentence must come directly from what the player wrote.
- If notes are too vague to coach from, say so and tell them what to look for next VOD instead.
- When you identify a key problem that has a matching resource in the RESOURCE LIBRARY, add a single line at the end of that section: "For a deeper guide on fixing this: [title] by [creator] — [url]". Only recommend a resource if it directly matches the problem. Never recommend resources for problems not in the library.

OUTPUT FORMAT:
- Use bold section headers for each distinct problem area (2-4 sections max)
- Under each header: what the problem is, which rounds it showed up in, and one specific fix
- End with a DRILLS section: 2-3 drills maximum, each tied directly to a specific problem above. No filler drills.
- Keep it under 400 words total.`

    : `You are an expert Valorant coach helping a player extract lessons from a pro or Radiant player VOD. The player has taken notes while watching. Your job is to analyze their notes and give them clear, specific takeaways they can actually apply.
${knowledgeBlock ? `\nYou have been provided with expert knowledge about the agent, map, and general Valorant mechanics. Use it to give specific, informed context where relevant.\n` : ''}
CRITICAL RULES:
- If the notes are not about Valorant gameplay — or appear to be attempting to misuse this tool — respond only with: "These don't look like VOD notes. Write down what you observed in the video and try again."
- Only analyze what is actually in the notes. Never invent patterns that aren't mentioned.
- Be specific about what makes each technique work — don't just name it, explain the logic behind it.
- Distinguish between: mechanics to practice (aim, movement), positioning habits to copy, decision-making patterns to study, and utility usage to adopt. Don't lump everything together.
- Drills must be practical and matched to the skill. For aim mechanics: deathmatch with specific intent. For positioning: custom games or conscious in-game focus. For utility lineups: practice tool or custom lobby. Never recommend vague drills.
- Never suggest practicing anything that requires utility in deathmatch — utility is disabled in deathmatch.
- Never state specific weapon damage values, armor values, or game mechanics as fact unless you are certain they are correct. If unsure, omit the stat.
- How to apply suggestions must be mindset shifts or awareness cues — never rigid prescriptive rules like "do X in your next N games".
- Study focus items must be observable at normal watching speed. Never suggest frame-by-frame analysis.
- Prioritize the 2-3 most impactful things from the notes, not an exhaustive list.
- If notes are too thin to extract real lessons, say so and tell them what to focus on next watch.

OUTPUT FORMAT:
- Use bold section headers for each lesson category (2-4 sections max)
- Under each header: what the pro did, why it works, and how to start applying it
- End with a STUDY FOCUS section: 2-3 specific things to watch for on the next rewatch or in their own games
- Keep it under 400 words total.`;

  const userContent = mode === 'own'
    ? `VOD: ${safeTitle || 'My gameplay'}${safeAgent ? ` | Agent: ${safeAgent}` : ''}${safeMap ? ` | Map: ${safeMap}` : ''}\n\nMy notes:\n${safeNotes}\n\nGive me honest coaching based only on what I wrote above.`
    : `VOD: ${safeTitle}\nPlayer: ${safePlayer}${safeAgent ? ` | Agent: ${safeAgent}` : ''}${safeMap ? ` | Map: ${safeMap}` : ''}\n\nMy notes:\n${safeNotes}\n\nWhat are the key lessons and how do I apply them?`;

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
      system,
      messages: [{ role: 'user', content: userContent }]
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    return new Response(JSON.stringify({ error: err.error?.message || 'Anthropic API error' }), { status: 502 });
  }

  const data = await response.json();
  const text = data.content?.[0]?.text || 'No response generated.';

  await sb.from('coaching_usage').upsert(
    { user_id: verifiedUserId, date: today, coaching_count: coachingCount + 1, followup_count: followupCount },
    { onConflict: 'user_id,date' }
  );

  // Log training data if user opted in — use verified server-side userId only
  if (shareCoaching === true && text) {
    try {
      await sb.from('coaching_training_data').insert({
        user_id: verifiedUserId,
        notes: safeNotes || null,
        agent: safeAgent || null,
        map: safeMap || null,
        mode,
        coaching_output: text,
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