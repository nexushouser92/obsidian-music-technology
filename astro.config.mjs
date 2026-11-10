import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
//  GitHub Pages — repo de proyecto nexushouser92/obsidian-music-technology
//  En dev (npm run dev) sirve en la raíz; en el build de GitHub
//  Actions usa la subruta /obsidian-music-technology.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://nexushouser92.github.io/obsidian-music-technology',
  base: process.env.GITHUB_ACTIONS ? '/obsidian-music-technology' : '',
});
