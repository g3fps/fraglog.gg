import https from 'https';
import fs from 'fs';

const maps = [
  { id: "ascent", url: "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png" },
  { id: "bind", url: "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png" },
  { id: "haven", url: "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png" },
  { id: "split", url: "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png" },
  { id: "fracture", url: "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png" },
  { id: "pearl", url: "https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/splash.png" },
  { id: "icebox", url: "https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png" },
  { id: "breeze", url: "https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png" },
  { id: "lotus", url: "https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/splash.png" },
  { id: "sunset", url: "https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/splash.png" },
  { id: "abyss", url: "https://media.valorant-api.com/maps/224b0a95-48b9-f703-1bd8-67aca101a61f/splash.png" },
  { id: "corrode", url: "https://media.valorant-api.com/maps/1c18ab1f-420d-0d8b-71d0-77ad3c439115/splash.png" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

fs.mkdirSync('./public/maps', { recursive: true });

for (const map of maps) {
  const dest = `./public/maps/${map.id}.png`;
  try {
    await download(map.url, dest);
    console.log(`✓ ${map.id}.png`);
  } catch (e) {
    console.log(`✗ ${map.id} failed: ${e.message}`);
  }
}

console.log('\nDone. Update data.js img fields to /maps/{id}.png');
