// src/app/contact/page.tsx

import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/Sections/SectionHeading";
import ContactForm from "@/components/Sections/ContactForm";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import FaqSection from "@/components/Sections/FaqSection";
import CtaSection from "@/components/Sections/CtaSection";
import { IconWa } from "@/utils/icons";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Lusuka Skin via WhatsApp, email, atau kunjungi toko dan klinik terdekat. Kami siap membantu.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Hubungi Kami — Lusuka Skin",
    description:
      "Hubungi Lusuka Skin via WhatsApp, email, atau kunjungi toko dan klinik terdekat. Kami siap membantu.",
    url: "https://lusuka-skincare.vercel.app/contact",
    images: [
      {
        url: "/images/banner_seo.png",
        width: 1200,
        height: 630,
        alt: "Hubungi Lusuka Skin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Kami — Lusuka Skin",
    description: "Hubungi Lusuka Skin via WhatsApp, email, atau kunjungi toko dan klinik terdekat.",
    images: ["/images/banner_seo.png"],
  },
};

const contacts = [
  {
    icon: <IconWa />,
    title: "WhatsApp",
    value: "+62 812-3456-7890",
    note: "Respons tercepat untuk pemesanan dan konsultasi",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: <Mail size={28} />,
    title: "Email",
    value: "halo@contoh-domain.com",
    note: "Untuk kerja sama dan pertanyaan umum",
    href: "mailto:halo@contoh-domain.com",
  },
  {
    icon: <MapPin size={28} />,
    title: "Kantor Pusat",
    value: "Jl. Contoh Raya No. 12, Kelurahan Contoh, Kecamatan Contoh, Kota Contoh, 12345",
    note: "Kunjungan dengan janji temu",
  },
  {
    icon: <Clock size={28} />,
    title: "Jam Operasional",
    value: "Senin–Jumat 09.00–17.00 WIB",
    note: "Sabtu 09.00–14.00 WIB · Minggu tutup",
  },
];

const socials = [
  {
    name: "Instagram",
    handle: "@lusukaskin.id",
    href: "https://instagram.com/lusukaskin.id",
  },
  {
    name: "TikTok",
    handle: "@lusukaskin.id",
    href: "https://tiktok.com/@lusukaskin.id",
  },
];

const topics = [
  "Pertanyaan produk",
  "Pemesanan",
  "Konsultasi kulit",
  "Kerja sama / reseller",
  "Lainnya",
];

const contactFaqs = [
  {
    q: "Berapa lama pesanan diproses?",
    a: "Pesanan yang masuk sebelum pukul 15.00 WIB pada hari kerja umumnya diproses di hari yang sama. Lama pengiriman bergantung pada kota tujuan dan ekspedisi.",
  },
  {
    q: "Apakah bisa dikirim ke luar kota?",
    a: "Bisa. Kami melayani pengiriman ke seluruh Indonesia melalui ekspedisi.",
  },
  {
    q: "Bagaimana cara pembayaran?",
    a: "Detail pembayaran (transfer bank atau e-wallet) akan disampaikan tim kami melalui WhatsApp setelah pesanan dikonfirmasi.",
  },
  {
    q: "Apakah bisa konsultasi kulit lewat WhatsApp?",
    a: "Bisa. Ceritakan kondisi kulit Anda dan tim kami akan membantu merekomendasikan produk. Untuk analisis kulit langsung, kunjungi klinik terdekat.",
  },
  {
    q: "Bagaimana bila ingin menjadi reseller atau bekerja sama?",
    a: "Silakan kirim email ke halo@contoh-domain.com dengan menyertakan profil singkat dan rencana kerja sama Anda.",
  },
  {
    q: "Bagaimana jika produk yang diterima bermasalah?",
    a: "Hubungi kami melalui WhatsApp maksimal 7 hari setelah barang diterima dengan menyertakan foto/video, kami bantu selesaikan.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Kartu Kontak */}
      <section className="section">
        <div className="container-custom pt-10">
          <SectionHeading title="Cara Menghubungi Kami" align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact, i) => {
              return (
                <Reveal key={contact.title} delay={i * 50}>
                  <div
                    className="card hover-lift h-full rounded-xl p-6 text-center transition-transform"
                  >
                    <div
                      className="flex justify-center mb-4 mx-auto mt-0 h-[56px] w-[56px] rounded-xl"
                    >
                      <div
                        className="flex items-center justify-center rounded-full h-[56px] w-[56px] bg-lusuka-rose"
                      >
                        <div style={{ color: "var(--color-icon)" }}>
                          {contact.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-1">{contact.title}</h3>
                    <p className="text-sm font-semibold mb-2">{contact.value}</p>
                    <p className="text-xs muted">{contact.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulir dan Peta */}
      <section className="section section-alt">
        <div className="container-custom grid gap-10 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kirim Pesan Langsung</h3>
              <ContactForm topics={topics} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Lokasi Kami</h3>
              <iframe
                title="Lokasi kantor pusat Lusuka Skin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.815214124055!2d106.79850632346898!3d-6.216043993701816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1b8b8b8b8b9%3A0x1234567890!2sJl.%20Contoh%20Raya%20No.%2012!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="420"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 rounded-xl mb-6"
              />
              <p className="text-sm muted mb-4">
                Temukan lebih banyak cabang toko dan klinik kami di berbagai kota.
              </p>
              <Link href="/store" className="text-lusuka-accent font-semibold hover:underline">
                Lihat semua cabang toko & klinik →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Media Sosial */}
      <section className="section">
        <div className="container-custom text-center">
          <SectionHeading title="Ikuti Kami" align="center" />
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {socials.map((social, i) => (
              <Reveal key={social.name} delay={i * 50}>
                <div
                  className="card hover-lift h-full rounded-xl p-8"
                >
                  <h3 className="font-semibold text-lg mb-2">{social.name}</h3>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm muted hover:text-lusuka-accent!">{social.handle}</a>
                  <p className="text-xs muted">Tips rutinitas dan promo terbaru</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Pertanyaan yang Sering Diajukan"
        align="center"
        faqs={contactFaqs}
        className="section-alt" />

      <CtaSection
        title="Ingin Tahu Lebih Banyak?"
        description="Kami siap membantu. Hubungi kami melalui WhatsApp atau Sosial Media."
        whatsappMessage="Halo Lusuka Skin, saya ingin tahu lebih banyak tentang brand dan produk Anda."
      />
    </>
  );
}