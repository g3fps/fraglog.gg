# Prompt-iteration harnesses

Tools for tuning the AI prompts **without** going through the live site (no login,
no daily limits, no DB writes). Each harness calls the Anthropic API directly using
the *same* prompt-builder the real API route uses, so the test and production can't drift.

Needs `ANTHROPIC_API_KEY` in `.env` (already there). Each run costs a few cents in API usage.

### Easier reviewing: HTML report
Add `--html` to any harness to write a self-contained report to `scripts/out/` (color-coded
output, lint warnings, a "warnings only" filter) instead of squinting at the terminal. Add
`--open` to also open it in your default browser. `scripts/out/` is gitignored.

```
node scripts/test-coach.mjs --open          # run all, open an HTML report
node scripts/test-routine.mjs rank --html   # filtered, write report (don't auto-open)
```

## Routine generator (`/gameplan`)

```
node scripts/test-routine.mjs           # run all sample cases
node scripts/test-routine.mjs rank      # only cases with "rank" in the name
node scripts/test-routine.mjs --raw     # also dump the raw model JSON
```

- Prompt lives in `src/lib/routine-prompt.js` (shared with `src/pages/api/generate-routine.ts`).
- Edit the prompt there → re-run → read the gameplans + lint warnings.
- Add/edit test inputs in the `CASES` array inside `test-routine.mjs`.

## AI coach (`/` VOD coaching)

```
node scripts/test-coach.mjs             # run all sample cases
node scripts/test-coach.mjs deathmatch  # only cases with "deathmatch" in the name
```

- Prompt lives in `src/lib/coaching-prompt.js` (shared with `src/pages/api/analyze.ts`).
- Several cases are **adversarial** — written to bait a specific rule violation
  (DM ability drills, comms coaching, invented throw arcs, absolute language).
  Each prints its `bait:` so you know what it's probing.

## Ask AI (`/notes` ask bar)

```
node scripts/test-ask.mjs               # run all sample cases
node scripts/test-ask.mjs offtopic      # only cases with "offtopic" in the name
node scripts/test-ask.mjs --open        # run all, open an HTML report
```

- Prompt lives in `src/lib/coaching-prompt.js` (`buildAskPrompt`, shared with `src/pages/api/ask.ts`).
- Uses the same knowledge base as the coach. Includes adversarial cases for off-topic /
  jailbreak (should refuse with "Ask me anything about Valorant…"), DM ability drills,
  comms coaching, and absolute language. Add/edit inputs in the `CASES` array.

## What the lint checks

The lint re-reads each AI output and flags rule violations you'd otherwise have to
catch by eye. It only catches mechanical/textual rules — it can't judge whether the
advice is actually *good*. That part is still on you.

Routine lint: bad categories, last item not "done", dashes in titles, RR/win-rate in
descriptions, hedging phrases ("you should"/"consider"/"try to"), bad break placement.

Coach lint: absolute language (never/always/must), "it's not X, it's Y" framing,
deathmatch + ability mentioned together, communication coaching, invented throw terms,
unrated/TDM as a drill venue, word-count caps (400 / 150 followup), and whether
reject-cases were correctly refused.

Ask lint: absolute language, "it's not X, it's Y" framing, deathmatch + ability together,
communication coaching, unrated/TDM as a drill venue, 250-word cap, and whether off-topic /
jailbreak cases were correctly refused.

`✓ clean` = no violations the lint knows about. `⚠` = look closer.
