# CV Sari Natura Herba — Website

Company profile and export catalog for CV Sari Natura Herba, built with **Next.js 15 (App Router), TypeScript, and Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # run the production build
```

## Verification

```bash
npm run verify     # typecheck + lint + build + asset validation
```

## Project structure

```text
app/                  # Home, About, Products, and Contact routes
components/           # Header, AboutSections, SlideRail, QuoteForm, CompanyProfile, and UI
content/site.ts       # shared English copy and the two products with supplied details
public/logo/          # brand marks; customer-provided header logo has no tagline
public/img/           # customer-provided menu, ginger, and farm images plus retained stock assets
scripts/validate.py   # checks required files and referenced images
MOCKUP/               # customer mockups used as design references
```

Home has eight numbered sections. About reuses the company profile, vision and mission, core values, social impact, and partnership call-to-action. The catalog lists only the two ginger products for which this repository already contains details; no third product or specifications have been added.

## Deployment

- **GitHub:** <https://github.com/FajarMelfiano/SariNaturaHerba>, branch `main`.
- **Current Vercel host:** <https://sari-natura-herba-three.vercel.app/>. The repository's `main` branch is linked to this deployment; pushing to `main` is expected to trigger a Vercel deployment.
- A customer-owned `.com` domain has not been selected. The site therefore stays on the current Vercel host. When a domain is selected and configured, update `metadataBase` in `app/layout.tsx` and the `BASE` / sitemap host in `app/sitemap.ts` and `app/robots.ts`, then redeploy.

## Production notes

- The quotation form performs local validation only. It displays a preview notice and does **not** send or store inquiries; an email/service endpoint has not been provided.
- Display headings use Cormorant Garamond and body copy uses Inter through `next/font`.
- User-provided assets are stored under `public/logo/` and `public/img/`. The original stock photo files are retained, but `hero.jpg` remains in active use and is licensed CC BY-SA 4.0; keep its attribution and share-alike requirements in mind for commercial production.
- The site uses no global footer, matching the supplied page design. Animations respect `prefers-reduced-motion`.

## Retained stock-photo attribution

| File | Source | License |
|---|---|---|
| `public/img/hero.jpg` | [Fresh ginger rhizome 01](https://commons.wikimedia.org/wiki/File:Fresh_ginger_rhizome_01.jpg) — Wikimedia Commons | CC BY-SA 4.0 |
| `public/img/jahe-gajah.jpg` | [Fresh ginger rhizome 02](https://commons.wikimedia.org/wiki/File:Fresh_ginger_rhizome_02.jpg) — Wikimedia Commons | CC BY-SA 4.0 |
| `public/img/jahe-kering.jpg` | [Dried ginger slices](https://commons.wikimedia.org/wiki/File:Dried_ginger_slices.jpg) — Wikimedia Commons | CC0 |
| `public/img/petani.jpg` | [Farmers with freshly harvested turmeric fingers](https://commons.wikimedia.org/wiki/File:Farmers_with_freshly_harvested_turmeric_fingers_in_a_Ridhura_village_field.jpg) — Wikimedia Commons | CC0 |
| `public/img/panen.jpg` | [Ginger garden](https://commons.wikimedia.org/wiki/File:Ginger_garden.jpg) — Wikimedia Commons | CC BY-SA 3.0 |

The replacement product and farm photos and the header/menu assets were provided by the owner for this site.
