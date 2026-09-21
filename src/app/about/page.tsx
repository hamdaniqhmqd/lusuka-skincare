// src/app/about/page.tsx

import type { Metadata } from "next";
import { Leaf, Eye, Heart, Globe, BookOpen, HandHeart } from "lucide-react";
import SectionHeading from "@/components/Sections/SectionHeading";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/Sections/CtaSection";

const u = (photoId: string, w = 800) =>
  `https://images.unsplash.com/${photoId}?q=80&w=${w}&auto=format&fit=crop`;

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali kisah, visi, dan komitmen bahan Lusuka Skin, brand skincare vegan dan cruelty free.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tentang Kami — Lusuka Skin",
    description:
      "Kenali kisah, visi, dan komitmen bahan Lusuka Skin, brand skincare vegan dan cruelty free.",
    url: "https://lusuka-skincare.vercel.app/about",
    images: [
      {
        url: "/images/banner_seo.webp",
        width: 1200,
        height: 630,
        alt: "Tentang Lusuka Skin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami — Lusuka Skin",
    description:
      "Kenali kisah, visi, dan komitmen bahan Lusuka Skin, brand skincare vegan dan cruelty free.",
    images: ["/images/banner_seo.webp"],
  },
};

const story = [
  `Lusuka Skin lahir dari pengalaman sederhana: mencari skincare yang benar-benar lembut, jujur soal kandungannya, dan mudah dipakai setiap hari. Sejak berdiri pada 2019, kami memulai dari satu produk dan satu pertanyaan, "Apa yang sebenarnya dibutuhkan kulit?"`,
  "Jawabannya kami temukan bersama tim formulator dan dokter kulit: bahan yang tepat dalam takaran yang tepat, tanpa embel-embel yang tidak perlu. Setiap formula kami kembangkan dengan bahan bersih, diuji dermatologis, dan dibuat tanpa pengujian pada hewan.",
  "Kini Lusuka Skin hadir melalui toko dan klinik di berbagai kota di Indonesia, serta melayani konsultasi dan pemesanan lewat WhatsApp. Tujuan kami tetap sama: membantu setiap orang merawat kulit dengan cara yang sederhana, aman, dan menyenangkan.",
];

const vision =
  "Menjadi brand skincare pilihan yang membantu setiap orang merawat kulit dengan cara yang sederhana, aman, dan jujur.";

const mission = [
  "Menggunakan bahan yang aman dan transparan pada setiap formula.",
  "Mengembangkan produk yang lembut dan telah melalui uji dermatologis.",
  "Memberi edukasi perawatan kulit yang mudah dipahami semua orang.",
  "Menghadirkan layanan yang ramah, baik di toko, klinik, maupun online.",
];

const values = [
  {
    icon: Leaf,
    title: "Bahan Bersih",
    text: "Kami memilih bahan dengan cermat dan menghindari yang tidak perlu.",
  },
  {
    icon: Eye,
    title: "Transparansi",
    text: "Daftar kandungan dan manfaatnya kami jelaskan dengan bahasa yang mudah dimengerti.",
  },
  {
    icon: Heart,
    title: "Lembut untuk Kulit",
    text: "Formula dirancang nyaman, termasuk untuk kulit yang mudah sensitif.",
  },
  {
    icon: Globe,
    title: "Peduli Hewan & Bumi",
    text: "Cruelty free, vegan, dan terus berupaya mengurangi limbah kemasan.",
  },
  {
    icon: BookOpen,
    title: "Edukasi",
    text: "Kami percaya pelanggan yang paham kulitnya akan memilih perawatan yang tepat.",
  },
  {
    icon: HandHeart,
    title: "Layanan Sepenuh Hati",
    text: "Tim kami siap membantu memilih produk dan menjawab pertanyaan Anda.",
  },
];

const team = [
  {
    name: "Sarah Wijaya",
    role: "Founder & CEO",
    bio: "Memulai Lusuka Skin dengan visi skincare yang jujur dan lembut.",
    image: u("photo-1731335213287-d902c76d0ec1", 1200),
  },
  {
    name: "Dr. Amelia Chen",
    role: "Kepala Riset & Formulasi",
    bio: "Merancang formula dengan bahan aktif yang efektif dan aman.",
    image: u("photo-1650784854486-0312affcebb8", 1200),
  },
  {
    name: "dr. Bintang Setiawan",
    role: "Kepala Klinik",
    bio: "Memimpin layanan konsultasi dan perawatan kulit di klinik Lusuka Skin.",
    image: u("photo-1622902046580-2b47f47f5471", 1200),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Cerita Brand */}
      <section className="section">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-[55fr_45fr] pt-12 sm:pt-10">
          <Reveal>
            <div>
              <span className="eyebrow mb-4 block">Cerita Kami</span>
              <h2 className="mb-6 font-bold!">Skincare yang Lahir dari Kejujuran</h2>
              <div className="space-y-4 mb-8">
                {story.map((p, i) => (
                  <p key={i} className="text-lg muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6">
              <Photo
                src={u("photo-1598440947619-2c35fc9aa908", 1000)}
                alt="Bahan-bahan alami untuk skincare"
                ratio="4 / 5"
                className="rounded-lg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="section section-alt">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card rounded-xl h-full p-8">
              <span className="eyebrow mb-4 block">Visi</span>
              <p
                className="text-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {vision}
              </p>
            </div>
          </Reveal>

          <Reveal delay={50}>
            <div className="card rounded-xl h-full p-8">
              <span className="eyebrow mb-4 block">Misi</span>
              <ul className="space-y-3">
                {mission.map((m, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 text-white text-sm font-bold"
                      style={{ background: "var(--color-accent)" }}
                    >
                      {i + 1}
                    </span>
                    <span className="muted">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nilai Brand */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading title="Nilai yang Kami Pegang" align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 50}>
                  <div className="card hover-lift p-6 rounded-xl h-full">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
                      style={{ background: "var(--color-rose)" }}
                    >
                      <Icon size={24} style={{ color: "var(--color-icon)" }} />
                    </div>
                    <h3 className="font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm muted">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Komitmen Bahan */}
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading title="Komitmen Kami pada Bahan" align="center" />
          <div className="grid gap-8 lg:grid-cols-2 max-w-3xl mx-auto mb-8">
            <Reveal>
              <div className="card p-8 rounded-xl hover:-translate-y-2 h-full"
                style={{
                  transition: "all 0.3s ease",
                }}>
                <h3 className="font-semibold mb-4 text-lg">Yang Kami Gunakan</h3>
                <ul className="space-y-3">
                  {[
                    "Bahan aktif dengan fungsi yang jelas",
                    "Ekstrak tumbuhan pilihan",
                    "Formula lembut dan stabil",
                    "Kemasan yang aman untuk produk",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-lusuka-accent text-lg">✓</span>
                      <span className="text-sm muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={50}>
              <div className="card p-8 rounded-xl hover:-translate-y-2 h-full"
                style={{
                  transition: "all 0.3s ease",
                }}>
                <h3 className="font-semibold mb-4 text-lg">Yang Kami Hindari</h3>
                <ul className="space-y-3">
                  {[
                    "Paraben",
                    "Pewangi buatan berlebih",
                    "Alkohol yang mengeringkan kulit",
                    "Bahan turunan hewani",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-lusuka-accent text-lg">✕</span>
                      <span className="text-sm muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["Terdaftar BPOM", "Teruji Dermatologis", "Vegan", "Cruelty Free"].map((badge) => (
              <span key={badge} className="chip hover:-translate-y-0.5" style={{ cursor: "default", transition: "all 0.3s ease", }}>
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tim */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Orang-orang di Balik Lusuka Skin"
            align="center"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 50}>
                <div className="card overflow-hidden h-full rounded-xl
                  hover:-translate-y-2"
                  style={{ transition: "all 0.3s ease" }}>
                  <Photo src={member.image} alt={`${member.name}, ${member.role}`} ratio="1" />
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm eyebrow mb-3">{member.role}</p>
                    <p className="text-sm muted">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <CtaSection
        title="Ingin Tahu Lebih Banyak?"
        description="Tim kami senang membantu Anda memilih perawatan yang tepat."
        whatsappText="Chat via WhatsApp"
        whatsappMessage="Halo Lusuka Skin, saya ingin tahu lebih banyak tentang brand dan produk Anda."
      />
    </>
  );
}