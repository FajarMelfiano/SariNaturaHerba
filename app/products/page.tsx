import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ui";
import { ctaId, produk, produkLanding } from "@/content/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Jahe gajah (elephant ginger) dan jahe kering slice dari Indonesia — produk herbal premium untuk pasar global.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero produk — MOCKUP: eyebrow, judul uppercase besar kiri, foto kanan berjenjang */}
      <header className="container-site py-16 md:py-24">
        <p data-reveal className="eyebrow eyebrow-dash">
          {produkLanding.eyebrow}
        </p>

        <div className="mt-6 grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div data-reveal className="flex h-full flex-col justify-between">
            <h1 className="text-mega leading-[1.02] font-bold tracking-tight text-ink uppercase">
              {produkLanding.judul}
            </h1>

            <div className="mt-10 max-w-xl">
              <p className="text-body text-muted">{produkLanding.teks}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link href="#daftar-produk" className="btn-brown">
                  {produkLanding.cta}
                </Link>
                <Link href="/contact" className="link-underline">
                  {produkLanding.ctaKedua}
                </Link>
              </div>
            </div>
          </div>

          {/* Dua foto berjenjang — jahe segar (kiri) & irisan kering (kanan) */}
          <div data-reveal style={{ transitionDelay: "100ms" }} className="grid grid-cols-2 gap-4 md:gap-5">
            <Image
              src="/img/jahe-gajah.jpg"
              alt="Rimpang jahe gajah segar"
              width={640}
              height={800}
              priority
              className="aspect-[3/4] w-full rounded-xl object-cover outline outline-1 outline-black/10"
            />
            <Image
              src="/img/jahe-kering.jpg"
              alt="Irisan jahe kering"
              width={640}
              height={640}
              priority
              className="mt-8 aspect-square w-full rounded-xl object-cover outline outline-1 outline-black/10 md:mt-14"
            />
          </div>
        </div>
      </header>

      {/* Daftar produk */}
      <section id="daftar-produk" className="border-t border-line bg-linen-soft py-16 md:py-24">
        <div data-reveal className="container-site">
          <ul className="grid gap-7 md:grid-cols-2">
            {produk.map((p) => (
              <li key={p.slug}>
                <ProductCard p={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Bahasa Indonesia — MOCKUP: section gelap, judul besar, pill emas */}
      <section aria-labelledby="cta-id-judul" className="bg-espresso-deep py-24 text-center md:py-32">
        <div data-reveal className="container-site flex flex-col items-center">
          <p className="eyebrow-gold eyebrow-dash">{ctaId.eyebrow}</p>
          <h2 id="cta-id-judul" className="mt-6 max-w-3xl text-h1 font-bold text-linen">
            {ctaId.judul}
          </h2>
          <p className="mt-5 max-w-2xl text-body text-linen/80">{ctaId.teks}</p>
          <Link href="/contact" className="btn-pill mt-9">
            {ctaId.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
