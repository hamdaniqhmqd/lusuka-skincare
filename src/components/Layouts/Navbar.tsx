// src/components/Layouts/Navbar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import WhatsAppButton from "../WhatsAppButton";

const links = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/product", label: "Produk" },
    { href: "/store", label: "Toko & Klinik" },
    { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 font-mono`}
        >
            <main className={`transition-all ease-in-out duration-300 ${scrolled
                ? "bg-lusuka-bg/80 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                : "bg-transparent shadow-none backdrop-blur-none"
                }`}>
                <div className="container-custom flex items-center justify-between h-[72px] lg:h-[80px]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Lusuka Skin
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors ${pathname === link.href
                                    ? "text-lusuka-accent font-semibold border-b-2"
                                    : "text-lusuka-text hover:text-lusuka-accent"
                                    }`}
                                style={{
                                    borderBottomColor:
                                        pathname === link.href ? "var(--color-accent)" : "transparent",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Right Section */}
                    <div className="hidden lg:flex items-center gap-3">
                        <ThemeToggle />
                        <WhatsAppButton
                            label="Chat"
                            message="Halo Lusuka Skin, saya ingin bertanya."
                            variant="outline"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                            className="p-2 hover:bg-lusuka-beige rounded-lg transition-colors"
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                {open && (
                    <div className="lg:hidden border-t" style={{ borderColor: "var(--color-border)" }}>
                        <div className="container-custom py-4 space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block py-2 text-lg font-semibold transition-colors ${pathname === link.href
                                        ? "text-lusuka-accent"
                                        : "text-lusuka-text hover:text-lusuka-accent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                                <WhatsAppButton
                                    label="Chat WhatsApp"
                                    message="Halo Lusuka Skin, saya ingin bertanya."
                                    className="w-full justify-center"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </header>
    );
}