import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import ScrollTop from "@/components/ScrollTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

// ✅ Geist Mono dari Google Fonts dengan semua weights
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-mono",
  display: "swap", // Font swap untuk performa lebih baik
  preload: true, // Preload font untuk kecepatan
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.contoh-domain.com"),
  title: {
    default: "Lusuka Skin — Skincare Bersih untuk Kulit Sehat",
    template: "%s — Lusuka Skin",
  },
  description:
    "Produk skincare vegan dan cruelty free dengan bahan aktif teruji untuk kulit sehat dan bercahaya.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Lusuka Skin",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistMono.variable}`}
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
      <body className="h-full antialiased font-mono">
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