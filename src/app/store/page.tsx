// src/app/store/page.tsx

import type { Metadata } from "next";
import SectionHeading from "@/components/Sections/SectionHeading";
import BranchList, { type Branch } from "@/components/Data/BranchList";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/Sections/CtaSection";
import FaqSection from "@/components/Sections/FaqSection";

const u = (photoId: string, w = 800) =>
  `https://images.unsplash.com/${photoId}?q=80&w=${w}&auto=format&fit=crop`;

export const metadata: Metadata = {
  title: "Toko & Klinik Skincare Terdekat",
  description:
    "Temukan daftar cabang Lusuka Skin di berbagai kota di Indonesia, lengkap dengan alamat, jam buka, dan kontak WhatsApp.",
  alternates: { canonical: "/store" },
  openGraph: {
    title: "Toko & Klinik Skincare Terdekat — Lusuka Skin",
    description:
      "Temukan daftar cabang Lusuka Skin di berbagai kota di Indonesia, lengkap dengan alamat, jam buka, dan kontak WhatsApp.",
    url: "https://lusuka-skincare.vercel.app/store",
    images: [
      {
        url: "/images/banner_seo.png",
        width: 1200,
        height: 630,
        alt: "Toko dan klinik Lusuka Skin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toko & Klinik Skincare Terdekat — Lusuka Skin",
    description: "Temukan daftar cabang Lusuka Skin di berbagai kota di Indonesia.",
    images: ["/images/banner_seo.png"],
  },
};

const branches: Branch[] = [
  {
    name: "Lusuka Skin Jakarta Selatan",
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
    address: "Jl. Contoh No. 10",
    hours: "Setiap hari 10.00–20.00 WIB",
    whatsapp: "6281234567801",
    services: [
      "Pembelian Produk",
      "Analisis Kulit",
      "Facial Hydrating",
      "Konsultasi Dokter",
    ],
    image: u("photo-1689838840483-a142801de947", 1200),
  },
  {
    name: "Lusuka Skin Bandung",
    province: "Jawa Barat",
    city: "Bandung",
    address: "Jl. Contoh No. 21",
    hours: "Setiap hari 10.00–21.00 WIB",
    whatsapp: "6281234567802",
    services: ["Pembelian Produk", "Konsultasi Kulit"],
    image: u("photo-1744343934252-b881283a9308?", 1200),
  },
  {
    name: "Lusuka Skin Semarang",
    province: "Jawa Tengah",
    city: "Semarang",
    address: "Jl. Contoh No. 32",
    hours: "Setiap hari 10.00–21.00 WIB",
    whatsapp: "6281234567803",
    services: ["Pembelian Produk", "Konsultasi Kulit"],
    image: u("photo-1738571003902-669d5cc0e57e", 1200),
  },
  {
    name: "Lusuka Skin Surabaya",
    province: "Jawa Timur",
    city: "Surabaya",
    address: "Jl. Contoh No. 43",
    hours: "Setiap hari 10.00–20.00 WIB",
    whatsapp: "6281234567804",
    services: [
      "Pembelian Produk",
      "Analisis Kulit",
      "Facial Brightening",
      "Konsultasi Dokter",
    ],
    image: u("photo-1642356190266-f91794c89ee0", 1200),
  },
  {
    name: "Lusuka Skin Medan",
    province: "Sumatera Utara",
    city: "Medan",
    address: "Jl. Contoh No. 54",
    hours: "Setiap hari 10.00–21.00 WIB",
    whatsapp: "6281234567805",
    services: ["Pembelian Produk", "Konsultasi Kulit"],
    image: u("photo-1598062568618-29c189c7f303", 1200),
  },
  {
    name: "Lusuka Skin Denpasar",
    province: "Bali",
    city: "Denpasar",
    address: "Jl. Contoh No. 65",
    hours: "Setiap hari 10.00–20.00 WIB",
    whatsapp: "6281234567806",
    services: [
      "Pembelian Produk",
      "Analisis Kulit",
      "Facial Hydrating",
      "Perawatan Kulit Berjerawat",
    ],
    image: u("photo-1773715880810-e0659a39c4a1", 1200),
  },
  {
    name: "Lusuka Skin Makassar",
    province: "Sulawesi Selatan",
    city: "Makassar",
    address: "Jl. Contoh No. 76",
    hours: "Setiap hari 10.00–21.00 WIB",
    whatsapp: "6281234567807",
    services: ["Pembelian Produk", "Konsultasi Kulit"],
    image: u("photo-1646579360571-de5ecf3af648", 1200),
  },
];

const clinicServices = [
  {
    title: "Pembelian Produk",
    text: "Belanja langsung produk skincare Lusuka Skin di cabang terdekat.",
  },
  {
    title: "Analisis Kulit",
    text: "Pemeriksaan kondisi kulit untuk menentukan kebutuhan perawatan yang sesuai.",
  },
  {
    title: "Konsultasi Dokter",
    text: "Diskusi rutinitas dan kebutuhan kulit bersama dokter di cabang kami.",
  },
  {
    title: "Facial Hydrating",
    text: "Perawatan wajah untuk membantu mengembalikan kelembapan dan kenyamanan kulit.",
  },
  {
    title: "Facial Brightening",
    text: "Perawatan wajah untuk membantu tampilan kulit tampak lebih cerah dan segar.",
  },
  {
    title: "Perawatan Kulit Berjerawat",
    text: "Perawatan terarah untuk kulit yang mudah berjerawat, dengan pendampingan tenaga ahli.",
  },
];

const storeFaqs = [
  {
    q: "Apakah perlu reservasi untuk datang ke cabang?",
    a: "Kami menyarankan reservasi lewat WhatsApp cabang agar Anda mendapat jadwal yang nyaman dan tidak menunggu lama. Kunjungan langsung tetap dilayani sesuai ketersediaan.",
  },
  {
    q: "Apakah semua produk tersedia di setiap cabang?",
    a: "Sebagian besar produk inti tersedia di seluruh cabang. Untuk memastikan ketersediaan, hubungi WhatsApp cabang sebelum berkunjung.",
  },
  {
    q: "Bisakah konsultasi tanpa membeli produk?",
    a: "Bisa. Tim kami senang membantu Anda memahami kebutuhan kulit terlebih dahulu. Biaya layanan tertentu mengikuti ketentuan masing-masing cabang.",
  },
  {
    q: "Bagaimana jika kota saya belum ada cabang?",
    a: "Anda tetap bisa memesan dan berkonsultasi melalui WhatsApp. Pesanan dikirim ke seluruh Indonesia.",
  },
];

export default function StorePage() {
  return (
    <>
      {/* Branch List */}
      <section className="section">
        <BranchList branches={branches} />
      </section>

      {/* Layanan di Setiap Cabang */}
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Toko & Klinik dalam Satu Tempat"
            description="Tersedia di seluruh cabang Lusuka Skin. Cek layanan di cabang terdekat."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {clinicServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 50}>
                <div className="card p-6 rounded-xl h-full hover:-translate-y-1"
                  style={{ transition: "all 0.2s ease-in-out" }}>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm muted">{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-sm muted">
            Layanan dapat berbeda di tiap cabang. Hubungi WhatsApp cabang untuk jadwal dan
            reservasi.
          </p>
        </div>
      </section>

      {/* Banner CTA */}
      <CtaSection
        title="Belum Ada Cabang di Kotamu?"
        description="Pesan langsung via WhatsApp dan kami kirim ke seluruh Indonesia."
        whatsappText="Chat via WhatsApp"
        whatsappMessage="Halo Lusuka Skin, saya ingin tahu lebih banyak tentang brand dan produk Anda."
      />

      {/* FAQ */}
      <FaqSection
        title="Pertanyaan yang Sering Diajukan"
        align="center"
        faqs={storeFaqs} />
    </>
  );
}