// @ts-check
import { defineConfig } from 'astro/config';

// Live site: GitHub Pages project site at https://magganesh.github.io/Mits-Website/.
// When a custom domain arrives, set site to it, base to '/', and update src/seo.json canonicals.
export default defineConfig({
  site: 'https://magganesh.github.io',
  base: '/Mits-Website',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
});
