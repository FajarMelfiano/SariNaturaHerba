#!/usr/bin/env python3
"""Validasi struktur situs CV Sari Natura Herba — bisa dijalankan ulang kapan saja.

Cek:
  1. File wajib (halaman, komponen, konten, aset) ada.
  2. Semua referensi aset (/img/, /logo/) di source benar-benar ada di public/.
  3. Varian logo lengkap (4 varian + varian terang).
  4. Build output .next ada (jalankan `npm run build` dulu untuk cek penuh).
  5. Tidak ada placeholder TODO di file source.

Keluaran: laporan + exit code 0 jika lulus.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

WAJIB = [
    "package.json",
    "next.config.ts",
    "tsconfig.json",
    "app/layout.tsx",
    "app/page.tsx",
    "app/globals.css",
    "app/not-found.tsx",
    "app/sitemap.ts",
    "app/robots.ts",
    "app/about/page.tsx",
    "app/products/page.tsx",
    "app/products/[slug]/page.tsx",
    "app/contact/page.tsx",
    "components/Header.tsx",
    "components/CompanyProfile.tsx",
    "components/SlideRail.tsx",
    "components/QuoteForm.tsx",
    "components/Reveal.tsx",
    "components/ui.tsx",
    "content/site.ts",
    "README.md",
]

# 4 varian logo (dari mockup) + varian terang untuk latar gelap
LOGO_WAJIB = ["icon.png", "horizontal.png", "stacked.png", "wordmark.png",
              "wordmark-light.png"]

IMG_WAJIB = ["hero.jpg", "jahe-gajah.jpg", "jahe-kering.jpg", "petani.jpg", "panen.jpg"]

gagal: list[str] = []
catat: list[str] = []


def cek(cond: bool, pesan: str) -> None:
    (catat if cond else gagal).append(pesan)


# 1. File wajib
for f in WAJIB:
    cek((ROOT / f).is_file(), f"file wajib: {f}")

# 2. Logo & gambar
for f in LOGO_WAJIB:
    cek((PUBLIC / "logo" / f).is_file(), f"logo: {f}")
for f in IMG_WAJIB:
    cek((PUBLIC / "img" / f).is_file(), f"gambar: {f}")

# 3. Referensi aset di source harus ada di public/
refs = set()
for pola in ("app/**/*.tsx", "components/**/*.tsx", "content/*.ts"):
    for path in ROOT.glob(pola):
        teks = path.read_text(encoding="utf-8")
        refs.update(re.findall(r'"(/(?:img|logo)/[\w.-]+)"', teks))
        refs.update(re.findall(r'"(/img/[\w.-]+)"', teks))
for r in sorted(refs):
    cek((PUBLIC / r.lstrip("/")).is_file(), f"referensi aset valid: {r}")

# 4. Tidak ada TODO/TBD placeholder di source
for pola in ("app/**/*.tsx", "components/**/*.tsx", "content/*.ts"):
    for path in ROOT.glob(pola):
        for no, baris in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            if re.search(r"\b(TODO|TBD|FIXME)\b", baris):
                gagal.append(f"placeholder di {path.relative_to(ROOT)}:{no}")

# 5. Build output
cek((ROOT / ".next" / "BUILD_ID").is_file(), "build output .next/BUILD_ID (jalankan npm run build)")

# Laporan
print(f"PASS: {len(catat)} pemeriksaan lulus")
if gagal:
    print(f"GAGAL: {len(gagal)} pemeriksaan:")
    for g in gagal:
        print(f"  ✗ {g}")
    sys.exit(1)
print("Semua validasi lulus ✔")
