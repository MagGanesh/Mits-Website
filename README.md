# Future Foundations Tutoring

Website for Mithusha's tutoring in Stanmore and Harrow. Astro, static, no
client JavaScript.

| Where | Address | Deploys |
|-------|---------|---------|
| GitHub Pages (indexed by Google today) | https://magganesh.github.io/Mits-Website/ | every push to `main` |
| Cloudflare Pages | https://future-foundations-tutoring.pages.dev | every push to `main` |
| Staging | https://&lt;branch&gt;.future-foundations-tutoring.pages.dev | every push to any other branch |

The pages.dev addresses send `X-Robots-Tag: noindex` so Google only indexes
the public address.

## Change the site

```bash
npm ci
npm run dev        # http://localhost:4321/
npm run build      # writes dist/
npm run lighthouse # fails below 90
```

Push a branch to get a staging link, merge to `main` to publish.

- Facts (phone, fees, reviews, FAQ): `src/content.ts`
- Subject pages: `src/pages.json`
- Titles, descriptions, canonicals, structured data: `src/seo.json`
  (absolute URLs are written `{SITE}…`)
- Look and feel: `src/styles/marker.css`; rules in `DESIGN.md`
- Product brief: `PRODUCT.md`

## Moving to a custom domain

1. Domain DNS on Cloudflare; add the domain to the Pages project.
2. Set the repo variable `PUBLIC_SITE_URL` to the new address (with a
   trailing slash) and re-run both workflows. Canonicals, Open Graph,
   structured data, sitemap and robots.txt all follow it.
3. Redirect the old GitHub Pages address to the new one, then submit the new
   sitemap in Search Console.
