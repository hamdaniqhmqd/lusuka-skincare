import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/Sections/PageHeader";
import SectionHeading from "@/components/Sections/SectionHeading";
import ProductGrid, { type Product } from "@/components/Data/ProductGrid";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";

const u = (photoId: string, w = 800) =>
  `https://images.unsplash.com/${photoId}?q=80&w=${w}&auto=format&fit=crop`;

export const metadata: Metadata = {
  title: "Katalog Produk Skincare",
  description:
    "Cleanser, toner, serum, moisturizer, dan sunscreen untuk berbagai jenis kulit. Pesan atau tanya langsung via WhatsApp.",
  alternates: { canonical: "/product" },
};

const categories = ["Semua", "Cleanser", "Toner", "Serum", "Moisturizer", "Sunscreen"];

const products: Product[] = [
  {
    name: "Gentle Foam Cleanser",
    category: "Cleanser",
    size: "100 ml",
    price: "Rp 89.000",
    tagline: "Busa lembut yang membersihkan tanpa membuat kulit terasa kering.",
    skinType: ["Semua jenis kulit"],
    texture: "Gel yang berubah menjadi busa lembut",
    benefits: [
      "Membersihkan kotoran dan minyak berlebih",
      "Menjaga kelembapan alami kulit",
      "Lembut untuk pemakaian pagi dan malam",
    ],
    ingredients: [
      { name: "Centella Asiatica", note: "Membantu menenangkan kulit" },
      { name: "Glycerin", note: "Menjaga kelembapan" },
      { name: "Panthenol (Vitamin B5)", note: "Mendukung kenyamanan kulit" },
    ],
    howToUse: [
      "Basahi wajah dengan air.",
      "Ambil 1–2 pump, busakan di telapak tangan.",
      "Pijat lembut 30–60 detik, hindari area mata.",
      "Bilas hingga bersih.",
    ],
    image: u("photo-1556228720-195a672e8a03", 1200),
  },
  {
    name: "Balancing Toner",
    category: "Toner",
    size: "120 ml",
    price: "Rp 99.000",
    tagline: "Menyegarkan dan menyeimbangkan kulit setelah cuci muka.",
    skinType: ["Kombinasi", "Berminyak"],
    texture: "Cair ringan seperti air",
    benefits: [
      "Membantu menyeimbangkan minyak berlebih",
      "Menyegarkan kulit",
      "Menyiapkan kulit untuk serum",
    ],
    ingredients: [
      { name: "Niacinamide", note: "Membantu tampilan pori dan minyak" },
      { name: "Green Tea Extract", note: "Antioksidan pelindung" },
      { name: "Betaine", note: "Membantu menjaga kelembapan" },
    ],
    howToUse: [
      "Tuang toner ke kapas atau telapak tangan.",
      "Tepuk lembut ke wajah dan leher.",
      "Tunggu meresap, lanjutkan dengan serum.",
    ],
    image: u("photo-1770717984643-2a1545902579", 1200),
  },
  {
    name: "Hydrating Barrier Serum",
    category: "Serum",
    size: "30 ml",
    price: "Rp 159.000",
    tagline: "Kelembapan intens sekaligus memperkuat skin barrier.",
    skinType: ["Kering", "Sensitif"],
    texture: "Gel bening ringan, cepat meresap, tidak lengket",
    benefits: [
      "Melembapkan dari dalam",
      "Membantu memperkuat skin barrier",
      "Menenangkan kulit yang mudah tidak nyaman",
    ],
    ingredients: [
      { name: "Hyaluronic Acid", note: "Menarik dan menahan kelembapan" },
      { name: "Ceramide", note: "Membantu menjaga skin barrier" },
      { name: "Panthenol (Vitamin B5)", note: "Menenangkan dan melembapkan" },
    ],
    howToUse: [
      "Gunakan setelah toner pada kulit yang masih lembap.",
      "Teteskan 2–3 tetes ke telapak tangan atau wajah.",
      "Tepuk perlahan hingga meresap.",
      "Lanjutkan dengan moisturizer. Pagi dan malam.",
    ],
    image: u("photo-1715027155125-810cb995203f", 1200),
  },
  {
    name: "Brightening Vitamin C Serum",
    category: "Serum",
    size: "30 ml",
    price: "Rp 179.000",
    tagline: "Membantu tampilan kulit tampak lebih cerah dan merata.",
    skinType: ["Normal", "Kombinasi", "Kusam"],
    texture: "Serum ringan berwarna kekuningan lembut",
    benefits: [
      "Membantu mencerahkan tampilan kulit",
      "Antioksidan pelindung harian",
      "Membantu meratakan warna kulit",
    ],
    ingredients: [
      { name: "Vitamin C (turunan stabil)", note: "Antioksidan, membantu tampilan lebih cerah" },
      { name: "Niacinamide", note: "Membantu tampilan kulit lebih merata" },
      { name: "Vitamin E", note: "Antioksidan pendukung" },
    ],
    howToUse: [
      "Gunakan setelah toner, pagi atau malam.",
      "Ambil 3–4 tetes, ratakan ke seluruh wajah.",
      "Untuk pemakaian pertama, mulai 3 kali seminggu.",
      "Selalu lanjutkan sunscreen di pagi hari.",
    ],
    image: u("photo-1731599974315-91a82bb816a6", 1200),
  },
  {
    name: "Calming Ceramide Cream",
    category: "Moisturizer",
    size: "50 g",
    price: "Rp 139.000",
    tagline: "Krim pelembap yang mengunci kelembapan dan menenangkan kulit.",
    skinType: ["Kering", "Sensitif", "Normal"],
    texture: "Krim lembut, mudah diratakan, hasil akhir lembap",
    benefits: [
      "Membantu mengunci kelembapan",
      "Menenangkan kulit",
      "Mendukung skin barrier yang sehat",
    ],
    ingredients: [
      { name: "Ceramide", note: "Membantu memperkuat skin barrier" },
      { name: "Panthenol (Vitamin B5)", note: "Menenangkan kulit" },
      { name: "Shea Butter", note: "Memberi kelembapan dan rasa nyaman" },
    ],
    howToUse: [
      "Gunakan setelah serum.",
      "Ambil sebesar biji jagung, ratakan ke wajah dan leher.",
      "Pijat lembut hingga meresap. Pagi dan malam.",
    ],
    image: u("photo-1585832622886-272fb3a927e0", 1200),
  },
  {
    name: "Daily Shield Sunscreen SPF 50",
    category: "Sunscreen",
    size: "50 ml",
    price: "Rp 129.000",
    tagline: "Perlindungan harian yang ringan di kulit.",
    skinType: ["Semua jenis kulit"],
    texture: "Lotion cair ringan, cepat meresap",
    benefits: [
      "Melindungi dari sinar UVA dan UVB",
      "Ringan dan tidak lengket",
      "Nyaman dipakai di bawah makeup",
    ],
    ingredients: [
      { name: "UV Filter", note: "Melindungi dari sinar matahari" },
      { name: "Aloe Vera", note: "Membantu menenangkan kulit" },
      { name: "Vitamin E", note: "Antioksidan pendukung" },
    ],
    howToUse: [
      "Langkah terakhir rutinitas pagi.",
      "Oleskan sebanyak dua ruas jari ke wajah dan leher.",
      "Ulangi setiap 2–3 jam bila beraktivitas di luar ruangan.",
    ],
    image: u("photo-1623676714504-edd78728155e", 1200),
  },
];

const guide = [
  {
    skin: "Kulit Kering",
    steps: "Gentle Foam Cleanser → Hydrating Barrier Serum → Calming Ceramide Cream → Daily Shield Sunscreen",
    tip: "Pilih serum pelembap dan krim yang menguatkan skin barrier.",
  },
  {
    skin: "Kulit Berminyak / Kombinasi",
    steps: "Gentle Foam Cleanser → Balancing Toner → Hydrating Barrier Serum → Daily Shield Sunscreen",
    tip: "Moisturizer ringan tetap diperlukan agar kulit tidak kekurangan kelembapan.",
  },
  {
    skin: "Kulit Sensitif",
    steps: "Gentle Foam Cleanser → Hydrating Barrier Serum → Calming Ceramide Cream → Daily Shield Sunscreen",
    tip: "Lakukan uji tempel sebelum memakai produk baru dan tambahkan satu produk pada satu waktu.",
  },
  {
    skin: "Kulit Kusam",
    steps: "Gentle Foam Cleanser → Balancing Toner → Brightening Vitamin C Serum → Calming Ceramide Cream → Daily Shield Sunscreen",
    tip: "Pakai Vitamin C di pagi hari dan jangan lupa sunscreen.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Product Grid Section */}
      <section className="section">
        <ProductGrid products={products} categories={categories} />
      </section>

      {/* Panduan Memilih Section */}
      <section id="panduan" className="section section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Panduan"
            title="Pilih Sesuai Jenis Kulitmu"
            description="Rekomendasi urutan pemakaian dari produk Lusuka Skin."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 mb-8">
            {guide.map((g, i) => (
              <Reveal key={g.skin} delay={i * 50}>
                <div className="card p-6 rounded-xl h-full hover:-translate-y-1"
                  style={{ transition: "all 0.2s ease-in-out" }}>
                  <h3 className="font-semibold text-lg mb-3">{g.skin}</h3>
                  <p className="text-sm muted mb-4 font-semibold">{g.steps}</p>
                  <div
                    className="border-t pt-4"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <p className="text-sm">
                      <strong className="text-lusuka-accent">💡 Tip:</strong> {g.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm muted mb-4">
              Rekomendasi ini bersifat umum. Untuk kondisi kulit tertentu, konsultasikan dengan
              dokter atau tim kami.
            </p>
            <WhatsAppButton
              label="Konsultasi Gratis"
              message="Halo Lusuka Skin, saya ingin konsultasi memilih produk sesuai jenis kulit saya."
              className="text-white!"
            />
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="section">
        <div className="container-custom">
          <div
            className="rounded-lg p-16 text-center text-white"
            style={{
              background: `linear-gradient(135deg, var(--color-accent) 0%, #c08457 100%)`,
            }}
          >
            <Reveal>
              <>
                <h2 className="mb-4 text-white">Bingung Memilih Produk?</h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Ceritakan kondisi kulitmu, tim kami akan membantu merekomendasikan rutinitas yang
                  sesuai.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <WhatsAppButton
                    label="Ngobrol dengan Kami"
                    message="Halo Lusuka Skin, saya ingin konsultasi memilih produk skincare sesuai jenis kulit saya."
                    variant="white"
                    className="border-white hover:bg-white/10"
                  />
                  <Link href="/product" className="btn hover:-translate-y-0.5"
                    style={{ background: "white", color: "#171717", transition: "all 0.3s ease" }}>
                    Lihat Produk
                  </Link>
                </div>
              </>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}