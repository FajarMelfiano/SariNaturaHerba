import Image from "next/image";
import Link from "next/link";
import type { Produk } from "@/content/site";

/**
 * Kartu produk — MOCKUP Product Highlights: foto rounded-xl dengan overlay
 * gradasi, judul putih di kiri bawah, label "VIEW PRODUCT" di bawahnya.
 */
export function ProductCard({ p }: { p: Produk }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      className="group relative block overflow-hidden rounded-xl outline outline-1 outline-black/10 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-1 hover:shadow-[0_18px_44px_-26px_rgba(46,36,27,0.55)]"
      aria-label={`${p.kartu} — lihat detail produk`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.gambar}
          alt={p.alt}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {/* Overlay gradasi agar teks kontras AA di atas foto */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-[1.375rem] leading-tight font-bold text-white">{p.kartu}</h3>
          <span className="mt-1.5 inline-block text-caption font-bold tracking-[0.14em] text-white/90 uppercase underline-offset-4 group-hover:underline">
            View Product
          </span>
        </div>
      </div>
    </Link>
  );
}
