# Future Foundations Tutoring

Website for Mithusha's tutoring in Stanmore and Harrow. Astro, static, no
client JavaScript.

| Where | Address | Deploys |
|-------|---------|---------|
| Live (Cloudflare Pages) | https://futurefoundationstutoring.co.uk | every push to `main` |
| Staging | https://&lt;branch&gt;.future-foundations-tutoring.pages.dev | every push to any other branch |

- `www.` and `http://` redirect (301) to https://futurefoundationstutoring.co.uk
  (Cloudflare redirect rule on the zone).
- The old address https://magganesh.github.io/Mits-Website/ redirects (301)
  page-for-page to the new domain: GitHub Pages stays enabled with the custom
  domain set, purely for that redirect. Don't disable Pages or remove its
  custom domain.
- The pages.dev addresses send `X-Robots-Tag: noindex`.
- DNS: Cloudflare (zone on Mags's account); registrar: Porkbun.
- Canonical address: repo variable `PUBLIC_SITE_URL`.

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
