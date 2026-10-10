"use client";

import { useEffect, useState } from "react";
import { bagianHome } from "@/content/site";

/**
 * Indikator slide home — MOCKUP:
 *  - rail 6 titik di tepi kanan dengan label pada titik aktif (HOME, WHY US, …)
 *  - pill pagination "01 — 05" di kiri bawah
 * Keduanya disembunyikan setelah bagian terakhir (layar penutup tanpa indikator).
 */
export function SlideRail() {
  const [aktif, setAktif] = useState(0);
  const [terlihat, setTerlihat] = useState(true);

  useEffect(() => {
    const nodes = bagianHome
      .map((b) => document.getElementById(b.id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const idx = nodes.indexOf(e.target as HTMLElement);
          if (idx >= 0) setAktif(idx);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));

    // Sembunyikan indikator setelah bagian terakhir (layar penutup tanpa indikator).
    // Scroll-listener deterministik — IntersectionObserver sempat race saat lompat scroll.
    const akhir = document.getElementById(bagianHome[bagianHome.length - 1].id);
    const cekBatas = () => {
      if (!akhir) return;
      setTerlihat(akhir.getBoundingClientRect().bottom > window.innerHeight * 0.5);
    };
    cekBatas();
    window.addEventListener("scroll", cekBatas, { passive: true });
    window.addEventListener("resize", cekBatas);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", cekBatas);
      window.removeEventListener("resize", cekBatas);
    };
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Di slide 01 rail berada di atas foto — mockup memakai putih agar kontras.
  const diFoto = aktif === 0;

  return (
    <div
      aria-hidden={terlihat ? undefined : true}
      className={
        "transition-opacity duration-300 " +
        (terlihat ? "opacity-100" : "pointer-events-none opacity-0")
      }
    >
      {/* Rail titik — tepi kanan tengah (desktop) */}
      <nav
        aria-label="Bagian halaman"
        className="fixed top-1/2 right-7 z-30 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex"
      >
        {bagianHome.map((b, i) => {
          const on = i === aktif;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => goto(b.id)}
              aria-current={on ? "true" : undefined}
              className="group flex items-center gap-3"
            >
              {on && (
                <span
                  className={
                    "text-caption font-bold tracking-[0.14em] uppercase " +
                    (diFoto ? "text-white" : "text-tan-ink")
                  }
                >
                  {b.label}
                </span>
              )}
              <span
                className={
                  "rounded-full transition-all duration-300 " +
                  (on
                    ? diFoto
                      ? "h-6 w-2.5 bg-white"
                      : "h-6 w-2.5 bg-gold-deep"
                    : diFoto
                      ? "h-2.5 w-2.5 bg-white/75 group-hover:bg-white"
                      : "h-2.5 w-2.5 bg-tan/60 group-hover:bg-tan-ink")
                }
              />
              <span className="sr-only">{b.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Pagination pill — kiri bawah (bagian 01–05, mengikuti bagianHome) */}
      <div className="fixed bottom-7 left-7 z-30">
        <p className="tnum inline-flex items-center gap-3 rounded-full border border-line bg-linen-soft px-6 py-3 text-caption font-bold tracking-[0.12em] text-ink shadow-[0_6px_24px_-12px_rgba(58,46,34,0.4)]">
          <span>{String(aktif + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" className="text-tan-ink">
            —
          </span>
          <span>{String(bagianHome.length).padStart(2, "0")}</span>
        </p>
      </div>
    </div>
  );
}
