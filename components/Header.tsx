"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigasi, site } from "@/content/site";

/**
 * Tombol pill di pojok kanan atas — MOCKUP: teks "MENU"/"CLOSE" + ikon garis.
 * 44px+ target sesuai pedoman sentuh.
 */
function MenuPill({
  open,
  onClick,
  inverted,
}: {
  open: boolean;
  onClick: () => void;
  inverted?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="menu-overlay"
      className={
        "inline-flex h-11 items-center gap-2.5 rounded-full border px-5 text-caption font-bold tracking-[0.14em] uppercase transition-colors duration-150 " +
        (inverted
          ? "border-linen/40 text-linen hover:border-tan hover:text-tan"
          : "border-line bg-linen-soft text-ink hover:border-tan-ink hover:text-tan-ink")
      }
    >
      <span>{open ? "Close" : "Menu"}</span>
      <span aria-hidden="true" className="flex flex-col gap-[3px]">
        {open ? (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M2 2l10 10M12 2L2 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
            <path
              d="M0 1.5h16M0 6h16M0 10.5h16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Kunci scroll saat overlay terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Tutup dengan Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Bar header putih — logo kiri, pill MENU kanan (sesuai mockup) */}
      <header className="sticky top-0 z-40 border-b border-line bg-linen-soft">
        <div className="container-site flex h-16 items-center justify-between sm:h-20">
          <Link href="/" aria-label={`${site.nama} — home`} className="shrink-0">
            <Image
              src="/logo/horizontal.png"
              alt={site.nama}
              width={1182}
              height={425}
              unoptimized
              className="h-10 w-auto sm:h-14 md:h-16"
              priority
            />
          </Link>

          <MenuPill open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </header>

      {/* Overlay menu fullscreen — MOCKUP: daftar 01–04 + panel kontak kanan */}
      <div
        id="menu-overlay"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-espresso text-linen"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="container-site flex h-20 shrink-0 items-center justify-between">
          <Image
            src="/logo/wordmark-light.png"
            alt=""
            aria-hidden="true"
            width={652}
            height={204}
            unoptimized
            className="h-9 w-auto sm:h-11"
          />
          <MenuPill open inverted onClick={() => setOpen(false)} />
        </div>

        <div className="container-site grid flex-1 items-start gap-10 pb-16 md:mt-6 md:grid-cols-[1.1fr_0.9fr] md:gap-0">
          {/* Kiri: navigasi bernomor — muncul berurutan saat menu dibuka */}
          <nav aria-label="Menu" className="flex flex-col">
            {navigasi.map((n, i) => {
              // Item dengan hash (About → section home) tidak punya halaman sendiri
              const aktif = !n.href.includes("#")
                ? n.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(n.href)
                : false;
              return (
                <Link
                  key={n.no}
                  href={n.href}
                  aria-current={aktif ? "page" : undefined}
                  style={{ animationDelay: `${60 + i * 70}ms` }}
                  className={
                    "group animate-fade-up flex items-baseline gap-5 border-b border-line-dark py-5 transition-colors duration-150 sm:gap-6 md:py-8 " +
                    (aktif ? "text-tan" : "hover:text-tan")
                  }
                >
                  <span className="tnum text-caption font-semibold tracking-[0.14em]">
                    {n.no}
                  </span>
                  <span className="text-[clamp(1.75rem,6vw,3.5rem)] leading-none font-bold tracking-tight">
                    {n.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Kanan: pernyataan + blok kontak (garis rambut emas) */}
          <div
            style={{ animationDelay: "360ms" }}
            className="animate-fade-up flex flex-col gap-8 border-t border-line-dark pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-12"
          >
            <div>
              <p className="eyebrow-gold eyebrow-dash">Indonesia Natural Products</p>
              <p className="mt-4 max-w-sm text-[1.0625rem] leading-snug font-bold">
                {site.menuPernyataan}
              </p>
            </div>

            <dl className="space-y-6 text-body-sm">
              <div>
                <dt className="text-caption font-bold tracking-[0.14em] text-tan uppercase">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors duration-150 hover:text-tan"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-caption font-bold tracking-[0.14em] text-tan uppercase">
                  Telephone
                </dt>
                <dd className="tnum mt-1.5">
                  <a
                    href={`https://wa.me/${site.teleponWa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 hover:text-tan"
                  >
                    {site.telepon}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-caption font-bold tracking-[0.14em] text-tan uppercase">
                  Indonesia
                </dt>
                <dd className="mt-1.5 space-y-1 text-linen/80">
                  <p>office : {site.kantor}</p>
                  <p>production warehouse : {site.gudang}</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Strip bawah — MOCKUP: "NATURAL PRODUCTS   GLOBAL SUPPLY" */}
        <div className="border-t border-line-dark">
          <div
            style={{ animationDelay: "440ms" }}
            className="animate-fade-up container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-1 py-5 md:justify-end md:gap-10"
          >
            <p className="text-caption font-bold tracking-[0.18em] text-linen/70 uppercase">
              Natural Products
            </p>
            <p className="text-caption font-bold tracking-[0.18em] text-linen/70 uppercase">
              Global Supply
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
