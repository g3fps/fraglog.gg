import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
};

const OUT_DIR = './public/abilities';
await mkdir(OUT_DIR, { recursive: true });

// Fetch all agents from the API
const res = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true', { headers: HEADERS });
const data = await res.json();

for (const agent of data.data) {
  const agentId = agent.displayName.toLowerCase().replace('/', '').replace(' ', '');
  const agentDir = join(OUT_DIR, agentId);
  await mkdir(agentDir, { recursive: true });

  for (const ability of agent.abilities) {
    if (!ability.displayIcon) continue;
    const slot = ability.slot.toLowerCase(); // ability1, ability2, grenade, ultimate
    try {
      const imgRes = await fetch(ability.displayIcon, { headers: HEADERS });
      if (!imgRes.ok) { console.error(`❌ ${agentId}/${slot}: ${imgRes.status}`); continue; }
      const buf = await imgRes.arrayBuffer();
      await writeFile(join(agentDir, `${slot}.png`), Buffer.from(buf));
      console.log(`✓ ${agentId}/${slot}`);
    } catch(e) {
      console.error(`❌ ${agentId}/${slot}:`, e.message);
    }
  }
}

console.log('\nDone! Ability icons saved to public/abilities/{agent}/{slot}.png');
console.log('Slots: ability1, ability2, grenade, ultimate, passive');
