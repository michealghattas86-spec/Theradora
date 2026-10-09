# Theradora website

Corporate website for Theradora Pty Ltd (theradora.com.au). Next.js (static export) + Tailwind CSS, hosted on Cloudflare Workers (static assets). Form submissions go through the Worker in `worker/index.ts`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 (forms need the Worker, see below)
npm run build      # static site in ./out
```

## Deploy to Cloudflare Workers

The Worker (`worker/index.ts`) serves the static export in `./out` and handles `POST /api/enquiry`. Config is in `wrangler.jsonc`.

1. Push this repo to GitHub and connect it in Cloudflare dashboard > Workers & Pages > Create > Import a repository.
2. Build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Environment variable: `NODE_VERSION` = `22`
3. Add the form variables under the Worker's Settings > Variables and Secrets:
   - `RESEND_API_KEY` (secret). Create a free account at resend.com and verify theradora.com.au as a sending domain.
   - `CONTACT_TO`, `CAREERS_TO` (optional, both default to business@theradora.com.au). Set `CAREERS_TO` to a monitored recruitment inbox.
   - `MAIL_FROM` (optional, default `Theradora Website <no-reply@theradora.com.au>`)
4. Custom domain: Worker > Settings > Domains & Routes > add `theradora.com.au` and `www.theradora.com.au`. If the domain's DNS is on Cloudflare this is automatic.
5. Redirect `www` to the apex (Rules > Redirect Rules) so there is one canonical address.

To test locally, including the form endpoint: `npm run preview` (builds, then runs `wrangler dev`; put secrets in a local `.dev.vars` file, which is gitignored).

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
