# Future Foundations Tutoring — site source

Astro source for https://magganesh.github.io/Mits-Website/. The `main` branch
holds only the built files that GitHub Pages serves; this branch holds the
source.

## Change the site

```bash
npm ci
npm run dev        # http://localhost:4321/Mits-Website/
npm run build      # writes dist/
```

Publish: copy everything in `dist/` over the files on `main` (keep
`.nojekyll`), commit and push `main`.

- Facts (phone, fees, reviews, FAQ): `src/content.ts`
- Subject pages: `src/pages.json`
- Titles, descriptions, canonicals, structured data: `src/seo.json`
- Look and feel: `src/styles/marker.css`; rules in `DESIGN.md`
- Product brief: `PRODUCT.md`
