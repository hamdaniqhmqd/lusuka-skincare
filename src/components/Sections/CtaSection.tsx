// src/components/Sections/CtaSection.tsx

import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CtaSectionProps {
    title: string;
    description: string;
    whatsappText?: string;
    whatsappMessage: string;
    productLink?: string;
    gradientStart?: string;
    gradientEnd?: string;
    paddingBlock?: number;
}

export default function CtaSection({
    title,
    description,
    whatsappText = "Chat via WhatsApp",
    whatsappMessage,
    productLink = "/product",
    gradientStart = "var(--color-accent)",
    gradientEnd = "#c08457",
    paddingBlock = 80,
}: CtaSectionProps) {
    return (
        <section className="section" style={{ paddingBlock }}>
            <div className="container-custom">
                <div
                    className="rounded-xl p-16 text-center text-white"
                    style={{
                        background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
                    }}
                >
                    <Reveal>
                        <>
                            <h2 className="mb-4 text-white">{title}</h2>
                            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                                {description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <WhatsAppButton
                                    label={whatsappText}
                                    message={whatsappMessage}
                                    variant="white"
                                    className="hover:-translate-y-0.5!"
                                />
                                <Link
                                    href={productLink}
                                    className="btn hover:-translate-y-0.5"
                                    style={{ background: "white", color: "#171717", transition: "all 0.3s ease" }}
                                >
                                    Lihat Produk
                                </Link>
                            </div>
                        </>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}