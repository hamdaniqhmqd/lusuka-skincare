// src/components/Layouts/Footer.tsx

import Link from "next/link";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { IconIg, IconTiktok, IconWa } from "@/utils/icons";
import { waLink } from "../WhatsAppButton";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-alt pt-10">
            <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {/* Brand Column */}
                <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                        Lusuka Skin
                    </h3>
                    <p className="text-sm muted mb-4">
                        Skincare bersih dengan formula lembut untuk kulit sehat, lembap, dan bercahaya alami.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="https://instagram.com/lusukaskin.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-2 rounded-md hover:bg-lusuka-rose transition-all ease-in-out duration-300
                                hover:-translate-y-0.5"
                        >
                            <IconIg />
                        </a>
                        <a
                            href="https://tiktok.com/@lusukaskin.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="p-2 rounded-md hover:bg-lusuka-rose transition-all ease-in-out duration-300
                                hover:-translate-y-0.5"
                        >
                            <IconTiktok />
                        </a>
                        <a
                            href={waLink("Halo Lusuka Skin")}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="p-2 rounded-md hover:bg-lusuka-rose transition-all ease-in-out duration-300
                                hover:-translate-y-0.5">
                            <IconWa />
                        </a>
                    </div>
                </div>

                {/* Jelajahi Column */}
                <div>
                    <h4 className="font-semibold mb-4">Jelajahi</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link href="/product" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Produk
                            </Link>
                        </li>
                        <li>
                            <Link href="/store" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Toko & Klinik
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Produk Column */}
                <div>
                    <h4 className="font-semibold mb-4">Kategori Produk</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/product" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Cleanser
                            </Link>
                        </li>
                        <li>
                            <Link href="/product" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Toner
                            </Link>
                        </li>
                        <li>
                            <Link href="/product" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Serum
                            </Link>
                        </li>
                        <li>
                            <Link href="/product" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Moisturizer
                            </Link>
                        </li>
                        <li>
                            <Link href="/product" className="text-lusuka-text-muted hover:text-lusuka-accent transition-colors">
                                Sunscreen
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hubungi Column */}
                <div>
                    <h4 className="font-semibold mb-4">Hubungi Kami</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2 muted hover:text-lusuka-accent">
                            <IconWa size={16} className="shrink-0" />
                            <span>
                                <a href="https://wa.me/6281234567890" className="hover:text-lusuka-accent">
                                    +62 812-3456-7890
                                </a>
                            </span>
                        </li>
                        <li className="flex gap-2 muted">
                            <Mail size={16} className="shrink-0 hover:text-lusuka-accent" />
                            <a href="mailto:halo@contoh-domain.com" className="hover:text-lusuka-accent">
                                halo@contoh-domain.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2 muted">
                            <MapPin size={16} className="shrink-0 hover:text-lusuka-accent" />
                            <span className="hover:text-lusuka-accent">Jl. Contoh Raya No. 12, Kota Contoh, 12345</span>
                        </li>
                        <li className="flex gap-2 muted">
                            <Clock size={16} className="shrink-0 hover:text-lusuka-accent" />
                            <span className="hover:text-lusuka-accent">Senin–Jumat 09.00–17.00 WIB</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t" style={{ borderColor: "var(--color-border)" }} />

            {/* Copyright */}
            <div className="container-custom py-6 text-center text-sm muted">
                <p>© {currentYear} Lusuka Skin. Seluruh hak dilindungi.</p>
            </div>
        </footer>
    );
}