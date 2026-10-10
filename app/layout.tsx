import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { RevealInit } from "@/components/Reveal";
import "./globals.css";

/** Sans-serif grotesque — padanan terdekat (gratis) untuk tipografi mockup. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sari-natura-herba.vercel.app"),
  title: {
    default: `${site.nama} — Your Best Partner for Herbal Needs`,
    template: `%s — ${site.nama}`,
  },
  description: site.deskripsi,
  keywords: [
    "jahe gajah",
    "elephant ginger exporter",
    "dried ginger slices",
    "Indonesian herbal exporter",
    "jahe kering slice",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.nama,
    title: `${site.nama} — Your Best Partner for Herbal Needs`,
    description: site.deskripsi,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/logo/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-espresso focus:px-4 focus:py-2 focus:text-linen"
        >
          Skip to content
        </a>
        <Header />
        <main id="konten-utama">{children}</main>
        <RevealInit />
      </body>
    </html>
  );
}
