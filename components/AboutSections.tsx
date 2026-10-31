import Image from "next/image";
import Link from "next/link";
import {
  coreValues,
  ctaGelap,
  socialImpact,
  visionMission,
} from "@/content/site";

/** Sections requested for About; copy stays shared with the Home page data. */
export function AboutAdditionalSections() {
  return (
    <>
      <section
        id="about-vision-mission"
        aria-labelledby="about-vision-title"
        className="bg-espresso py-20 text-linen md:py-28"
      >
        <div className="container-site grid gap-12 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow-gold eyebrow-dash">{visionMission.visiEyebrow}</p>
            <h2 id="about-vision-title" className="mt-5 text-h1 font-bold text-linen">
              {visionMission.visiJudul}
            </h2>
            <p className="mt-6 max-w-xl text-body text-linen/80">{visionMission.visiTeks}</p>
          </div>
          <div data-reveal style={{ transitionDelay: "90ms" }}>
            <p className="eyebrow-gold">{visionMission.misiEyebrow}</p>
            <ol className="mt-6">
              {visionMission.misi.map((item) => (
                <li key={item.no} className="border-t border-line-dark py-6 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="tnum text-h3 font-bold text-tan">{item.no}</span>
                    <h3 className="text-[1.0625rem] leading-snug font-bold text-linen">
                      {item.judul}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-body-sm text-linen/75">{item.teks}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="about-core-values"
        aria-labelledby="about-values-title"
        className="container-site py-20 md:py-28"
      >
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow eyebrow-dash">{coreValues.eyebrow}</p>
            <h2 id="about-values-title" className="mt-5 text-h1 font-bold text-ink">
              {coreValues.judul}
            </h2>
          </div>
          <p data-reveal style={{ transitionDelay: "80ms" }} className="text-body text-muted">
            {coreValues.teks}
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {coreValues.kolom.map((item, index) => (
            <div
              key={item.no}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
              className="border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-7"
            >
              <span className="tnum text-caption font-bold tracking-[0.14em] text-tan-ink">
                {item.no}
              </span>
              <h3 className="mt-3 text-[1.0625rem] leading-snug font-bold text-ink">
                {item.judul}
              </h3>
              <p className="mt-3 text-body-sm text-muted">{item.teks}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about-social-impact"
        aria-labelledby="about-social-title"
        className="bg-beige py-20 md:py-28"
      >
        <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow eyebrow-dash">{socialImpact.eyebrow}</p>
            <h2 id="about-social-title" className="mt-5 text-h1 font-bold text-ink">
              {socialImpact.judul}
            </h2>
            <div className="mt-6 space-y-4 text-body text-muted">
              {socialImpact.paragraf.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div
            data-reveal
            style={{ transitionDelay: "100ms" }}
            className="relative overflow-hidden rounded-xl outline outline-1 outline-black/10"
          >
            <Image
              src="/img/farm-impact-customer.jpg"
              alt="A farmer harvesting ginger in an Indonesian field"
              width={1560}
              height={879}
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

      <section
        id="about-partnership"
        aria-labelledby="about-cta-title"
        className="bg-espresso-deep py-24 text-center md:py-32"
      >
        <div data-reveal className="container-site flex flex-col items-center">
          <p className="eyebrow-gold eyebrow-dash">{ctaGelap.eyebrow}</p>
          <h2 id="about-cta-title" className="mt-6 max-w-3xl text-h1 font-bold text-linen">
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
