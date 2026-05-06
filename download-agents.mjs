import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const AGENTS = [
  {id:"jett",      portrait:"https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png"},
  {id:"reyna",     portrait:"https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png"},
  {id:"raze",      portrait:"https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png"},
  {id:"neon",      portrait:"https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png"},
  {id:"phoenix",   portrait:"https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png"},
  {id:"yoru",      portrait:"https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png"},
  {id:"iso",       portrait:"https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/fullportrait.png"},
  {id:"waylay",    portrait:"https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/fullportrait.png"},
  {id:"omen",      portrait:"https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png"},
  {id:"viper",     portrait:"https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png"},
  {id:"brimstone", portrait:"https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png"},
  {id:"astra",     portrait:"https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png"},
  {id:"harbor",    portrait:"https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/fullportrait.png"},
  {id:"clove",     portrait:"https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/fullportrait.png"},
  {id:"miks",      portrait:"https://media.valorant-api.com/agents/7c8a4701-4de6-9355-b254-e09bc2a34b72/fullportrait.png"},
  {id:"sage",      portrait:"https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png"},
  {id:"cypher",    portrait:"https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png"},
  {id:"killjoy",   portrait:"https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png"},
  {id:"chamber",   portrait:"https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png"},
  {id:"deadlock",  portrait:"https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/fullportrait.png"},
  {id:"vyse",      portrait:"https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/fullportrait.png"},
  {id:"veto",      portrait:"https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/fullportrait.png"},
  {id:"sova",      portrait:"https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png"},
  {id:"breach",    portrait:"https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png"},
  {id:"skye",      portrait:"https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png"},
  {id:"kayo",      portrait:"https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png"},
  {id:"fade",      portrait:"https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png"},
  {id:"gekko",     portrait:"https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"},
  {id:"tejo",      portrait:"https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/fullportrait.png"},
];

const OUT_DIR = './public/agents';

await mkdir(OUT_DIR, { recursive: true });

for (const agent of AGENTS) {
  try {
    const res = await fetch(agent.portrait, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    });
    if (!res.ok) { console.error(`❌ ${agent.id}: ${res.status}`); continue; }
    const buf = await res.arrayBuffer();
    await writeFile(join(OUT_DIR, `${agent.id}.png`), Buffer.from(buf));
    console.log(`✓ ${agent.id}`);
  } catch (e) {
    console.error(`❌ ${agent.id}:`, e.message);
  }
}

console.log('\nDone! All portraits saved to public/agents/');
console.log('\nNow update data.js portrait URLs to: /agents/{id}.png');
