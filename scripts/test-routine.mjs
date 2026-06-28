// Prompt-iteration harness for the routine generator.
// Runs sample inputs through the SAME prompt builder the API route uses,
// hits the Anthropic API directly (no auth / DB / rate limit), and prints
// the resulting gameplans so you can judge prompt quality fast.
//
//   node scripts/test-routine.mjs              # run all cases
//   node scripts/test-routine.mjs rank         # run cases whose name includes "rank"
//   node scripts/test-routine.mjs --raw        # also dump the raw model text
//
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildRoutinePrompt } from '../src/lib/routine-prompt.js';
import { writeReport } from './_report.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Load .env (no dotenv dependency) ───────────────────────────
function loadEnv() {
  try {
    const raw = readFileSync(join(ROOT, '.env'), 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
      if (m) {
        let v = m[2].trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
        if (!(m[1] in process.env)) process.env[m[1]] = v;
      }
    }
  } catch { /* fall back to ambient env */ }
}
loadEnv();

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error('Missing ANTHROPIC_API_KEY (looked in .env and process.env).');
  process.exit(1);
}

const MODEL = 'claude-sonnet-4-6';
const args = process.argv.slice(2);
const SHOW_RAW = args.includes('--raw');
const WANT_HTML = !args.includes('--no-open');
const OPEN = !args.includes('--no-open');
const filters = args.filter(a => !a.startsWith('--'));

// ── Test cases ─────────────────────────────────────────────────
// Add/edit cases here to probe different inputs. Each is exactly the
// shape the front end POSTs to /api/generate-routine.
const CASES = [
  {
    name: 'rank-with-dodges',
    body: {
      timePerDay: 240,
      wakeTime: '10:00 AM',
      goals: [{
        type: 'rank',
        title: 'Hit Diamond',
        current_value: 'Platinum 3',
        target: 'Diamond 1',
        current_rr: 65,
        deadline: '2026-08-15',
        win_rr: [21, 23, 19, 22, 20, 24, 21, 18, 22, 20],
        loss_rr: [18, 20, 17, 19, 21, 18, 20],
        dodge_rr: [5, 5, 5],
        notes: 'Mid-round decision making is killing me. I know what I should do but I hesitate.',
      }],
    },
  },
  {
    name: 'rank-open-ended',
    body: {
      timePerDay: 120,
      wakeTime: '3:00 PM',
      goals: [{
        type: 'rank',
        title: 'Grind to Immortal',
        current_value: 'Diamond 1',
        target: 'Immortal 1',
        current_rr: 10,
        win_rr: [20, 18, 22, 25, 19],
        loss_rr: [22, 24, 20, 23],
        notes: 'I play reactively instead of dictating the round. Entry fraggers walk all over me.',
      }],
    },
  },
  {
    name: 'agent-neon',
    body: {
      timePerDay: 180,
      wakeTime: '11:00 AM',
      goals: [{
        type: 'agent',
        title: 'Get better at Neon',
        current_value: 'Gold 1',
        target: 'Platinum 1',
        notes: 'I sprint into every fight and die. I waste my slide and don\'t know when to stop and shoot vs keep running.',
      }],
    },
  },
  {
    name: 'agent-chamber',
    body: {
      timePerDay: 200,
      wakeTime: '9:30 AM',
      goals: [{
        type: 'agent',
        title: 'Master Chamber',
        current_value: 'Platinum 2',
        target: 'Diamond 1',
        notes: 'I TP out too early and waste the anchor. Also not sure when to save the OP vs buy rifle.',
      }],
    },
  },
  {
    name: 'multi-goal',
    body: {
      timePerDay: 300,
      wakeTime: '8:00 AM',
      goals: [
        {
          type: 'rank',
          title: 'Climb to Ascendant',
          current_value: 'Diamond 2',
          target: 'Ascendant 1',
          current_rr: 80,
          win_rr: [24, 22, 26, 23, 25],
          loss_rr: [20, 22, 19, 21],
          notes: 'Macro is fine but I keep losing 1v1 duels I should be winning.',
        },
        {
          type: 'agent',
          title: 'Lock in Clove as secondary',
          notes: 'I mistime my smokes constantly and forget I can re-smoke after dying.',
        },
      ],
    },
  },
  {
    name: 'long-session',
    body: {
      timePerDay: 360,
      wakeTime: '10:00 AM',
      goals: [{
        type: 'rank',
        title: 'Push for Immortal',
        current_value: 'Diamond 3',
        target: 'Immortal 1',
        current_rr: 50,
        deadline: '2026-09-01',
        win_rr: [23, 21, 24, 22, 20, 25, 22],
        loss_rr: [20, 22, 19, 21, 23],
        notes: 'I tilt after two losses and play worse. Need a reset built in.',
      }],
    },
  },
  {
    name: 'short-mechanics',
    body: {
      timePerDay: 60,
      wakeTime: '7:30 PM',
      goals: [{
        type: 'mechanics',
        title: 'Fix aim fundamentals',
        notes: 'Crosshair placement is consistently too low on all maps. Missing easy shots at head level.',
      }],
    },
  },
  {
    name: 'finetune-cut-warmup',
    body: {
      timePerDay: 180,
      wakeTime: '2:00 PM',
      fineTune: "I don't have time for warmup today, cut it and start ranked earlier.",
      goals: [{ type: 'rank', title: 'Climb to Diamond', current_value: 'Platinum 1', target: 'Diamond 1' }],
      currentRoutine: {
        schedule: [
          { id: 's1', time: '2:00 PM', category: 'wakeup', title: 'Wake Up Move Eat', duration: 20, count: '', description: 'Off screen. Eat. Move.' },
          { id: 's2', time: '2:20 PM', category: 'warmup', title: 'Aim Warmup', duration: 25, count: '', description: 'Static then dynamic clicking.' },
          { id: 's3', time: '2:45 PM', category: 'ranked', title: 'Ranked Block', duration: 120, count: '3-4 games', description: 'Play sharp. Use your reads.' },
          { id: 's4', time: '4:45 PM', category: 'review', title: 'Replay Review', duration: 20, count: '1-2 replays', description: 'Watch your deaths.' },
          { id: 's5', time: '5:05 PM', category: 'done', title: 'Hard Stop', duration: 0, count: '', description: 'Stop on a decision, not a death.' },
        ],
      },
    },
  },
];

// ── Validation mirrors the route's post-parse checks ───────────
const VALID_CATEGORIES = ['wakeup','warmup','ranked','vod','review','break','done','utility','custom'];

function lint(routine) {
  const warns = [];
  const sched = routine.schedule || [];
  if (sched.length === 0) warns.push('empty schedule');
  if (sched.length > 12) warns.push(`>12 items (${sched.length})`);
  sched.forEach((s, i) => {
    if (!VALID_CATEGORIES.includes(s.category)) warns.push(`item ${i + 1}: bad category "${s.category}"`);
    const desc = s.description || '';
    if (/\b(you should|consider|try to)\b/i.test(desc)) warns.push(`item ${i + 1}: hedging phrase in description`);
    if (/\bfraglog\.gg\b/i.test(desc) && s.category === 'review') warns.push(`item ${i + 1}: review mentions fraglog.gg`);
    if (/\b(RR|win rate|win-rate)\b/i.test(desc)) warns.push(`item ${i + 1}: description references RR/win rate`);
    if (s.category === 'break' && (sched[i + 1]?.category === 'done')) warns.push(`item ${i + 1}: break immediately before done`);
    if (s.title && /[—–-]/.test(s.title)) warns.push(`item ${i + 1}: dash in title "${s.title}"`);
  });
  // break must sit between ranked blocks
  sched.forEach((s, i) => {
    if (s.category === 'break') {
      const prev = sched[i - 1]?.category;
      if (prev === 'review' || prev === 'vod') warns.push(`item ${i + 1}: break right after ${prev}`);
    }
  });
  return warns;
}

async function callAnthropic(systemPrompt, userContent) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1600,
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: userContent }],
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `HTTP ${res.status}`);
  }
  const data = await res.json();
  let text = (data.content?.[0]?.text || '').trim();
  text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
  if (!text.startsWith('{')) {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) text = match[0];
  }
  return text;
}

const C = { reset: '\x1b[0m', dim: '\x1b[2m', bold: '\x1b[1m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', cyan: '\x1b[36m' };
const CAT_W = 8;

function printRoutine(routine) {
  if (routine.stats) {
    const s = routine.stats;
    console.log(`${C.dim}stats:${C.reset} target_wr=${s.target_wr} games/day=${s.games_per_day} daily=${s.daily_hours} games_needed=${s.games_needed}`);
  }
  console.log(`${C.dim}wake:${C.reset} ${routine.wake_time}`);
  for (const item of routine.schedule || []) {
    const cat = `[${item.category}]`.padEnd(CAT_W + 2);
    const cnt = item.count ? ` ${C.dim}(${item.count})${C.reset}` : '';
    console.log(`  ${C.cyan}${String(item.time).padEnd(9)}${C.reset} ${C.bold}${cat}${C.reset} ${item.title} ${C.dim}${item.duration}m${C.reset}${cnt}`);
    if (item.description) console.log(`            ${C.dim}${item.description}${C.reset}`);
  }
}

// Plain-text routine for the HTML report (no ANSI colors)
function routineToText(routine) {
  const lines = [];
  if (routine.stats) {
    const s = routine.stats;
    lines.push(`stats: target_wr=${s.target_wr} games/day=${s.games_per_day} daily=${s.daily_hours} games_needed=${s.games_needed}`);
  }
  lines.push(`wake: ${routine.wake_time || ''}`, '');
  for (const item of routine.schedule || []) {
    const cnt = item.count ? ` (${item.count})` : '';
    lines.push(`${String(item.time).padEnd(9)} [${item.category}] ${item.title} — ${item.duration}m${cnt}`);
    if (item.description) lines.push(`    ${item.description}`);
  }
  return lines.join('\n');
}

async function run() {
  const cases = filters.length ? CASES.filter(c => filters.some(f => c.name.includes(f))) : CASES;
  if (!cases.length) {
    console.error(`No cases match: ${filters.join(', ')}\nAvailable: ${CASES.map(c => c.name).join(', ')}`);
    process.exit(1);
  }
  const results = [];
  for (const tc of cases) {
    console.log(`\n${C.bold}━━━ ${tc.name} ━━━${C.reset}`);
    const { systemPrompt, userContent } = buildRoutinePrompt(tc.body);
    const promptText = userContent;
    console.log(`${C.cyan}--- input ---${C.reset}\n${C.dim}${promptText}${C.reset}\n${C.cyan}--- response ---${C.reset}`);
    let text;
    try {
      text = await callAnthropic(systemPrompt, userContent);
    } catch (e) {
      console.log(`${C.red}API error: ${e.message}${C.reset}`);
      results.push({ name: tc.name, prompt: promptText, body: `API error: ${e.message}`, warns: [], status: 'error' });
      continue;
    }
    if (SHOW_RAW) console.log(`${C.dim}${text}${C.reset}\n`);
    let routine;
    try {
      routine = JSON.parse(text);
    } catch {
      console.log(`${C.red}JSON parse failed.${C.reset}`);
      if (!SHOW_RAW) console.log(text.slice(0, 500));
      results.push({ name: tc.name, prompt: promptText, body: `JSON parse failed:\n\n${text.slice(0, 800)}`, warns: ['JSON parse failed'], status: 'error' });
      continue;
    }
    printRoutine(routine);
    const warns = lint(routine);
    if (warns.length) {
      console.log(`${C.yellow}⚠ ${warns.length} lint warning(s):${C.reset}`);
      for (const w of warns) console.log(`  ${C.yellow}- ${w}${C.reset}`);
    } else {
      console.log(`${C.green}✓ clean${C.reset}`);
    }
    results.push({ name: tc.name, prompt: promptText, body: routineToText(routine), warns, status: warns.length ? 'warn' : 'clean' });
  }

  if (WANT_HTML) {
    const file = writeReport('routine', results, { open: OPEN });
    console.log(`\n${C.cyan}HTML report: ${file}${C.reset}`);
  }
}

run();
