import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/Sections/PageHeader";
import SectionHeading from "@/components/Sections/SectionHeading";
import ContactForm from "@/components/Sections/ContactForm";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Lusuka Skin via WhatsApp, email, atau kunjungi toko dan klinik terdekat. Kami siap membantu.",
  alternates: { canonical: "/contact" },
};

const contacts = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 812-3456-7890",
    note: "Respons tercepat untuk pemesanan dan konsultasi",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: Mail,
    title: "Email",
    value: "halo@contoh-domain.com",
    note: "Untuk kerja sama dan pertanyaan umum",
    href: "mailto:halo@contoh-domain.com",
  },
  {
    icon: MapPin,
    title: "Kantor Pusat",
    value: "Jl. Contoh Raya No. 12, Kelurahan Contoh, Kecamatan Contoh, Kota Contoh, 12345",
    note: "Kunjungan dengan janji temu",
  },
  {
    icon: Clock,
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
              const Icon = contact.icon;
              return (
                <Reveal key={contact.title} delay={i * 50}>
                  {contact.href ? (
                    <div
                      className="card hover-lift h-full rounded-xl p-6 text-center transition-transform"
                    >
                      <div
                        className="flex justify-center mb-4"
                        style={{ width: "56px", height: "56px", margin: "0 auto" }}
                      >
                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{
                            background: "var(--color-rose)",
                            width: "56px",
                            height: "56px",
                          }}
                        >
                          <Icon size={28} style={{ color: "var(--color-icon)" }} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-1">{contact.title}</h3>
                      <p className="text-sm font-semibold mb-2">{contact.value}</p>
                      <p className="text-xs muted">{contact.note}</p>
                    </div>
                  ) : (
                    <div className="card hover-lift h-full rounded-xl p-6 text-center">
                      <div
                        className="flex justify-center mb-4"
                        style={{ width: "56px", height: "56px", margin: "0 auto" }}
                      >
                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{
                            background: "var(--color-rose)",
                            width: "56px",
                            height: "56px",
                          }}
                        >
                          <Icon size={28} style={{ color: "var(--color-icon)" }} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-1">{contact.title}</h3>
                      <p className="text-sm font-semibold mb-2">{contact.value}</p>
                      <p className="text-xs muted">{contact.note}</p>
                    </div>
                  )}
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
                style={{
                  border: 0,
                  borderRadius: 24,
                  marginBottom: 24,
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
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
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading
            title="Pertanyaan yang Sering Diajukan"
            align="center"
          />
          <div className="max-w-5xl mx-auto space-y-3">
            {contactFaqs.map((f) => (
              <Reveal key={f.q}>
                <details className="card p-5 h-full rounded-xl cursor-pointer" open={false}>
                  <summary className="flex items-center justify-between font-semibold hover:text-lusuka-accent transition-colors">
                    {f.q}
                    <span aria-hidden className="select-none">
                      +
                    </span>
                  </summary>
                  <p className="muted mt-4 text-sm leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm muted mb-4">Belum menemukan jawabannya?</p>
            <WhatsAppButton
              label="Tanya Langsung"
              message="Halo Lusuka Skin, saya punya pertanyaan yang belum terjawab di FAQ."
              className="text-white!"
            />
          </div>
        </div>
      </section>
    </>
  );
}