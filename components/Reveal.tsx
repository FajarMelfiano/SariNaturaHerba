"use client";

import { useEffect } from "react";

/**
 * Pemicu reveal saat scroll untuk elemen ber-`data-reveal`.
 * Halus & sekali jalan: fade + 10px naik (lihat globals.css).
 *
 * Tanpa JavaScript konten tetap tampil (kelas `motion-ready` hanya dipasang
 * saat JS aktif dan reduced-motion tidak dipilih).
 *
 * MutationObserver wajib ada: navigasi client-side Next.js tidak me-remount
 * layout, sehingga elemen `[data-reveal]` halaman baru muncul setelah efek
 * ini berjalan. Tanpa pemantauan DOM, elemen itu disembunyikan CSS tanpa ada
 * observer — konten blank sampai refresh penuh.
 */
export function RevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("motion-ready");

    const sudahDiamati = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          observer.unobserve(e.target); // sekali jalan, tidak kembali
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    // Amati semua [data-reveal] yang belum dipantau
    const pindai = () => {
      const nodes = document.querySelectorAll("[data-reveal]");
      for (const n of nodes) {
        if (sudahDiamati.has(n)) continue;
        sudahDiamati.add(n);
        if (n.classList.contains("is-in")) continue; // sudah tampil, lewati
        observer.observe(n);
      }
    };

    pindai();

    // Pantau DOM baru — elemen halaman hasil navigasi antar-rute
    const mutasi = new MutationObserver(pindai);
    mutasi.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutasi.disconnect();
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
