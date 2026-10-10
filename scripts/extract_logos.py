#!/usr/bin/env python3
"""Ekstrak 4 varian logo dari file mockup (MOCKUP/*.jpeg) menjadi PNG transparan.

- Crop otomatis berdasarkan selisih piksel dari warna latar (krem).
- Chroma-key: piksel mirip latar -> transparan (aman untuk latar situs apa pun).
- Membuat varian terang (wordmark-light) untuk latar gelap: teks hijau tua ->
  krem, cokelat -> emas.

Jalankan ulang kapan saja: python3 scripts/extract_logos.py
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
MOCKUP = ROOT / "MOCKUP"
OUT = ROOT / "public" / "logo"

# (nama keluaran, file mockup sumber)
SUMBER = {
    "stacked": "WhatsApp Image 2026-10-10 at 8.29.41 AM (2).jpeg",
    "horizontal": "WhatsApp Image 2026-10-10 at 8.29.42 AM.jpeg",
    "icon": "WhatsApp Image 2026-10-10 at 8.29.42 AM (1).jpeg",
    "wordmark": "WhatsApp Image 2026-10-10 at 8.29.42 AM (2).jpeg",
}

TOLERANSI = 30  # jarak RGB dianggap latar
MARGIN = 6  # px padding saat crop


def warna_latar(img: Image.Image) -> tuple[int, int, int]:
    """Warna sudut kiri-atas sebagai representasi latar."""
    rgb = img.convert("RGB")
    return rgb.getpixel((2, 2))


def crop_otomatis(img: Image.Image) -> Image.Image:
    rgb = img.convert("RGBA")
    latar = warna_latar(img)
    data = rgb.load()
    w, h = rgb.size

    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, _ = data[x, y]
            if abs(r - latar[0]) + abs(g - latar[1]) + abs(b - latar[2]) > TOLERANSI:
                if x < minx:
                    minx = x
                if x > maxx:
                    maxx = x
                if y < miny:
                    miny = y
                if y > maxy:
                    maxy = y
    minx = max(0, minx - MARGIN)
    miny = max(0, miny - MARGIN)
    maxx = min(w, maxx + MARGIN)
    maxy = min(h, maxy + MARGIN)
    return rgb.crop((minx, miny, maxx, maxy))


def chroma_key(img: Image.Image) -> Image.Image:
    """Buat latar transparan dengan alpha bertingkat di tepi (anti-halo)."""
    latar = warna_latar(img)
    out = img.convert("RGBA")
    data = out.load()
    w, h = out.size
    bawah, atas = TOLERANSI, TOLERANSI * 3  # alpha 0..255 di rentang ini
    for y in range(h):
        for x in range(w):
            r, g, b, a = data[x, y]
            jarak = abs(r - latar[0]) + abs(g - latar[1]) + abs(b - latar[2])
            if jarak <= bawah:
                data[x, y] = (r, g, b, 0)
            elif jarak < atas:
                alpha = int(255 * (jarak - bawah) / (atas - bawah))
                data[x, y] = (r, g, b, min(a, alpha))
    return out


def varian_terang(img: Image.Image) -> Image.Image:
    """Teks hijau tua -> krem, cokelat -> emas (untuk latar gelap)."""
    out = img.convert("RGBA")
    data = out.load()
    w, h = out.size
    krem = (0xF5, 0xEF, 0xE2)
    emas = (0xC9, 0xA0, 0x6A)
    for y in range(h):
        for x in range(w):
            r, g, b, a = data[x, y]
            if a == 0:
                continue
            luma = 0.299 * r + 0.587 * g + 0.114 * b
            if luma > 200:  # bagian terang (latar sisa) biarkan transparan
                data[x, y] = (r, g, b, 0)
                continue
            if g >= r:  # dominan hijau -> teks utama
                data[x, y] = (*krem, a)
            else:  # cokelat (aksen HERBA) -> emas
                data[x, y] = (*emas, a)
    return out


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for nama, file_sumber in SUMBER.items():
        sumber = MOCKUP / file_sumber
        assert sumber.is_file(), f"mockup tidak ditemukan: {sumber}"
        asli = Image.open(sumber)
        hasil = chroma_key(crop_otomatis(asli))
        tujuan = OUT / f"{nama}.png"
        hasil.save(tujuan)
        print(f"{tujuan.name}: {hasil.size[0]}x{hasil.size[1]}")

    # Varian terang dari wordmark (untuk overlay menu gelap)
    wordmark = Image.open(OUT / "wordmark.png")
    terang = varian_terang(wordmark)
    terang.save(OUT / "wordmark-light.png")
    print("wordmark-light.png:", terang.size)


if __name__ == "__main__":
    main()
