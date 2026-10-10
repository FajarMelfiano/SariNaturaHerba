import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60svh] flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-mega text-espresso">Halaman tidak ditemukan</h1>
      <p className="mt-4 max-w-xl text-body text-muted">
        Halaman yang Anda cari dipindahkan atau tidak ada. Coba mulai dari beranda atau katalog produk.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-md bg-espresso px-6 py-3 text-body-sm font-semibold text-linen hover:bg-espresso-deep"
        >
          Beranda
        </Link>
        <Link
          href="/products"
          className="rounded-md border border-espresso px-6 py-3 text-body-sm font-semibold text-espresso hover:bg-espresso hover:text-linen"
        >
          Products
        </Link>
      </div>
    </section>
  );
}
