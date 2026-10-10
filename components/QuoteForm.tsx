"use client";

import { useState } from "react";
import { formulir, produk, site } from "@/content/site";

type FieldErrors = Partial<
  Record<
    | "nama"
    | "email"
    | "negara"
    | "produk"
    | "volume"
    | "pesan",
    string
  >
>;

const LABEL = "block text-caption font-bold tracking-[0.12em] text-linen/75 uppercase";
const INPUT =
  "mt-2 w-full rounded-lg border border-linen/40 bg-transparent px-4 py-3 text-body text-linen " +
  "placeholder:text-linen/55 transition-colors duration-150 " +
  "focus:border-tan focus:outline-none focus-visible:outline-2 focus-visible:outline-tan";
const ERR = "mt-1.5 text-body-sm text-red-300";

function validate(f: FormData): FieldErrors {
  const e: FieldErrors = {};
  const nama = String(f.get("nama") ?? "").trim();
  const email = String(f.get("email") ?? "").trim();
  const negara = String(f.get("negara") ?? "").trim();
  const produkVal = String(f.get("produk") ?? "").trim();
  const volume = String(f.get("volume") ?? "").trim();
  const pesan = String(f.get("pesan") ?? "").trim();

  if (nama.length < 2) e.nama = "Mohon isi nama lengkap Anda.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Format email tidak valid.";
  if (negara.length < 2) e.negara = "Mohon isi negara tujuan.";
  if (!produkVal) e.produk = "Pilih salah satu produk.";
  if (!volume) e.volume = "Isi perkiraan volume dalam metrik ton.";
  if (pesan.length < 10) e.pesan = "Ceritakan kebutuhan Anda minimal 10 karakter.";
  return e;
}

/**
 * Form International Quotation Request — MOCKUP: kartu cokelat gelap membulat,
 * label uppercase kecil, grid 2 kolom, checkbox persetujuan, pill emas.
 * Validasi di client untuk umpan balik cepat; siap disambungkan ke server
 * action / endpoint saat backend tersedia (lihat catatan di README).
 */
export function QuoteForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    const kunciPertama = Object.keys(found)[0];
    if (kunciPertama) {
      form.querySelector<HTMLElement>(`#${kunciPertama}`)?.focus();
      return;
    }

    setStatus("loading");
    // Siap dikirim ke server action/email endpoint — saat ini simulasi sukses.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    form.reset();
  }

  return (
    <div className="rounded-3xl bg-espresso p-7 text-linen md:p-10">
      <p className="eyebrow-gold eyebrow-dash">{formulir.eyebrow}</p>
      <h2 className="mt-4 text-h2 font-bold text-linen">{formulir.judul}</h2>
      <p className="mt-4 max-w-lg text-body-sm text-linen/75">{formulir.teks}</p>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-8 rounded-xl border border-tan/50 bg-white/5 p-7"
        >
          <h3 className="text-h3 font-bold text-tan">Terima kasih — permintaan Anda terkirim.</h3>
          <p className="mt-3 text-body-sm text-linen/80">
            Tim kami akan membalas ke email Anda pada {site.jamHari}, {site.jamJam}. Untuk
            kebutuhan mendesak, hubungi{" "}
            <a
              href={`https://wa.me/${site.teleponWa}`}
              className="font-semibold text-tan underline"
            >
              {site.telepon}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 text-caption font-bold tracking-[0.12em] text-linen uppercase underline underline-offset-4 hover:text-tan"
          >
            Kirim permintaan lain
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={LABEL} htmlFor="nama">
                Full Name <span aria-hidden="true" className="text-tan">*</span>
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                autoComplete="name"
                required
                aria-invalid={errors.nama ? "true" : undefined}
                aria-describedby={errors.nama ? "nama-error" : undefined}
                className={INPUT}
                placeholder="Jane Buyer"
              />
              {errors.nama && (
                <p id="nama-error" className={ERR}>
                  {errors.nama}
                </p>
              )}
            </div>

            <div>
              <label className={LABEL} htmlFor="perusahaan">
                Company / Organization
              </label>
              <input
                id="perusahaan"
                name="perusahaan"
                type="text"
                autoComplete="organization"
                className={INPUT}
                placeholder="PT Maju Jaya"
              />
            </div>

            <div>
              <label className={LABEL} htmlFor="email">
                Official Business Email <span aria-hidden="true" className="text-tan">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={INPUT}
                placeholder="buyer@company.com"
              />
              {errors.email && (
                <p id="email-error" className={ERR}>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className={LABEL} htmlFor="telepon">
                Phone / WhatsApp
              </label>
              <input
                id="telepon"
                name="telepon"
                type="tel"
                autoComplete="tel"
                className={INPUT}
                placeholder="+60 12 345 6789"
              />
            </div>

            <div>
              <label className={LABEL} htmlFor="negara">
                Destination Country <span aria-hidden="true" className="text-tan">*</span>
              </label>
              <input
                id="negara"
                name="negara"
                type="text"
                required
                aria-invalid={errors.negara ? "true" : undefined}
                aria-describedby={errors.negara ? "negara-error" : undefined}
                className={INPUT}
                placeholder="Malaysia"
              />
              {errors.negara && (
                <p id="negara-error" className={ERR}>
                  {errors.negara}
                </p>
              )}
            </div>

            <div>
              <label className={LABEL} htmlFor="pelabuhan">
                Destination Port
              </label>
              <input
                id="pelabuhan"
                name="pelabuhan"
                type="text"
                className={INPUT}
                placeholder="Port Klang"
              />
            </div>

            <div>
              <label className={LABEL} htmlFor="produk">
                Product of Interest <span aria-hidden="true" className="text-tan">*</span>
              </label>
              {/* Select bertema: chevron emas kustom + popup gelap (color-scheme) */}
              <div className="relative">
                <select
                  id="produk"
                  name="produk"
                  required
                  defaultValue=""
                  style={{ colorScheme: "dark" }}
                  aria-invalid={errors.produk ? "true" : undefined}
                  aria-describedby={errors.produk ? "produk-error" : undefined}
                  className={INPUT + " appearance-none pr-11"}
                >
                  <option value="" disabled className="bg-espresso text-linen">
                    Pilih produk…
                  </option>
                  {produk.map((p) => (
                    <option key={p.slug} value={p.slug} className="bg-espresso text-linen">
                      {p.h1}
                    </option>
                  ))}
                  <option value="lainnya" className="bg-espresso text-linen">
                    Lainnya / Other
                  </option>
                </select>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-tan"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {errors.produk && (
                <p id="produk-error" className={ERR}>
                  {errors.produk}
                </p>
              )}
            </div>

            <div>
              <label className={LABEL} htmlFor="volume">
                Estimated Volume (Metric Tons) <span aria-hidden="true" className="text-tan">*</span>
              </label>
              <input
                id="volume"
                name="volume"
                type="text"
                required
                aria-invalid={errors.volume ? "true" : undefined}
                aria-describedby={errors.volume ? "volume-error" : undefined}
                className={INPUT}
                placeholder="15"
              />
              {errors.volume && (
                <p id="volume-error" className={ERR}>
                  {errors.volume}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className={LABEL} htmlFor="pesan">
              Additional Notes / Special Specifications
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={5}
              required
              aria-invalid={errors.pesan ? "true" : undefined}
              aria-describedby={errors.pesan ? "pesan-error" : undefined}
              className={INPUT + " resize-y"}
              placeholder="Spesifikasi produk, kemasan, pelabuhan tujuan, incoterms…"
            />
            {errors.pesan && (
              <p id="pesan-error" className={ERR}>
                {errors.pesan}
              </p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              id="setuju"
              name="setuju"
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 accent-[#c99b6d]"
            />
            <label htmlFor="setuju" className="text-body-sm leading-relaxed text-linen/70">
              {formulir.persetujuan}
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-pill w-full disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? "Mengirim…" : formulir.kirim}
          </button>
        </form>
      )}
    </div>
  );
}
