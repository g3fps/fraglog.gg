import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const EXCLUDED = ['/favorites', '/my-vods', '/settings', '/submit', '/search', '/util', '/contact'];

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
      filter: (page) => !EXCLUDED.some(path => new URL(page).pathname.startsWith(path))
    })
  ],
});
