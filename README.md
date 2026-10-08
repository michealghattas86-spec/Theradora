# Theradora website

Corporate website for Theradora Pty Ltd (theradora.com.au). Next.js (static export) + Tailwind CSS, hosted on Cloudflare Pages. Form submissions go through a Cloudflare Pages Function.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 (forms need the Pages Function, see below)
npm run build      # static site in ./out
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, and pick the repo.
3. Build settings:
   - Framework preset: None (or Next.js, static export)
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22`
4. Add the form variables under Settings > Variables and Secrets (production):
   - `RESEND_API_KEY` (secret). Create a free account at resend.com and verify theradora.com.au as a sending domain.
   - `CONTACT_TO`, `CAREERS_TO` (optional, both default to business@theradora.com.au). Set `CAREERS_TO` to a monitored recruitment inbox.
   - `MAIL_FROM` (optional, default `Theradora Website <no-reply@theradora.com.au>`)
5. Custom domain: Pages project > Custom domains > add `theradora.com.au` and `www.theradora.com.au`. If the domain's DNS is on Cloudflare this is automatic; otherwise move the nameservers to Cloudflare or add the CNAME it shows you.
6. Redirect `www` to the apex (Rules > Redirect Rules) so there is one canonical address.

`functions/api/enquiry.ts` is picked up automatically by Cloudflare Pages when deployed from Git. It does not run under `next dev`; to test it locally use `npm run build && npx wrangler pages dev out`.

## Before launch

Anything still unconfirmed is highlighted yellow on the page and counted by:

```bash
npm run build && npm run check:todos
```

Also still needed:

- `public/og-image.png` (1200 x 630, logo and tagline) and a logo file for the schema
- Second leader's bio (the About page currently shows one leader)
- Legal review of the Privacy and Terms pages, then remove the draft banners and the `noindex` setting on both, and add them to `public/sitemap.xml`
- The Physio To Home URL in `src/lib/site.ts` (currently `https://physiotohome.com`)
- Cookie notice if analytics is added
- Add SPF, DKIM and DMARC for the sending domain
