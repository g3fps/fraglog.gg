import { AGENT_KNOWLEDGE } from './valorant-knowledge.js';

const RANK_TO_RR = {
  'iron 1':0,'iron 2':100,'iron 3':200,
  'bronze 1':300,'bronze 2':400,'bronze 3':500,
  'silver 1':600,'silver 2':700,'silver 3':800,
  'gold 1':900,'gold 2':1000,'gold 3':1100,
  'platinum 1':1200,'platinum 2':1300,'platinum 3':1400,
  'diamond 1':1500,'diamond 2':1600,'diamond 3':1700,
  'ascendant 1':1800,'ascendant 2':1900,'ascendant 3':2000,
  'immortal 1':2100,'immortal 2':2200,'immortal 3':2300,
  'radiant':2400,
};
const rankToRR = (s) => RANK_TO_RR[String(s).toLowerCase().trim()] ?? null;

const JSON_SCHEMA = `Return ONLY valid JSON, no markdown, no other text:
{"stats":{"target_wr":55,"games_per_day":6,"daily_hours":"~5h","games_needed":106},"wake_time":"9:00 AM","schedule":[{"id":"s1","time":"9:00 AM","category":"wakeup","title":"Wake Up Move Eat","duration":30,"count":"","description":"<original description here>"},{"id":"s2","time":"11:15 AM","category":"ranked","title":"First Ranked Block","duration":175,"count":"5 games","description":"<original description here>"}]}`;

/**
 * Sanitize the raw request body and build the system + user prompts for the
 * routine generator. Shared by the API route and the prompt-iteration harness
 * so the two never drift.
 *
 * @param {object} body - raw request body ({ goals, timePerDay, fineTune, currentRoutine, routineDetails, wakeTime })
 * @param {object} [opts]
 * @param {string} [opts.today] - YYYY-MM-DD, defaults to today
 * @returns {{ systemPrompt, userContent, isFineTune, safeGoals, safeTimePerDay, safeDetails, safeWakeTime, allGoalText }}
 */
export function buildRoutinePrompt(body, opts = {}) {
  const { goals, timePerDay, fineTune, currentRoutine, routineDetails, wakeTime } = body || {};
  const today = opts.today || new Date().toISOString().slice(0, 10);
  const isFineTune = typeof fineTune === 'string' && fineTune.trim().length > 0;

  // ── Sanitize inputs ───────────────────────────────────────────
  const safeGoals = (Array.isArray(goals) ? goals : []).slice(0, 10).map((g) => {
    const winRR = Array.isArray(g.win_rr) ? g.win_rr.slice(0, 500).map(Number).filter(n => n > 0) : [];
    const lossRR = Array.isArray(g.loss_rr) ? g.loss_rr.slice(0, 500).map(Number).filter(n => n > 0) : [];
    const dodgeRR = Array.isArray(g.dodge_rr) ? g.dodge_rr.slice(0, 500).map(Number).filter(n => n > 0) : [];
    return {
      type: String(g.type || '').slice(0, 50),
      title: String(g.title || '').slice(0, 200),
      target: String(g.target || '').slice(0, 200),
      current_value: String(g.current_value || '').slice(0, 200),
      deadline: String(g.deadline || '').slice(0, 20),
      wins: winRR.length || Math.min(Math.max(Number(g.wins) || 0, 0), 9999),
      losses: lossRR.length || Math.min(Math.max(Number(g.losses) || 0, 0), 9999),
      win_rr: winRR,
      loss_rr: lossRR,
      dodge_rr: dodgeRR,
      current_rr: Number(g.current_rr) || 0,
      notes: String(g.notes || '').slice(0, 500),
    };
  });

  const safeTimePerDay = Math.max(Number(timePerDay) || 60, 15);
  const safeFineTune = isFineTune ? String(fineTune).slice(0, 400) : '';
  const safeDetails = typeof routineDetails === 'string' ? routineDetails.slice(0, 600) : '';
  const safeWakeTime = typeof wakeTime === 'string' ? wakeTime.slice(0, 30) : '';
  const safeCurrentRoutine = isFineTune && currentRoutine && typeof currentRoutine === 'object'
    ? JSON.stringify(currentRoutine).slice(0, 3000)
    : null;

  const goalsText = safeGoals.map((g, i) => {
    let text = `Goal ${i + 1} [${g.type}]: ${g.title}`;
    if (g.current_value) text += `\n  Current: ${g.current_value}`;
    if (g.target) text += `\n  Target: ${g.target}`;
    if (g.deadline) {
      const daysLeft = Math.ceil((new Date(g.deadline).getTime() - Date.now()) / 86400000);
      text += `\n  Deadline: ${g.deadline} (${daysLeft > 0 ? daysLeft + ' days left' : 'overdue'})`;
    }
    if (g.type === 'rank') {
      const total = g.wins + g.losses;
      const wr = total > 0 ? Math.round((g.wins / total) * 100) : null;
      text += `\n  Ranked record: ${g.wins}W - ${g.losses}L${wr !== null ? ` (${wr}% win rate)` : ' (just started)'}`;
      const sumWin = g.win_rr.reduce((a, b) => a + b, 0);
      const sumLoss = g.loss_rr.reduce((a, b) => a + b, 0);
      const sumDodge = (g.dodge_rr || []).reduce((a, b) => a + b, 0);
      const netRR = sumWin - sumLoss - sumDodge;
      if (g.win_rr.length || g.loss_rr.length) {
        const avgWin = g.win_rr.length ? (sumWin / g.win_rr.length).toFixed(0) : null;
        const avgLoss = g.loss_rr.length ? (sumLoss / g.loss_rr.length).toFixed(0) : null;
        if (avgWin) text += `\n  Avg RR: +${avgWin} per win / -${avgLoss || '?'} per loss`;
      }
      if (g.dodge_rr && g.dodge_rr.length) {
        text += `\n  Dodges: ${g.dodge_rr.length} (−${sumDodge} RR total, not counted in win rate)`;
      }
      const curBase = rankToRR(g.current_value);
      const tarBase = rankToRR(g.target);
      if (curBase !== null && tarBase !== null) {
        const remainingRR = tarBase - (curBase + (g.current_rr || 0)) - netRR;
        text += `\n  RR remaining to goal: ${Math.max(remainingRR, 0)}`;
      }
    }
    if (g.notes) text += `\n  Notes: ${g.notes}`;
    return text;
  }).join('\n\n');

  // Detect any agent mentioned across all goal text and inject their knowledge
  const allGoalText = safeGoals.map(g => `${g.title} ${g.notes} ${g.current_value} ${g.target}`).join(' ').toLowerCase();
  const agentContext = Object.entries(AGENT_KNOWLEDGE)
    .filter(([name]) => allGoalText.includes(name))
    .map(([name, data]) => {
      const mistakes = Object.values(data.abilities ?? {})
        .flatMap((a) => a.common_mistakes ?? [])
        .slice(0, 5)
        .map((m) => `  - ${m}`)
        .join('\n');
      return `AGENT CONTEXT — ${name.toUpperCase()}:\nRole: ${data.role}\nPhilosophy: ${data.core_philosophy}${mistakes ? `\nCommon mistakes:\n${mistakes}` : ''}`;
    })
    .join('\n\n');

  let systemPrompt;
  let userContent;

  if (isFineTune) {
    systemPrompt = `You are a no-nonsense Valorant coach updating an existing daily practice plan based on a player request.

The player's adjustment request overrides all other rules. Apply it and return the COMPLETE updated plan with the exact same JSON structure. Only change what was explicitly requested — preserve everything else identical.

Each schedule item must have a "description": 1–3 short punchy sentences, direct and opinionated, specific to the player's rank and goal. Write like a real coach, not a helpful assistant.

${JSON_SCHEMA}`;

    userContent = `CURRENT PLAN:
${safeCurrentRoutine || '(none)'}

ADJUSTMENT REQUEST: "${safeFineTune}"

GOALS:
${goalsText}
${agentContext ? `\n${agentContext}\n` : ''}
Time available: up to ${safeTimePerDay} min${safeWakeTime ? `\nWake time: ${safeWakeTime}` : ''}${safeDetails ? `\nPreferences: ${safeDetails}` : ''}`;
  } else {
    systemPrompt = `You are a no-nonsense Valorant coach building a daily improvement plan. Focus on making the player better — not on RR, win rates, or stats. Rank is a byproduct of improvement. Be direct and opinionated. Write like a real coach, not a helpful assistant.

The player's own notes and preferences override any of the rules below — always honor what they've asked for.

VALORANT RANKS (lowest to highest): Iron 1→3, Bronze 1→3, Silver 1→3, Gold 1→3, Platinum 1→3, Diamond 1→3, Ascendant 1→3, Immortal 1→3, Radiant
100 RR per rank within a tier. 300 RR per tier (3 ranks).

SCHEDULE CATEGORIES:
- wakeup: Pre-game routine. No screens, eat something, move your body.
- warmup: Pre-game aim warm-up before ranked. Can suggest DM, TDM, or aim trainer. Drill types include static clicking, dynamic clicking, or micro-adjustment. Do NOT suggest crosshair placement or map-walking here — those are deliberate training activities, not warmup. Do NOT name specific scenarios/playlists or give time splits within the block.
- ranked: Competitive games. Max 5 games per block. If the session calls for more total games, split into two blocks with a break or review/vod in between. For rank or agent goals, ranked is where everything gets applied — include it by default. For mechanics or aim goals, DM and TDM give more reps per hour and are often more optimal — don't force ranked just to fill time.
- review: Own replays only. Never mention fraglog.gg here. Directional, not prescriptive — you don't know what they need to fix.
- vod: Pro VOD on fraglog.gg. Always schedule AFTER review so the player can compare what they just watched in their own replay. No area of focus needed — the contrast speaks for itself.
- break: Off-screen reset. Only place between ranked blocks — never between review and vod, and never immediately before done. Review + vod already counts as a mental break from playing.
- done: Hard stop. ALWAYS final. Why stopping here matters.
- custom: Deliberate skill training. IMPORTANT: be realistic about what the mode supports. DM has enemies but no ultimates — do not suggest ult-dependent drills in DM. Custom games without bots have no enemies — do not suggest combat drills that require targets. Movement/positioning abilities (dashes, jumps, lineups) are fine to practice in custom. Keep custom blocks short and focused — 15–25 min max.

SCHEDULE RULES:
- Start with wakeup then warmup unless total time < 30 min.
- Times are sequential from wake_time. Compute each start from previous end.
- Only include what's genuinely productive — don't pad.
- Title: short and natural, reads like a real phrase — not a list of verbs. Commas allowed if listing. No dashes.
- Max 12 items.
- count: include for ranked ("X games"), vod ("X VODs"), and review ("X replays"). Leave empty for all other categories.
- BREAK PLACEMENT: breaks go between ranked blocks only. NEVER after review or vod — that block already serves as the mental break from playing. NEVER immediately before done.

DESCRIPTION RULES:
- 1–2 sentences max. Direct, opinionated, focused on improvement — never reference rank, RR, stats, or win rate.
- Short declarative sentences. Fragments are fine. Never say "you should", "consider", or "try to".
- The tone to match (do NOT copy these — write original descriptions tailored to the player):
  warmup: motivational and direct — suggest drill types or modes but no specific scenarios, playlists, or time splits
  ranked: mindset or approach for this block — not invented tactics
  review: directional, not prescriptive — you don't know what they need to fix
  break: blunt about why it matters, not soft
  done: firm, conveys why stopping matters — no need to quote RR numbers or days remaining

STATS RULES (for rank goals):
- target_wr: ceil(avg_loss_rr / (avg_win_rr + avg_loss_rr) * 100) + 5, clamped 52–65. Use +20/-18 if no history.
- games_per_day: floor(total minutes of ranked-category blocks / 35)
- daily_hours: total session length in "~Xh" or "~X.5h" (nearest half hour)
- games_needed: ceil(rr_remaining / ((target_wr/100)*avg_win − ((100-target_wr)/100)*avg_loss)). Use the pre-computed "RR remaining to goal" from the goal data. Set to 0 if no rank goal.

${JSON_SCHEMA}`;

    userContent = `Today: ${today}
Wake time: ${safeWakeTime || 'not specified (use a reasonable default like 10:00 AM)'}
Time available: ${safeTimePerDay} min${safeDetails ? `\nPreferences: ${safeDetails}` : ''}

${goalsText}
${agentContext ? `\n${agentContext}\n` : ''}
Build the complete gameplan.`;
  }

  return { systemPrompt, userContent, isFineTune, safeGoals, safeTimePerDay, safeDetails, safeWakeTime, allGoalText };
}
