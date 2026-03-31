// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mamadoundiaye.dev', // ← à mettre à jour avec le vrai domaine Netlify
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
