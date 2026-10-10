import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { kontak, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — International Quotation Request",
  description:
    "International quotation request untuk jahe dan produk herbal Indonesia. Tim penjualan kami membalas dalam satu hari kerja.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero kontak — MOCKUP: latar beige, eyebrow, judul besar, sub emas */}
      <header className="bg-beige py-20 md:py-28">
        <div data-reveal className="container-site">
          <p className="eyebrow eyebrow-dash">{kontak.heroEyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-mega font-bold text-ink">{kontak.heroJudul}</h1>
          <p className="mt-6 max-w-2xl text-subtitle font-medium text-tan-ink">
            {kontak.heroTeks}
          </p>
        </div>
      </header>

      {/* Info kontak (kiri) + form gelap (kanan) */}
      <section id="quotation" className="container-site grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div data-reveal>
          <p className="eyebrow eyebrow-dash">{kontak.infoEyebrow}</p>
          <h2 className="mt-5 text-h1 font-bold text-ink">{kontak.infoJudul}</h2>

          <dl className="mt-10">
            <div className="border-t border-tan/60 py-6">
              <dt className="text-caption font-bold tracking-[0.14em] text-tan-ink uppercase">
                {kontak.alamatLabel}
              </dt>
              <dd className="mt-2 text-[1.0625rem] font-semibold tracking-wide text-ink">
                {kontak.alamatNilai}
              </dd>
            </div>

            <div className="border-t border-tan/60 py-6">
              <dt className="text-caption font-bold tracking-[0.14em] text-tan-ink uppercase">
                {kontak.emailLabel}
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[clamp(1.25rem,2.5vw,1.625rem)] font-bold break-all text-ink transition-colors duration-150 hover:text-tan-ink"
                >
                  {site.email}
                </a>
              </dd>
            </div>

            <div className="border-t border-tan/60 py-6">
              <dt className="text-caption font-bold tracking-[0.14em] text-tan-ink uppercase">
                {kontak.waLabel}
              </dt>
              <dd className="mt-2">
                <a
                  href={`https://wa.me/${site.teleponWa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tnum text-[clamp(1.25rem,2.5vw,1.625rem)] font-bold text-ink transition-colors duration-150 hover:text-tan-ink"
                >
                  {site.telepon}
                </a>
              </dd>
            </div>

            <div className="border-y border-tan/60 py-6">
              <dt className="text-caption font-bold tracking-[0.14em] text-tan-ink uppercase">
                {kontak.jamLabel}
              </dt>
              <dd className="mt-2 text-[1.0625rem] font-semibold text-ink">
                <p>{site.jamHari}</p>
                <p className="tnum">{site.jamJam}</p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Kartu form gelap — MOCKUP: kartu cokelat membulat */}
        <div data-reveal style={{ transitionDelay: "100ms" }} className="md:pt-4">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
