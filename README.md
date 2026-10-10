# CV Sari Natura Herba — Website Resmi

Website company profile & katalog ekspor CV Sari Natura Herba (jahe dan produk herbal
Indonesia), dibangun dengan **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**.

## Menjalankan

```bash
npm install
npm run dev        # development → http://localhost:3000
npm run build      # production build
npm start          # jalankan hasil build
```

## Verifikasi

```bash
npm run verify     # typecheck + lint + build + python3 scripts/validate.py
```

## Struktur

```
app/                  # halaman (App Router)
  page.tsx            # Home — 5 bagian bernomor + vision/social/CTA penutup
  about/              # tab About — "Supplying Indonesia's Natural Resources"
  products/           # katalog + [slug] detail produk
  contact/            # hero kontak + International Quotation Request
components/           # Header (MENU pill + overlay), SlideRail, QuoteForm, CompanyProfile, Reveal, ui
content/site.ts       # single source of truth: teks persis mockup, produk, kontak
public/logo/          # 4 varian logo hasil ekstrak dari MOCKUP/ (+ varian terang)
public/img/           # foto produk/petani (lihat Atribusi)
scripts/extract_logos.py  # ekstrak ulang PNG logo dari MOCKUP/*.jpeg
scripts/validate.py   # validasi struktur — jalankan ulang kapan saja
MOCKUP/               # 21 gambar mockup customer — sumber kebenaran visual
```

## Catatan produksi

- **Form quotation** tervalidasi di client (siap disambungkan ke server action /
  email endpoint — cari `QuoteForm.tsx`; simulasi sukses saat ini).
- Ganti `metadataBase` di `app/layout.tsx` dan URL di `sitemap.ts`/`robots.ts`
  dengan domain asli sebelum deploy.
- Font self-host via `next/font` (Inter — padanan gratis terdekat tipografi
  sans-serif grotesque pada mockup) → zero CLS.
- Teks mengikuti mockup **verbatim**, termasuk ejaan asli customer
  ("OUR MISION", "SUBMIT INQIURY"). Koreksi ejaan ada di tangan customer.
- Tanpa footer halaman (mockup tidak memilikinya) — halaman berakhir di
  section terakhirnya.
- **Tab About** = halaman `/about` (layar "Supplying Indonesia's Natural
  Resources"), bukan bagian home; home kini 5 bagian (rail & pagination
  `01 — 05`). Section Company Profile dipakai bersama oleh home dan About
  lewat `components/CompanyProfile.tsx` (satu sumber kode).
- Animasi dibatasi halus & profesional: reveal fade-up sekali jalan saat
  scroll (`data-reveal` + `Reveal.tsx`), stagger saat overlay menu dibuka,
  dan hover-lift kartu. Semua dimatikan otomatis bila pengguna memilih
  `prefers-reduced-motion`.

## Atribusi foto (free stock)

| File | Sumber | Lisensi |
|---|---|---|
| `public/img/hero.jpg` | [Fresh ginger rhizome 01](https://commons.wikimedia.org/wiki/File:Fresh_ginger_rhizome_01.jpg) — Wikimedia Commons | CC BY-SA 4.0 |
| `public/img/jahe-gajah.jpg` | [Fresh ginger rhizome 02](https://commons.wikimedia.org/wiki/File:Fresh_ginger_rhizome_02.jpg) — Wikimedia Commons | CC BY-SA 4.0 |
| `public/img/jahe-kering.jpg` | [Dried ginger slices](https://commons.wikimedia.org/wiki/File:Dried_ginger_slices.jpg) — Wikimedia Commons | CC0 |
| `public/img/petani.jpg` | [Farmers with freshly harvested turmeric fingers](https://commons.wikimedia.org/wiki/File:Farmers_with_freshly_harvested_turmeric_fingers_in_a_Ridhura_village_field.jpg) — Wikimedia Commons | CC0 |
| `public/img/panen.jpg` | [Ginger garden](https://commons.wikimedia.org/wiki/File:Ginger_garden.jpg) — Wikimedia Commons | CC BY-SA 3.0 |

CC BY-SA mensyaratkan atribusi + lisensi serupa; untuk penggunaan komersial
production, ganti dengan foto customer sendiri atau stok berlisensi bebas (mis. Pexels/Unsplash).
