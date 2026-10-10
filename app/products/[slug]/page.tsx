import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduk, produk } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return produk.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduk(slug);
  if (!p) return {};
  return {
    title: p.h1,
    description: p.ringkas,
    openGraph: { images: [{ url: p.gambar, alt: p.alt }] },
  };
}

export default async function ProdukDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduk(slug);
  if (!p) notFound();

  const Foto = (
    <div data-reveal className="md:sticky md:top-28">
      <Image
        src={p.gambar}
        alt={p.alt}
        width={1200}
        height={900}
        className="aspect-[4/3] w-full rounded-xl object-cover outline outline-1 outline-black/10 md:aspect-[4/5]"
      />
    </div>
  );

  const Konten = (
    <div data-reveal style={{ transitionDelay: "80ms" }}>
      <p className="eyebrow">01 —— Produk Herbal</p>
      <h1 className="mt-5 text-mega font-bold text-ink">{p.h1}</h1>
      <p className="mt-2 text-[1.1875rem] font-semibold text-tan-ink">{p.subjudul}</p>

      <p className="mt-7 text-[1.0625rem] leading-relaxed font-semibold text-ink">
        {p.intro}
      </p>

      <section className="mt-12" aria-labelledby="deskripsi-judul">
        <h2 id="deskripsi-judul" className="text-h2 font-bold text-ink">
          Deskripsi Produk
        </h2>
        <div className="mt-5 space-y-5 text-body text-muted">
          {p.deskripsi.map((t) => (
            <p key={t.slice(0, 32)}>{t}</p>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="spesifikasi-judul">
        <p className="eyebrow eyebrow-dash">Informasi Teknis</p>
        <h2 id="spesifikasi-judul" className="mt-4 text-h2 font-bold text-ink">
          Spesifikasi Teknis
        </h2>
        <hr className="rule-gold mt-5" />
        <dl className="mt-6 space-y-4 text-body text-muted">
          {p.spesifikasi.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-bold text-ink">{s.label}:</span> {s.nilai}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
        <Link href="/contact" className="btn-brown">
          Minta Penawaran
        </Link>
        <Link href="/products" className="link-underline">
          Lihat Halaman Produk
        </Link>
      </div>
    </div>
  );

  return (
    <article className="container-site grid items-start gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      {/* Foto kiri (jahe gajah) atau kanan (jahe kering) — sesuai mockup */}
      {p.fotoKiri ? (
        <>
          {Foto}
          {Konten}
        </>
      ) : (
        <>
          {Konten}
          {Foto}
        </>
      )}
    </article>
  );
}
