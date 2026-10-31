/**
 * CV Sari Natura Herba site content.
 * Keep customer-provided company and product facts unchanged; UI copy is English.
 */

export const site = {
  nama: "CV Sari Natura Herba",
  namaFooter: "CV Sari Natura Herba",
  taglineFooter: "Indonesian Ginger & Herbal Products Exporter",
  tagline: "PURITY WITH VALUE",
  deskripsi:
    "Indonesian ginger and herbal product exporter, connecting Indonesia's natural resources with global markets.",
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

/** Main navigation. */
export const navigasi = [
  { no: "01", label: "Home", href: "/" },
  { no: "02", label: "About", href: "/about" },
  { no: "03", label: "Products", href: "/products" },
  { no: "04", label: "Contact", href: "/contact" },
] as const;

/** Eight numbered Home screens shown in the customer's revision document. */
export const bagianHome = [
  { id: "home", label: "HOME" },
  { id: "why-us", label: "WHY US" },
  { id: "produk-highlight", label: "PRODUCTS" },
  { id: "core-values", label: "VALUES" },
  { id: "company-profile", label: "PROFILE" },
  { id: "vision-mission", label: "VISION & MISSION" },
  { id: "social-impact", label: "SOCIAL IMPACT" },
  { id: "closing-cta", label: "PARTNERSHIP" },
] as const;

/* 01 · Hero */
export const hero = {
  eyebrow: "CV SARI NATURA HERBA",
  judul: "Your Best Partner for Herbal Needs",
  sub: "TOGETHER FOR A BETTER FUTURE",
} as const;

/* 02 · Why Partner With Us */
export const whyPartner = {
  eyebrow: "WHY PARTNER WITH US",
  judul: "Designed to meet the global supply of high-quality herbal products.",
  teks: "Quality-focused sourcing, flexible logistics, and packaging solutions tailored for global distributors, wholesalers, and retail brands.",
  kolom: [
    {
      no: "01",
      judul: "International Quality Standards",
      teks: "Products are sourced through quality-focused production networks with strict food safety management practices.",
    },
    {
      no: "02",
      judul: "Reliability",
      teks: "We are committed to consistent product quality, dependable supply coordination, and timely delivery to support our clients' operations.",
    },
    {
      no: "03",
      judul: "Transparency",
      teks: "Honesty and transparency guide every stage of our business. We maintain clear communication with partners about product specifications, stock availability, pricing, and shipping status.",
    },
  ],
} as const;

/* 03 · Product Highlights */
export const productHighlights = {
  eyebrow: "PRODUCT HIGHLIGHTS",
  judul: "Indonesia's natural products, prepared for global markets.",
  teks: "Carefully processed to preserve natural purity, authentic taste, and commercial consistency.",
} as const;

/* About hero */
export const resources = {
  eyebrow: "CV SARI NATURA HERBA",
  judul: "Supplying Indonesia's Natural Resources to the Global Market",
  teks: "Through strategic sourcing and a well-managed supply chain, we provide export-quality Indonesian ginger and connect local production with international markets.",
  cta: "DISCOVER OUR COMPANY",
  fotoKecil: "INDONESIAN NATURAL PRODUCTS",
  fotoJudul: "Local potential. Reliable global supply.",
} as const;

/* 04 · Core Values */
export const coreValues = {
  eyebrow: "OUR CORE VALUES",
  judul: "Principles We Uphold in Every Partnership",
  teks: "Our values shape how we source products, coordinate supply chains, communicate with partners, and build long-term business relationships.",
  kolom: [
    {
      no: "01",
      judul: "Quality",
      teks: "Our commitment to quality and global export standards is the foundation of our business. Every product is carefully selected for size consistency, cleanliness, condition, and freshness in line with international market requirements.",
    },
    {
      no: "02",
      judul: "Reliability",
      teks: "We are committed to maintaining consistent product quality, dependable supply coordination, and timely delivery to support the continuity of our clients' operations.",
    },
    {
      no: "03",
      judul: "Transparency",
      teks: "Honesty and transparency guide every stage of our business. We keep partners informed about product specifications, stock availability, pricing, and shipping status.",
    },
  ],
} as const;

/* 05 · Company Profile */
export const companyProfile = {
  eyebrow: "COMPANY PROFILE",
  judul: "A strategic gateway from Indonesia to global markets.",
  paragraf: [
    "CV Sari Natura Herba is a sourcing and trading partner bringing export-grade Indonesian fresh ginger to the global market.",
    "We work with selected farmers and suppliers to provide a consistent supply of fresh ginger that meets buyer specifications. From sourcing and sorting to packaging and shipment coordination, we manage each stage with a focus on quality, precision, and reliability.",
    "By combining Indonesia's agricultural potential with quality control, CV Sari Natura Herba aims to serve as a long-term supply partner for importers, distributors, wholesalers, manufacturers, and retail brands across international markets.",
  ],
  stat: [
    {
      label: "PRODUCTION CAPACITY",
      nilai: "Up to 25 MT per month, subject to product type and seasonal availability",
    },
    {
      label: "MINIMUM ORDER",
      nilai: "Starting from 15 tons (20-foot container), depending on product type and packaging requirements",
    },
    {
      label: "LEAD TIME",
      nilai: "7–30 working days after order confirmation and payment arrangement",
    },
  ],
} as const;

/* 06 · Vision & Mission */
export const visionMission = {
  visiEyebrow: "OUR VISION",
  visiJudul: "Our Path Toward Responsible Global Growth",
  visiTeks: "We bring export-quality Indonesian ginger to market through responsible partnerships, reliable sourcing, and a coordinated supply chain. Together with our farmer partners and global buyers, we aim for long-term growth that creates value from the source to the destination market.",
  misiEyebrow: "OUR MISSION",
  misi: [
    {
      no: "01",
      judul: "Supplying export-quality fresh ginger",
      teks: "Supplying fresh Indonesian ginger selected and prepared according to buyer specifications, with a focus on quality, supply consistency, product handling, and packaging requirements for international markets.",
    },
    {
      no: "02",
      judul: "Building a reliable supply chain",
      teks: "Managing procurement—from partner farmers and selected suppliers to shipment coordination—efficiently, transparently, and on time to help buyers secure reliable supplies.",
    },
    {
      no: "03",
      judul: "Creating partnerships for mutual growth",
      teks: "Building mutually beneficial, long-term partnerships with farmers, suppliers, importers, distributors, and global business partners, while supporting the value of Indonesia's agricultural potential.",
    },
  ],
} as const;

/* 07 · Social Impact & Sustainability */
export const socialImpact = {
  eyebrow: "SOCIAL IMPACT & SUSTAINABILITY",
  judul: "Building Responsible Supply Chains Together",
  paragraf: [
    "A responsible supply chain forms the foundation of our ginger export business.",
    "We work closely with partner farmers and international buyers, with a focus on responsible sourcing, clear communication, product traceability, and relevant quality documentation. Our aim is to build long-term business relationships that create value for farmers, buyers, and surrounding communities.",
  ],
  fotoJudul: "Supporting a resilient network of local farmers.",
} as const;

/* 08 · Closing CTA */
export const ctaGelap = {
  eyebrow: "LONG-TERM SUPPLY PARTNERSHIP",
  judul: "Building reliable partnerships from Indonesia to the world.",
  cta: "DISCUSS A PARTNERSHIP",
} as const;

/* Products CTA */
export const ctaProducts = {
  eyebrow: "GLOBAL SUPPLY PARTNERSHIPS",
  judul: "Looking for a reliable Indonesian supply partner?",
  teks: "Contact our team to discuss product specifications, packaging requirements, and shipment volumes.",
  cta: "CONTACT OUR SALES TEAM",
} as const;

/* Products landing */
export const produkLanding = {
  eyebrow: "OUR PRODUCTS",
  judul: "PREMIUM INDONESIAN GINGER PRODUCTS FOR THE GLOBAL MARKET.",
  teks: "We supply carefully selected Indonesian ginger products for export markets. With consistent specifications and flexible packaging options, we aim to be a long-term supply partner for importers.",
  cta: "EXPLORE OUR PRODUCTS",
  ctaKedua: "CONTACT OUR TEAM",
} as const;

/* Contact page */
export const kontak = {
  heroEyebrow: "CONTACT OUR SALES TEAM",
  heroJudul: "Let's discuss your global supply requirements.",
  heroTeks: "Submit your product, packaging, volume, and destination requirements. Our sales team will review your inquiry and respond within one business day.",
  infoEyebrow: "DIRECT CONTACT INFORMATION",
  infoJudul: "Connect directly with our business team.",
  alamatLabel: "OFFICIAL OFFICE ADDRESS",
  alamatNilai: "GRESIK, EAST JAVA, INDONESIA",
  emailLabel: "BUSINESS EMAIL",
  waLabel: "BUSINESS WHATSAPP",
  jamLabel: "BUSINESS HOURS",
} as const;

/* B2B quotation form */
export const formulir = {
  eyebrow: "OFFICIAL B2B INQUIRY FORM",
  judul: "International Quotation Request",
  teks: "Complete the form below with your requirements. The inquiry form is currently a preview and does not send messages yet.",
  persetujuan:
    "I agree to be contacted regarding this inquiry and understand that the submitted information will be used for business communication and quotation purposes.",
  kirim: "VALIDATE FORM",
} as const;

export type Produk = {
  slug: string;
  h1: string;
  subjudul: string;
  kartu: string;
  intro: string;
  gambar: string;
  alt: string;
  fotoKiri: boolean;
  deskripsi: string[];
  spesifikasi: { label: string; nilai: string }[];
  ringkas: string;
};

/** Only products and specifications already present in the repository are listed. */
export const produk: Produk[] = [
  {
    slug: "jahe-gajah",
    h1: "Fresh Elephant Ginger",
    subjudul: "Elephant Ginger",
    kartu: "Fresh Elephant Ginger",
    intro:
      "Selected Indonesian elephant ginger with large rhizomes, fine fibers, and a distinctive aroma. Suitable for food, beverage, and pharmaceutical industry requirements.",
    gambar: "/img/ginger-fresh-customer.jpg",
    alt: "Fresh Indonesian elephant ginger rhizomes",
    fotoKiri: true,
    deskripsi: [
      "Our fresh elephant ginger is sourced from Indonesian production areas and carefully selected for export quality. It is known for its large rhizomes, thick flesh, relatively fine fibers, and distinctive aroma and pungency, making it suitable for food, beverage, herbal, and pharmaceutical applications.",
      "Each batch is handled through controlled post-harvest steps, including selection, washing, surface drying, and final sorting. These steps help maintain cleanliness, size consistency, and freshness during packing and shipment. We aim to provide fresh elephant ginger with consistent specifications according to buyer requirements.",
      "Fresh elephant ginger can be used as an ingredient for food and beverages, herbal products and supplements, pharmaceutical raw materials, and retail or wholesale markets. Sorting sizes, grades, and packaging may be adjusted to buyer requirements. Our focus is on quality, timely delivery, and dependable supply.",
    ],
    spesifikasi: [
      { label: "Product Type", nilai: "Elephant ginger" },
      { label: "Form", nilai: "Rhizome" },
      { label: "Color", nilai: "Yellowish white" },
      { label: "Taste", nilai: "Mild pungency and a less intense aroma" },
      { label: "Moisture Content", nilai: "According to buyer specifications" },
      { label: "Packaging", nilai: "According to buyer specifications" },
    ],
    ringkas:
      "Selected Indonesian fresh elephant ginger with large rhizomes, fine fibers, and a distinctive aroma.",
  },
  {
    slug: "jahe-kering-slice",
    h1: "Dried Ginger Slices",
    subjudul: "Ginger Slices",
    kartu: "Dried Ginger Slices",
    intro:
      "High-quality dried ginger slices from Indonesia, with a natural aroma and warm pungency. Suitable for herbal tea, spice blends, food ingredients, and herbal products.",
    gambar: "/img/ginger-slices-customer.jpg",
    alt: "Golden dried Indonesian ginger slices",
    fotoKiri: false,
    deskripsi: [
      "Dried Ginger Slices are made from selected Indonesian ginger roots and processed to retain their natural aroma, warm pungency, and characteristic fibrous texture.",
      "They are commonly used in herbal drinks, tea blends, spice blends, food ingredients, traditional preparations, and further processing by food manufacturers.",
      "With suitable drying, sorting, and packaging processes, our dried ginger slices are prepared for wholesale supply and export to international buyers.",
    ],
    spesifikasi: [
      { label: "Product Type", nilai: "Dried ginger slices" },
      { label: "Form", nilai: "Sliced dried rhizome" },
      { label: "Color", nilai: "Light yellow to pale brown" },
      { label: "Aroma", nilai: "Natural ginger aroma" },
      { label: "Moisture Content", nilai: "According to buyer specifications" },
      { label: "Packaging", nilai: "According to buyer specifications" },
    ],
    ringkas:
      "Indonesian dried ginger slices with a natural aroma, prepared for wholesale export supply.",
  },
];

export function getProduk(slug: string): Produk | undefined {
  return produk.find((p) => p.slug === slug);
}
