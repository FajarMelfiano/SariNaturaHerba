import Image from "next/image";
import Link from "next/link";
import { CompanyProfile } from "@/components/CompanyProfile";
import { SlideRail } from "@/components/SlideRail";
import { ProductCard } from "@/components/ui";
import {
  coreValues,
  ctaGelap,
  hero,
  productHighlights,
  produk,
  socialImpact,
  visionMission,
  whyPartner,
} from "@/content/site";

/** Kolom bernomor (mockup 02 & 05): angka emas, judul tebal, teks. */
function KolomNomor({
  no,
  judul,
  teks,
  delay = 0,
}: {
  no: string;
  judul: string;
  teks: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className="border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-7"
    >
      <span className="tnum text-caption font-bold tracking-[0.14em] text-tan-ink">{no}</span>
      <h3 className="mt-3 text-[1.0625rem] leading-snug font-bold text-ink">{judul}</h3>
      <p className="mt-3 text-body-sm text-muted">{teks}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SlideRail />

      {/* 01 · Hero — panel kiri krem + foto kanan (split sesuai mockup) */}
      <section id="home" aria-labelledby="home-judul" className="border-b border-line">
        <div className="grid md:min-h-[calc(100svh-5rem)] md:grid-cols-[minmax(360px,42%)_1fr]">
          <div className="flex flex-col justify-center bg-linen px-7 py-16 md:px-12 md:py-20">
            <p data-reveal className="eyebrow eyebrow-dash">
              {hero.eyebrow}
            </p>
            <h1
              id="home-judul"
              data-reveal
              style={{ transitionDelay: "60ms" }}
              className="mt-6 text-display font-bold text-ink"
            >
              {hero.judul}
            </h1>
            <p
              data-reveal
              style={{ transitionDelay: "120ms" }}
              className="mt-6 text-[0.9375rem] font-bold tracking-[0.16em] text-ink uppercase"
            >
              {hero.sub}
            </p>
            <div
              data-reveal
              style={{ transitionDelay: "180ms" }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            >
              <Link href="/contact" className="btn-pill">
                Contact Our Sales Team
              </Link>
              <Link href="/products" className="link-underline">
                Explore Products
              </Link>
            </div>
          </div>

          <div className="relative min-h-[300px] md:min-h-0">
            <Image
              src="/img/hero.jpg"
              alt="Rimpang jahe segar dan irisan jahe kering di atas permukaan kayu"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 02 · Why Partner With Us */}
      <section id="why-us" aria-labelledby="why-judul" className="container-site py-20 md:py-28">
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow eyebrow-dash">{whyPartner.eyebrow}</p>
            <h2 id="why-judul" className="mt-5 text-h1 font-bold text-ink">
              {whyPartner.judul}
            </h2>
          </div>
          <p data-reveal style={{ transitionDelay: "80ms" }} className="text-body text-muted">
            {whyPartner.teks}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {whyPartner.kolom.map((k, i) => (
            <KolomNomor key={k.no} delay={i * 70} {...k} />
          ))}
        </div>
      </section>

      {/* 03 · Product Highlights — latar taupe + kartu overlay */}
      <section
        id="produk-highlight"
        aria-labelledby="highlight-judul"
        className="bg-taupe py-20 md:py-28"
      >
        <div className="container-site">
          <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <p className="eyebrow eyebrow-dash">{productHighlights.eyebrow}</p>
              <h2 id="highlight-judul" className="mt-5 text-h1 font-bold text-ink">
                {productHighlights.judul}
              </h2>
            </div>
            <p data-reveal style={{ transitionDelay: "80ms" }} className="text-body text-ink/75">
              {productHighlights.teks}
            </p>
          </div>

          <div data-reveal style={{ transitionDelay: "140ms" }} className="mt-12 grid gap-7 md:grid-cols-2">
            {produk.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 04 · Core Values */}
      <section
        id="core-values"
        aria-labelledby="values-judul"
        className="container-site py-20 md:py-28"
      >
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow eyebrow-dash">{coreValues.eyebrow}</p>
            <h2 id="values-judul" className="mt-5 text-h1 font-bold text-ink">
              {coreValues.judul}
            </h2>
          </div>
          <p data-reveal style={{ transitionDelay: "80ms" }} className="text-body text-muted">
            {coreValues.teks}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {coreValues.kolom.map((k, i) => (
            <KolomNomor key={k.no} delay={i * 70} {...k} />
          ))}
        </div>
      </section>

      {/* 05 · Company Profile + tiga stat kartu */}
      <CompanyProfile />

      {/* 06 · Vision & Mission — section gelap */}
      <section aria-labelledby="vision-judul" className="bg-espresso py-20 text-linen md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow-gold eyebrow-dash">{visionMission.visiEyebrow}</p>
            <h2 id="vision-judul" className="mt-5 text-h1 font-bold text-linen">
              {visionMission.visiJudul}
            </h2>
            <p className="mt-6 max-w-xl text-body text-linen/80">{visionMission.visiTeks}</p>
          </div>

          <div data-reveal style={{ transitionDelay: "90ms" }}>
            <p className="eyebrow-gold">{visionMission.misiEyebrow}</p>
            <ol className="mt-6">
              {visionMission.misi.map((m) => (
                <li key={m.no} className="border-t border-line-dark py-6 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="tnum text-h3 font-bold text-tan">{m.no}</span>
                    <h3 className="text-[1.0625rem] leading-snug font-bold text-linen">
                      {m.judul}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-body-sm text-linen/75">{m.teks}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 07 · Social Impact & Sustainability — latar beige + foto overlay */}
      <section
        aria-labelledby="social-judul"
        className="bg-beige py-20 md:py-28"
      >
        <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow eyebrow-dash">{socialImpact.eyebrow}</p>
            <h2 id="social-judul" className="mt-5 text-h1 font-bold text-ink">
              {socialImpact.judul}
            </h2>
            <div className="mt-6 space-y-4 text-body text-muted">
              {socialImpact.paragraf.map((t) => (
                <p key={t.slice(0, 32)}>{t}</p>
              ))}
            </div>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "100ms" }}
            className="relative overflow-hidden rounded-xl outline outline-1 outline-black/10"
          >
            <Image
              src="/img/panen.jpg"
              alt="Kebun jahe milik petani mitra di Indonesia"
              width={960}
              height={720}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
            />
            <p className="absolute inset-x-0 bottom-0 p-6 text-[1.125rem] leading-snug font-bold text-white">
              {socialImpact.fotoJudul}
            </p>
          </div>
        </div>
      </section>

      {/* 08 · CTA gelap — penutup home */}
      <section aria-labelledby="cta-judul" className="bg-espresso-deep py-24 text-center md:py-32">
        <div data-reveal className="container-site flex flex-col items-center">
          <p className="eyebrow-gold eyebrow-dash">{ctaGelap.eyebrow}</p>
          <h2 id="cta-judul" className="mt-6 max-w-3xl text-h1 font-bold text-linen">
            {ctaGelap.judul}
          </h2>
          <Link href="/contact" className="btn-pill mt-9">
            {ctaGelap.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
