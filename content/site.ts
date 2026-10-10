/**
 * Data konten situs CV Sari Natura Herba.
 * Teks dipertahankan persis seperti mockup customer (bahasa Inggris/Indonesia
 * campur, termasuk ejaan aslinya) — mockup adalah sumber kebenaran visual.
 */

export const site = {
  nama: "CV Sari Natura Herba",
  namaFooter: "CV SariNatura Herba",
  taglineFooter: "Indonesian Herbs Exporter",
  tagline: "KEMURNIAN YANG BERNILAI",
  deskripsi:
    "Eksporir jahe dan produk herbal Indonesia — memasok sumber daya alam Indonesia untuk pasar global.",
  email: "sari01natura@gmail.com",
  telepon: "+62 815 2921 2210",
  teleponWa: "6281529212210",
  kantor: "Gresik, East Java, Indonesia",
  gudang: "Sidoarjo, East Java, Indonesia",
  jamHari: "Monday – Friday",
  jamJam: "09.00 – 20.00 WIB (GMT+7)",
  menuPernyataan:
    "Supplying Indonesia's premium agricultural products to the global market.",
} as const;

/** Menu overlay — 01…04 sesuai mockup. About = halaman khusus (/about). */
export const navigasi = [
  { no: "01", label: "Home", href: "/" },
  { no: "02", label: "About", href: "/about" },
  { no: "03", label: "Products", href: "/products" },
  { no: "04", label: "Contact", href: "/contact" },
] as const;

/** Lima bagian home (01–05) untuk rail titik + pagination pill.
 *  Layar "Supplying Indonesia's Natural Resources" adalah halaman About,
 *  bukan bagian home. */
export const bagianHome = [
  { id: "home", label: "HOME" },
  { id: "why-us", label: "WHY US" },
  { id: "produk-highlight", label: "PRODUCTS" },
  { id: "core-values", label: "VALUES" },
  { id: "company-profile", label: "PROFILE" },
] as const;

/* ─── 01 · Hero ─── */
export const hero = {
  eyebrow: "CV SARINATURA HERBA",
  judul: "Your Best Partner for Herbal Needs",
  sub: "TOGETHER FOR A BETTER FUTURE",
} as const;

/* ─── 02 · Why Partner With Us ─── */
export const whyPartner = {
  eyebrow: "WHY PARTNER WITH US",
  judul: "Designed to meet the global supply of high-quality herbal products.",
  teks: "Pengadaan barang dengan fokus pada kualitas, logistik yang fleksibel, dan solusi pengemasan yang disesuaikan untuk distributor global, pedagang grosir, dan merek ritel.",
  kolom: [
    {
      no: "01",
      judul: "Standar Kualitas Internasional",
      teks: "Produk-produk yang bersumber melalui jaringan produksi yang berfokus pada kualitas dengan praktik manajemen keamanan pangan yang ketat.",
    },
    {
      no: "02",
      judul: "Keandalan",
      teks: "Kami berkomitmen untuk menjaga konsistensi kualitas produk, koordinasi pasokan yang dapat diandalkan, dan pengiriman tepat waktu untuk mendukung keberlanjutan operasional klien kami.",
    },
    {
      no: "03",
      judul: "Transparansi",
      teks: "Kejujuran dan transparansi di setiap tahap bisnis adalah prinsip-prinsip yang selalu kami junjung tinggi. Kami berkomitmen untuk menjaga komunikasi yang jelas dengan semua mitra terkait spesifikasi produk, ketersediaan stok, harga, dan status pengiriman.",
    },
  ],
} as const;

/* ─── 03 · Product Highlights ─── */
export const productHighlights = {
  eyebrow: "PRODUCT HIGHLIGHTS",
  judul: "Indonesia's natural products prepare for global markets.",
  teks: "Hygienically processed to preserve natural purity, authentic taste, and commercial consistency.",
} as const;

/* ─── 04 · Supplying Indonesia's Natural Resources ─── */
export const resources = {
  eyebrow: "CV SARINATURA HERBA",
  judul: "Supplying Indonesia's Natural Resources to the Global Market",
  teks: "Through strategic sourcing and a well-managed supply chain, we ensure a consistent supply of export-quality fresh ginger, utilizing flexible partnership models that directly connect Indonesian ginger farmers to international markets.",
  cta: "DISCOVER OUR COMPANY",
  fotoKecil: "INDONESIAN NATURAL PRODUCTS",
  fotoJudul: "Local potential. Reliable global supply.",
} as const;

/* ─── 05 · Core Values ─── */
export const coreValues = {
  eyebrow: "OUR CORE VALUES",
  judul: "Principles We Uphold in Every Partnership",
  teks: "Our values shape the way we source products, coordinate supply chains,communicate with partners, and build long-term business relationships.",
  kolom: [
    {
      no: "01",
      judul: "Quality",
      teks: "Our commitment to superior quality and global export standards forms the core foundation of this business. Every product we export undergoes a rigorous selection process to ensure uniform sizing, optimal cleanliness, freedom from damage, and freshness that meets international market requirements.",
    },
    {
      no: "02",
      judul: "Reliability",
      teks: "We are committed to maintaining consistent product quality, dependable supply coordination, and timely delivery to support the continuity of our clients' operations.",
    },
    {
      no: "03",
      judul: "Transparency",
      teks: "Honesty and transparency at every stage of business are principles we steadfastly uphold. We are committed to maintaining clear communication with all partners regarding product specifications, stock availability, pricing, and shipping status.",
    },
  ],
} as const;

/* ─── 06 · Company Profile ─── */
export const companyProfile = {
  eyebrow: "COMPANY PROFILE",
  judul: "A strategic gateway from Indonesia to global markets.",
  paragraf: [
    "CV Sari Natura Herba is a sourcing and trading partner that brings high-quality, export-grade Indonesian fresh ginger to the global market.",
    "We collaborate with selected farmers and suppliers to provide a consistent supply of fresh ginger that meets buyer specifications and is ready for export. From sourcing in production areas, sorting, and packaging to coordinating shipments, we manage every stage with a focus on quality, precision, and reliability.",
    "By combining Indonesia's agricultural potential with rigorous quality control, CV Sari Natura Herba is committed to serving as a long-term supply partner for importers, distributors, wholesalers, manufacturers, and retail brands across international markets.",
  ],
  stat: [
    {
      label: "PRODUCTION CAPACITY",
      nilai: "Up to 25 MT per month, subject to product type and seasonal availability",
    },
    {
      label: "MINIMUM ORDER",
      nilai: "Starting from 15 tons ( container 20 Feet ) depending on product type and packaging requirement",
    },
    {
      label: "LEAD TIME",
      nilai: "7–30 working days after order confirmation and payment arrangement",
    },
  ],
} as const;

/* ─── Vision & Mission (dark) ─── */
export const visionMission = {
  visiEyebrow: "OUR VISION",
  visiJudul: "Our Path Toward Responsible Global Growth",
  visiTeks: "We bring export-quality fresh Indonesian ginger to market through responsible partnerships, reliable sourcing, and a coordinated supply chain. Together with our farmer partners and global buyers, we foster long-term growth that creates value from the source to the destination market.",
  // Ejaan "MISION" dipertahankan persis seperti mockup.
  misiEyebrow: "OUR MISION",
  misi: [
    {
      no: "01",
      judul: "Supplying export-quality fresh ginger",
      teks: "Supplying fresh Indonesian ginger selected and prepared according to buyer specifications, with a focus on quality, supply consistency, product handling, and packaging requirements for the international market.",
    },
    {
      no: "02",
      judul: "Building a reliable supply chain",
      teks: "Managing procurement—from partner farmers and selected suppliers to shipment coordination—efficiently, transparently, and on time to help buyers secure reliable supplies.",
    },
    {
      no: "03",
      judul: "Creating partnerships for mutual growth",
      teks: "Building mutually beneficial, long-term partnerships with farmers, suppliers, importers, distributors, and global business partners, while fostering added value for Indonesia's agricultural potential.",
    },
  ],
} as const;

/* ─── Social Impact & Sustainability ─── */
export const socialImpact = {
  eyebrow: "SOCIAL IMPACT & SUSTAINABILITY",
  judul: "Building Responsible Supply Chains Together",
  paragraf: [
    "A responsible supply chain forms the foundation of our ginger export business.",
    "We work closely with partner farmers to ensure good agricultural practices, fair pricing, and sustainable well-being. At the same time, we maintain transparency and open communication with international buyers through comprehensive documentation, product traceability, and adherence to global quality standards. Through this approach, we not only export high-quality ginger but also build a business ecosystem that delivers positive impacts for all stakeholders—farmers, buyers, the environment, and the surrounding communities.",
  ],
  fotoJudul: "Supporting a resilient network of local farmers.",
} as const;

/* ─── CTA gelap (penutup home) ─── */
export const ctaGelap = {
  eyebrow: "LONG - TERM SUPPLY PARTNERSHIP",
  judul: "Building reliable partnerships from Indonesia to the world.",
  cta: "DISCUSS A PARTNERSHIP",
} as const;

/* ─── CTA Bahasa Indonesia (penutup halaman Products) ─── */
export const ctaId = {
  eyebrow: "KEMITRAAN PASOKAN GLOBAL",
  judul: "Sedang mencari mitra pemasok Indonesia yang andal?",
  teks: "Hubungi tim kami untuk membahas spesifikasi produk, persyaratan pengemasan, dan volume pengiriman.",
  cta: "HUBUNGI TIM PENJUALAN KAMI",
} as const;

/* ─── Landing Products ─── */
export const produkLanding = {
  eyebrow: "OUR PRODUCTS",
  judul: "PREMIUM ELEPHANT GINGER PRODUCTS FOR THE GLOBAL MARKET.",
  teks: "Kami menyediakan jahe dan produk pertanian pilihan yang diproses secara cermat untuk memenuhi standar ekspor. Dengan sumber pasokan yang andal, spesifikasi yang konsisten, serta opsi pengemasan yang fleksibel, kami siap menjadi mitra pasokan jangka panjang bagi importir di berbagai negara.",
  cta: "JELAJAHI PRODUK KAMI",
  ctaKedua: "HUBUNGI TIM KAMI",
} as const;

/* ─── Halaman Kontak ─── */
export const kontak = {
  heroEyebrow: "CONTACT OUR SALES TEAM",
  heroJudul: "Let's discuss your global supply requirements.",
  heroTeks: "Submit your product, packaging, volume, and destination requirements, Our sales team will review your inquiry and provide an official response within one business day.",
  infoEyebrow: "DIRECT CONTACT INFORMATION",
  infoJudul: "Connect directly with our business team.",
  alamatLabel: "OFFICIAL OFFICE ADDRESS",
  alamatNilai: "GRESIK, EAST JAVA, INDONESIA",
  emailLabel: "BUSINESS EMAIL",
  waLabel: "BUSINESS WHATSAPP",
  jamLabel: "BUSINESS HOURS",
} as const;

/* ─── Formulir kutipan (B2B) ─── */
export const formulir = {
  eyebrow: "OFFICIAL B2B INQUIRY FORM",
  judul: "International Quotation Request",
  teks: "Please complete the form below. Our sales team will review your requirements and provide an official response within one business day.",
  persetujuan:
    "I agree to be contacted regarding this inquiry and understand that the submitted information will be used for business communication and quotation purposes.",
  kirim: "SUBMIT INQIURY",
} as const;

export type Produk = {
  slug: string;
  /** Judul H1 halaman detail */
  h1: string;
  /** Subjudul emas di bawah H1 */
  subjudul: string;
  /** Judul overlay kartu di home/produk */
  kartu: string;
  intro: string;
  gambar: string;
  alt: string;
  /** Foto di sisi kiri (jahe gajah) atau kanan (jahe kering) */
  fotoKiri: boolean;
  deskripsi: string[];
  spesifikasi: { label: string; nilai: string }[];
  ringkas: string;
};

export const produk: Produk[] = [
  {
    slug: "jahe-gajah",
    h1: "Jahe Gajah",
    subjudul: "Elephant ginger",
    kartu: "Jahe segar",
    intro:
      "Jahe gajah segar pilihan asal Indonesia dengan ukuran besar, serat halus, dan aroma tajam yang khas. Cocok untuk kebutuhan industri makanan, minuman, dan farmasi.",
    gambar: "/img/jahe-gajah.jpg",
    alt: "Tumpukan rimpang jahe gajah segar dengan tanah menempel",
    fotoKiri: true,
    deskripsi: [
      "Jahe gajah segar kami berasal dari sentra produksi jahe terbaik di Indonesia dan dipilih secara ketat untuk memenuhi standar kualitas ekspor. Jahe gajah dikenal dengan ukuran rimpang yang besar, daging tebal, serat relatif halus, serta aroma dan rasa pedas yang khas, sehingga menjadi pilihan utama untuk berbagai kebutuhan industri makanan, minuman, herbal, dan farmasi.",
      "Setiap batch jahe gajah segar kami melalui proses penanganan pascapanen yang terkontrol, mulai dari pemilihan bahan, pencucian, pengeringan permukaan, hingga sortasi akhir. Hal ini dilakukan untuk memastikan kebersihan, keseragaman ukuran, dan kesegaran jahe tetap terjaga selama proses pengemasan dan pengiriman ke berbagai negara. Dengan sumber pasokan yang andal dan kontrol kualitas di setiap tahap, kami mampu menyediakan jahe gajah segar dengan spesifikasi yang konsisten sesuai permintaan buyer internasional.",
      "Jahe gajah segar ini cocok digunakan sebagai bahan baku industri makanan dan minuman, produk herbal dan suplemen, bahan baku farmasi, serta kebutuhan pasar retail dan grosir di luar negeri. Kami menawarkan fleksibilitas dalam hal ukuran sortasi, grade, dan solusi pengemasan agar dapat disesuaikan dengan kebutuhan logistik dan preferensi importir. Melalui komitmen terhadap kualitas, ketepatan waktu, dan keandalan pasokan, jahe gajah segar kami siap menjadi mitra pasokan jangka panjang Anda di pasar global.",
    ],
    spesifikasi: [
      { label: "Jenis Produk", nilai: "Jahe Gajah." },
      { label: "Bentuk", nilai: "Rimpang." },
      { label: "Warna", nilai: "Putih Kekuningan." },
      { label: "Rasa", nilai: "Pedas yang paling lembut dan aroma yang kurang tajam." },
      { label: "Kadar Air", nilai: "Sesuai spesifikasi pembeli." },
      { label: "Pengemasan", nilai: "Sesuai spesifikasi pembeli." },
    ],
    ringkas:
      "Jahe gajah segar pilihan asal Indonesia — ukuran besar, serat halus, aroma tajam.",
  },
  {
    slug: "jahe-kering-slice",
    h1: "Jahe Kering Slice",
    subjudul: "Ginger Slices",
    kartu: "Jahe Slice Kering",
    intro:
      "Irisan jahe kering berkualitas tinggi dari Indonesia dengan aroma alami dan cita rasa pedas yang hangat, cocok untuk teh herbal, campuran rempah, bahan makanan, dan produk herbal.",
    gambar: "/img/jahe-kering.jpg",
    alt: "Irisan jahe kering berwarna kuning keemasan di atas permukaan kayu",
    fotoKiri: false,
    deskripsi: [
      "Jahe Slice Kering adalah jahe kering yang diiris dari akar jahe pilihan Indonesia dan diproses untuk mempertahankan aroma alaminya, rasa pedas yang hangat, dan tekstur berserat yang khas.",
      "Produk ini umumnya digunakan untuk minuman herbal, campuran teh, campuran rempah-rempah, bahan makanan, ramuan tradisional, dan pengolahan lebih lanjut oleh produsen makanan.",
      "Dengan proses pengeringan, penyortiran, dan pengemasan yang tepat, irisan jahe kering kami siap untuk dipasok secara grosir dan diekspor kepada pembeli internasional.",
    ],
    spesifikasi: [
      { label: "Jenis Produk", nilai: "Irisan Jahe Kering." },
      { label: "Bentuk", nilai: "Rimpang Kering Yang Diiris." },
      { label: "Warna", nilai: "Kuning Muda Hingga Cokelat Pucat." },
      { label: "Aroma", nilai: "Aroma Jahe Alami" },
      { label: "Kadar Air", nilai: "Sesuai spesifikasi pembeli." },
      { label: "Pengemasan", nilai: "Sesuai spesifikasi pembeli." },
    ],
    ringkas:
      "Irisan jahe kering dari Indonesia — aroma alami, siap ekspor grosir.",
  },
];

export function getProduk(slug: string): Produk | undefined {
  return produk.find((p) => p.slug === slug);
}
