import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import ScrollTop from "@/components/ScrollTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lusuka-skincare.vercel.app"),
  title: {
    default: "Lusuka Skin — Skincare Bersih untuk Kulit Sehat",
    template: "%s — Lusuka Skin",
  },
  description:
    "Produk skincare vegan dan cruelty free dengan bahan aktif teruji untuk kulit sehat dan bercahaya. Tersedia di toko & klinik berbagai kota, pesan langsung via WhatsApp.",
  keywords: [
    "skincare vegan",
    "skincare cruelty free",
    "serum wajah",
    "toko skincare",
    "klinik kecantikan",
    "Lusuka Skin",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Lusuka Skin",
    url: "https://lusuka-skincare.vercel.app",
    title: "Lusuka Skin — Skincare Bersih untuk Kulit Sehat",
    description:
      "Produk skincare vegan dan cruelty free dengan bahan aktif teruji untuk kulit sehat dan bercahaya.",
    images: [
      {
        url: "/images/banner_seo.webp",
        width: 1200,
        height: 630,
        alt: "Lusuka Skin — Skincare Bersih untuk Kulit Sehat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lusuka Skin — Skincare Bersih untuk Kulit Sehat",
    description:
      "Produk skincare vegan dan cruelty free dengan bahan aktif teruji untuk kulit sehat dan bercahaya.",
    images: ["/images/banner_seo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || 
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${geistMono.variable} h-full antialiased font-mono scrollbar_y_custom`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton
          variant="floating"
          message="Halo Lusuka Skin, saya ingin bertanya."
        />
        <ScrollTop />
      </body>
    </html>
  );
}