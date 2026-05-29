import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const MAPS = ['ascent', 'bind', 'haven', 'split', 'fracture', 'pearl', 'icebox', 'breeze', 'lotus', 'sunset', 'abyss', 'corrode'];
const AGENTS = ['jett', 'reyna', 'raze', 'neon', 'phoenix', 'yoru', 'iso', 'waylay', 'omen', 'viper', 'brimstone', 'astra', 'harbor', 'clove', 'miks', 'sage', 'cypher', 'killjoy', 'chamber', 'deadlock', 'vyse', 'veto', 'sova', 'breach', 'skye', 'kayo', 'fade', 'gekko', 'tejo'];
const EXCLUDED = ['/favorites', '/my-vods', '/settings', '/search'];

const customPages = [
  ...MAPS.map(m => `https://fraglog.gg/${m}/`),
  ...MAPS.flatMap(m => AGENTS.map(a => `https://fraglog.gg/${m}/${a}/`))
];

export default defineConfig({
  site: 'https://fraglog.gg',
  output: 'server',
  adapter: vercel(),

  vite: {
    ssr: {
      noExternal: ['@supabase/supabase-js'],
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED.some(path => new URL(page).pathname.startsWith(path)),
      customPages,
    })
  ],
});
