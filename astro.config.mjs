import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nexushouser92.github.io/obsidian-technology',
  base: process.env.GITHUB_ACTIONS ? '/obsidian-technology' : '',
  integrations: [sitemap()],
});
