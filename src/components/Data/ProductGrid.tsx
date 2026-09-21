// src/components/Data/ProductGrid.tsx

"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import Photo from "../Photo";
import WhatsAppButton from "../WhatsAppButton";

export type Product = {
    name: string;
    category: string;
    size: string;
    price?: string;
    tagline: string;
    skinType: string[];
    texture: string;
    benefits: string[];
    ingredients: { name: string; note: string }[];
    howToUse: string[];
    image: string;
};

interface ProductGridProps {
    products: Product[];
    categories: string[];
}

export default function ProductGrid({ products, categories }: ProductGridProps) {
    const [active, setActive] = useState("Semua");

    const shown = useMemo(
        () =>
            active === "Semua"
                ? products
                : products.filter((p) => p.category === active),
        [active, products]
    );

    return (
        <div className="container-custom pt-10">
            <div className="mb-10 flex flex-wrap gap-3">
                <div className="flex flex-nowrap items-center gap-3 overflow-x-auto hide-scrollbar">
                    {categories.map((c) => (
                        <button
                            key={c}
                            className="chip"
                            aria-pressed={active === c}
                            onClick={() => setActive(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <span className="muted sm:ml-auto text-sm">Menampilkan {shown.length} produk</span>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((p) => (
                    <article key={p.name} className="card h-full rounded-xl hover-lift flex flex-col overflow-hidden">
                        <div className="relative">
                            <Photo src={p.image} alt={`${p.name} — ${p.category} Lusuka Skin`} />
                            <span className="chip absolute top-4 left-4" style={{ minHeight: 32 }}>
                                {p.category}
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col gap-4 p-6">
                            <h3 className="text-2xl">{p.name}</h3>
                            <p className="muted text-sm">{p.tagline}</p>
                            <p className="text-sm font-semibold">
                                {p.size}
                                {p.price && ` · ${p.price}`}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {p.skinType.map((s) => (
                                    <span
                                        key={s}
                                        className="chip"
                                        style={{ minHeight: 28, fontSize: 12, cursor: "default" }}
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <ul className="space-y-2 text-sm">
                                {p.benefits.map((b) => (
                                    <li key={b} className="flex gap-2">
                                        <Check size={16} className="shrink-0 text-lusuka-accent" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <details className="border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                                <summary className="cursor-pointer font-semibold hover:text-lusuka-accent">
                                    Lihat kandungan &amp; cara pakai
                                </summary>
                                <div className="mt-3 space-y-3 text-sm">
                                    <p className="muted">
                                        <strong>Tekstur:</strong> {p.texture}
                                    </p>
                                    <div>
                                        <strong className="block mb-2">Kandungan:</strong>
                                        <ul className="space-y-1 ml-4">
                                            {p.ingredients.map((i) => (
                                                <li key={i.name} className="text-xs muted">
                                                    <strong>{i.name}</strong> — {i.note}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="block mb-2">Cara Pakai:</strong>
                                        <ol className="list-decimal space-y-1 pl-5 text-xs muted">
                                            {p.howToUse.map((s, idx) => (
                                                <li key={idx}>{s}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </details>
                            <div className="mt-auto flex flex-col gap-2 pt-2">
                                <WhatsAppButton
                                    label="Pesan / Tanya via WhatsApp"
                                    message={`Halo Lusuka Skin, saya ingin tanya tentang produk ${p.name}`}
                                    className="w-full justify-center text-white!"
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}