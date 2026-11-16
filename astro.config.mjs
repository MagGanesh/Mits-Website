// @ts-check
import { defineConfig } from 'astro/config';

// Two addresses, both set by environment so moving domain is a one-line change:
// PUBLIC_SITE_URL  the address Google should index. Canonicals, Open Graph,
//                  structured data, sitemap and robots.txt all use it.
// BASE_PATH        the folder this build is served from (default '/').
const publicUrl = (process.env.PUBLIC_SITE_URL || 'https://futurefoundationstutoring.co.uk/').replace(/\/?$/, '/');
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: new URL(publicUrl).origin,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  vite: { define: { __PUBLIC_URL__: JSON.stringify(publicUrl) } },
});
