import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Rabbit, ShieldCheck, FlaskConical, Check } from "lucide-react";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/Sections/SectionHeading";
import JsonLd from "@/components/Data/JsonLd";
import WhatsAppButton, { waLink } from "@/components/WhatsAppButton";
import RoutineTimeline from "@/components/RoutineTimeline";

const u = (photoId: string, w = 800) =>
  `https://images.unsplash.com/${photoId}?q=80&w=${w}&auto=format&fit=crop`;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lusuka Skin",
  url: "https://www.contoh-domain.com",
  logo: "https://www.contoh-domain.com/logo.png",
  email: "halo@contoh-domain.com",
  telephone: "+6281234567890",
  sameAs: [
    "https://instagram.com/lusukaskin.id",
    "https://tiktok.com/@lusukaskin.id",
  ],
};

const highlights = [
  { icon: Leaf, title: "Vegan", text: "Formula tanpa bahan turunan hewani." },
  {
    icon: Rabbit,
    title: "Cruelty Free",
    text: "Tidak diuji pada hewan di seluruh proses pengembangan.",
  },
  {
    icon: ShieldCheck,
    title: "Teruji Dermatologis",
    text: "Diuji untuk keamanan pemakaian pada kulit.",
  },
  {
    icon: FlaskConical,
    title: "Bahan Bersih",
    text: "Tanpa paraben dan tanpa pewangi buatan berlebih.",
  },
];

const featured = [
  {
    name: "Hydrating Barrier Serum",
    category: "Serum",
    tagline: "Kelembapan intens sekaligus memperkuat skin barrier.",
    skinType: "Kering, Sensitif",
    image: u("photo-1642162225900-8d4e658252c9"),
  },
  {
    name: "Brightening Vitamin C Serum",
    category: "Serum",
    tagline: "Membantu tampilan kulit tampak lebih cerah dan merata.",
    skinType: "Normal, Kusam",
    image: u("photo-1731599974315-91a82bb816a6"),
  },
  {
    name: "Calming Ceramide Cream",
    category: "Moisturizer",
    tagline: "Mengunci kelembapan dan menenangkan kulit.",
    skinType: "Kering, Sensitif",
    image: u("photo-1625848257931-4a421f5818ab"),
  },
  {
    name: "Daily Shield Sunscreen SPF 50",
    category: "Sunscreen",
    tagline: "Perlindungan harian yang ringan di kulit.",
    skinType: "Semua jenis kulit",
    image: u("photo-1623676714504-edd78728155e"),
  },
];

const concerns = [
  {
    title: "Kulit Berminyak",
    text: "Membantu mengontrol minyak berlebih.",
  }, {
    title: "Kulit Berjerawat",
    text: "Membantu merawat kulit yang berjerawat.",
  }, {
    title: "Kulit Kering",
    text: "Membantu menjaga kelembapan agar kulit terasa lembut dan nyaman.",
  }, {
    title: "Kulit Sensitif",
    text: "Formula lembut untuk membantu menenangkan dan merawat skin barrier.",
  }, {
    title: "Kulit Kusam",
    text: "Membantu membuat kulit tampak lebih cerah, segar, dan bercahaya.",
  }, {
    title: "Perlindungan UV",
    text: "Perawatan pagi untuk membantu melindungi kulit dari paparan sinar UV.",
  },
];

const ingredients = [
  {
    name: "Niacinamide",
    benefit: "Membantu menjaga keseimbangan minyak dan menampilkan kulit yang lebih merata.",
  },
  {
    name: "Centella Asiatica",
    benefit: "Ekstrak tumbuhan yang dikenal menenangkan kulit yang mudah tidak nyaman.",
  },
  {
    name: "Hyaluronic Acid",
    benefit: "Menarik dan menahan kelembapan agar kulit terasa kenyal.",
  },
  {
    name: "Ceramide",
    benefit: "Lipid alami kulit yang membantu menjaga skin barrier tetap kuat.",
  },
];

const routine = [
  {
    step: 1,
    name: "Cleanser",
    text: "Bersihkan sisa kotoran dan minyak tanpa membuat kulit kering.",
    when: "Pagi & Malam",
  },
  {
    step: 2,
    name: "Toner",
    text: "Segarkan dan siapkan kulit agar lebih siap menyerap perawatan.",
    when: "Pagi & Malam",
  },
  {
    step: 3,
    name: "Serum",
    text: "Perawatan terarah sesuai kebutuhan kulit.",
    when: "Pagi & Malam",
  },
  {
    step: 4,
    name: "Moisturizer",
    text: "Kunci kelembapan dan jaga skin barrier.",
    when: "Pagi & Malam",
  },
  {
    step: 5,
    name: "Sunscreen",
    text: "Langkah terakhir pagi hari untuk melindungi dari sinar UV.",
    when: "Pagi",
  },
];

const cities = ["Jakarta Selatan", "Bandung", "Semarang", "Surabaya", "Medan", "Denpasar", "Makassar"];

const testimonials = [
  {
    quote: "Kulitku terasa lebih lembap setelah dua minggu pemakaian.",
    name: "Rina, 24 th",
    meta: "Kulit kering · Hydrating Barrier Serum",
  },
  {
    quote: "Tekstur serumnya ringan dan tidak lengket, enak dipakai sebelum makeup.",
    name: "Dewi, 29 th",
    meta: "Kulit kombinasi · Brightening Vitamin C Serum",
  },
  {
    quote: "Cocok untuk kulit sensitifku, tidak perih sama sekali.",
    name: "Sari, 31 th",
    meta: "Kulit sensitif · Calming Ceramide Cream",
  },
];

const faqs = [
  {
    q: "Apakah produk aman untuk kulit sensitif?",
    a: "Formula kami dirancang lembut, bebas paraben, dan telah melalui uji dermatologis. Karena setiap kulit berbeda, kami menyarankan uji tempel (patch test) di area kecil sebelum pemakaian pertama.",
  },
  {
    q: "Apakah produk cruelty free dan vegan?",
    a: "Ya. Produk Lusuka Skin tidak diuji pada hewan dan tidak menggunakan bahan turunan hewani.",
  },
  {
    q: "Berapa lama hasil mulai terlihat?",
    a: "Kelembapan biasanya terasa dalam beberapa hari. Perubahan tampilan kulit umumnya membutuhkan pemakaian rutin sekitar 4 minggu. Hasil tiap orang berbeda.",
  },
  {
    q: "Apakah bisa dipakai setiap hari?",
    a: "Bisa, pagi dan malam sesuai petunjuk di kemasan. Sunscreen dipakai pada pagi hari dan diulang bila beraktivitas di luar ruangan.",
  },
  {
    q: "Bagaimana cara memesan?",
    a: 'Klik tombol "Pesan via WhatsApp" pada produk pilihan. Pesan otomatis berisi nama produk akan terbuka di WhatsApp, lalu tim kami membantu pemesanan dan pengiriman. Anda juga bisa datang ke toko atau klinik terdekat.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={orgSchema} />

      {/* 1. Hero Section */}
      <section
        className="section"
        style={{
          background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-rose) 100%)`,
        }}
      >
        <div className="container-custom grid items-center gap-12 lg:grid-cols-[50fr_50fr] pt-12">
          <Reveal>
            <span className="chip mb-4" style={{ cursor: "default" }}>
              Clean Beauty · Vegan · Cruelty Free
            </span>
            <h1 className="mb-6 font-bold!">
              Perawatan Lembut untuk Kulit Sehat dan Terawat
            </h1>
            <p className="muted max-w-xl text-lg mb-6">
              Lusuka Skin menghadirkan skincare dengan bahan yang dipilih secara cermat dan formula lembut untuk membantu menjaga kelembapan, kesehatan, dan kenyamanan kulit setiap hari.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/product" className="btn btn-primary hover:-translate-y-0.5">
                Lihat Produk
              </Link>
              <WhatsAppButton
                label="Chat via WhatsApp"
                message="Halo Lusuka Skin, saya ingin konsultasi memilih produk skincare."
              />
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
              <div>
                <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  6
                </p>
                <p className="text-xs eyebrow mt-1">Produk Inti</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  7
                </p>
                <p className="text-xs eyebrow mt-1">Toko & Klinik</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  100%
                </p>
                <p className="text-xs eyebrow mt-1">Vegan</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <figure className="w-full flex justify-center items-center">
              <Photo
                src={u("photo-1580870069867-74c57ee1bb07", 2000)}
                alt="Rangkaian produk skincare di atas latar pastel"
                ratio="4 / 5"
                priority
                className="rounded-md w-full"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 2. Keunggulan Brand */}
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading title="Mengapa Lusuka Skin?" align="center" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.title} delay={i * 50}>
                  <div className="card hover-lift p-6 text-center rounded-xl h-full">
                    <div
                      className="flex justify-center"
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
                        <Icon size={28} style={{ color: "var(--color-accent)" }} />
                      </div>
                    </div>
                    <h3 className="text-lg mb-2 mt-6">{h.title}</h3>
                    <p className="text-sm muted">{h.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Produk Unggulan */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Produk Unggulan"
            title="Favorit untuk Rutinitas Harianmu"
            description="Pilihan yang paling sering dicari pelanggan kami."
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mb-8">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <div className="card hover-lift overflow-hidden rounded-xl h-full flex flex-col">
                  <Photo src={p.image} ratio="3/4" alt={`Produk ${p.name}`} />
                  <div className="flex-1 p-6 flex flex-col ">
                    <div className="flex-1">
                      <span className="eyebrow text-xs mb-2 block">{p.category}</span>
                      <h3 className="text-lg mb-2">{p.name}</h3>
                      <p className="text-sm muted mb-3">{p.tagline}</p>
                      <span className="chip text-xs mb-4" style={{ cursor: "default" }}>
                        {p.skinType}
                      </span>
                    </div>
                    <div className="shrink-0 flex flex-col gap-2">
                      <WhatsAppButton
                        label="Bertanya via WhatsApp"
                        message={`Halo Lusuka Skin, saya ingin bertanya tentang ${p.name}.`}
                        className="w-full justify-center text-sm text-white!"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link href="/product" className="btn btn-outline">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Kategori Masalah Kulit */}
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading
            title="Pilih Perawatan Sesuai Kebutuhan Kulitmu"
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((c, i) => (
              <Reveal key={c.title} delay={i * 50} className="w-full h-full">
                <div
                  aria-label={c.title}
                  title={c.title}
                  className="bg-lusuka-surface border border-lusuka-border 
                    shadow[0_2px_10px_rgba(0,0,0,0.4)] 
                    hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 text-center 
                    transition-all ease-in-out duration-300 hover:-translate-y-1 
                    rounded-xl w-full h-full"
                >
                  <h3 className="font-semibold mb-2 text-sm">{c.title}</h3>
                  <p className="text-xs muted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bahan Aktif */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Bahan Aktif yang Kami Percaya"
            description="Transparan soal apa yang ada di dalam botol."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ingredients.map((ing, i) => (
              <Reveal key={ing.name} delay={i * 50} className="h-full">
                <div
                  className="card hover-lift p-6 h-full rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, var(--color-rose) 0%, var(--color-surface) 100%)`,
                  }}
                >
                  <h3 className="font-semibold mb-2">{ing.name}</h3>
                  <p className="text-sm muted">{ing.benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Rutinitas Skincare */}
      <section className="section section-alt">
        <div className="container-custom">
          <SectionHeading
            title="Rutinitas 5 Langkah yang Sederhana"
            align="center"
          />
          <RoutineTimeline steps={routine} />
          <div className="text-center mt-8">
            <Link href={waLink(
              "Halo Lusuka Skin, saya ingin konsultasi memilih produk skincare."
            )}
              className="btn btn-primary">
              Konsultasikan Sekarang
            </Link>
          </div>
        </div>
      </section >

      {/* 7. Teaser Toko & Klinik */}
      <section className="section" >
        <div className="container-custom">
          <div
            className="rounded-xl overflow-hidden grid lg:grid-cols-2 gap-8 items-center"
            style={{ background: "var(--color-rose)", padding: "60px 48px" }}
          >
            <Reveal>
              <div>
                <span className="eyebrow mb-4 block">Toko & Klinik</span>
                <h2 className="mb-4">Kunjungi Kami di 7 Kota</h2>
                <p className="text-lg mb-6 muted">
                  Konsultasikan kulitmu langsung dan coba produk kami di toko atau klinik terdekat.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cities.map((city) => (
                    <span key={city} className="chip text-sm hover:-translate-y-0.5" style={{ cursor: "default" }}>
                      {city}
                    </span>
                  ))}
                </div>
                <Link href="/store" className="btn btn-primary hover:-translate-y-1">
                  Temukan Cabang Terdekat
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Photo
                src={u("photo-1780242020392-7e4d3d9c99a4", 1200)}
                alt="Interior toko Lusuka Skin"
                ratio="4 / 3"
                className="rounded-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Testimoni */}
      <section className="section section-alt" >
        <div className="container-custom">
          <SectionHeading title="Apa Kata Pelanggan Kami" align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 50}>
                <div className="glass p-6 rounded-xl h-full hover:-translate-y-1 ease-in-out transition-all duration-300">
                  <p className="italic mb-4 text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    "{t.quote}"
                  </p>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs muted">{t.meta}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      < section className="section" >
        <div className="container-custom">
          <SectionHeading
            title="Pertanyaan yang Sering Diajukan"
            align="center"
          />
          <div className="max-w-5xl mx-auto">
            <div className="space-y-3">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <details className="card rounded-xl p-5 cursor-pointer" open={false}>
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
          </div>
        </div>
      </ section>

      {/* 10. Banner CTA */}
      < section className="section" style={{ paddingBlock: 80 }
      }>
        <div className="container-custom">
          <div
            className="rounded-lg p-16 text-center text-white"
            style={{
              background: `linear-gradient(135deg, var(--color-accent) 0%, #c08457 100%)`,
            }}
          >
            <Reveal>
              <>
                <h2 className="mb-4 text-white">Mulai Perjalanan Kulit Sehatmu</h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Ngobrol dengan tim kami dan dapatkan rekomendasi rutinitas yang sesuai.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <WhatsAppButton
                    label="Chat via WhatsApp"
                    message="Halo Lusuka Skin, saya ingin konsultasi memilih produk skincare."
                    variant="white"
                    className="hover:-translate-y-0.5"
                  />
                  <Link href="/product" className="btn hover:-translate-y-0.5"
                    style={{ background: "white", color: "#171717" }}>
                    Lihat Produk
                  </Link>
                </div>
              </>
            </Reveal>
          </div>
        </div>
      </section >
    </>
  );
}