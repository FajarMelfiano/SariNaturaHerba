import type { Metadata } from "next";
import Image from "next/image";
import { CompanyProfile } from "@/components/CompanyProfile";
import { resources } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Supplying Indonesia's Natural Resources",
  description:
    "Menghubungkan sumber daya alam Indonesia dengan pasar global lewat rantai pasok yang tertata, transparan, dan siap skala internasional.",
};

/**
 * Tab About — mockup "Supplying Indonesia's Natural Resources to the Global
 * Market": latar beige, judul besar + foto petani di kanan, tombol
 * "DISCOVER OUR COMPANY" men-scroll ke Company Profile di halaman yang sama.
 */
export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-judul" className="bg-beige">
        <div className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div data-reveal>
            <p className="eyebrow eyebrow-dash">{resources.eyebrow}</p>
            <h1 id="about-judul" className="mt-5 text-h1 font-bold text-ink">
              {resources.judul}
            </h1>
            <p className="mt-6 max-w-xl text-body text-muted">{resources.teks}</p>
            <a href="#company-profile" className="btn-pill mt-9">
              {resources.cta}
            </a>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "100ms" }}
            className="relative overflow-hidden rounded-xl outline outline-1 outline-black/10"
          >
            <Image
              src="/img/petani.jpg"
              alt="Petani Indonesia memegang hasil panen rimpang di kebun"
              width={960}
              height={720}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-caption font-bold tracking-[0.14em] text-white/85 uppercase">
                {resources.fotoKecil}
              </p>
              <p className="mt-1.5 text-[1.125rem] leading-snug font-bold text-white">
                {resources.fotoJudul}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target scroll tombol di atas — satu sumber kode dengan home */}
      <CompanyProfile />
    </>
  );
}
