import { companyProfile } from "@/content/site";

/**
 * Section "CV SARINATURA HERBA / A strategic gateway…" + tiga stat kartu.
 * Dipakai di dua tempat: home (bagian 05) dan halaman About (scroll target
 * tombol "DISCOVER OUR COMPANY") — satu sumber kode, tanpa duplikasi.
 */
export function CompanyProfile() {
  return (
    <section
      id="company-profile"
      aria-labelledby="profile-judul"
      className="border-t border-line bg-linen-soft py-20 md:py-28"
    >
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow eyebrow-dash">{companyProfile.eyebrow}</p>
            <h2 id="profile-judul" className="mt-5 text-h1 font-bold text-ink">
              {companyProfile.judul}
            </h2>
          </div>
          <div
            data-reveal
            style={{ transitionDelay: "80ms" }}
            className="space-y-4 text-body text-muted"
          >
            {companyProfile.paragraf.map((t) => (
              <p key={t.slice(0, 32)}>{t}</p>
            ))}
          </div>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {companyProfile.stat.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
              className="rounded-xl border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:border-tan hover:shadow-[0_16px_36px_-24px_rgba(46,36,27,0.4)]"
            >
              <dt className="text-caption font-bold tracking-[0.14em] text-tan-ink uppercase">
                {s.label}
              </dt>
              <dd className="mt-3 text-[0.9375rem] leading-relaxed font-semibold text-ink">
                {s.nilai}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
