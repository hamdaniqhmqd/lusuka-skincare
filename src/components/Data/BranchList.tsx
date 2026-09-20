// src/components/Data/BranchList.tsx

"use client";

import { useMemo, useState } from "react";
import { MapPin, Clock, Search, X } from "lucide-react";
import Photo from "../Photo";
import WhatsAppButton from "../WhatsAppButton";

export type Branch = {
    name: string;
    province: string;
    city: string;
    address: string;
    hours: string;
    whatsapp: string;
    services: string[];
    image: string;
};

interface BranchListProps {
    branches: Branch[];
}

const mapsUrl = (b: Branch) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${b.name} ${b.address} ${b.city}`
    )}`;

export default function BranchList({ branches }: BranchListProps) {
    const [q, setQ] = useState("");
    const [province, setProvince] = useState("Semua");

    const provinces = useMemo(
        () => ["Semua", ...Array.from(new Set(branches.map((b) => b.province)))],
        [branches]
    );

    const filtered = useMemo(
        () =>
            branches.filter(
                (b) =>
                    (province === "Semua" || b.province === province) &&
                    `${b.name} ${b.city} ${b.province}`.toLowerCase().includes(q.trim().toLowerCase())
            ),
        [branches, q, province]
    );

    return (
        <div className="container-custom pt-10">
            {/* Filter Section */}
            <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-end lg:gap-4">
                {/* Search Input */}
                <div className="flex-1">
                    <label className="block text-sm font-semibold mb-2">Cari Kota atau Cabang</label>
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-3 text-lusuka-text-muted" />
                        <input
                            type="text"
                            placeholder="Cari kota atau nama cabang..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-lusuka-surface 
                                transition-colors focus:ring focus:ring-lusuka-accent"
                            style={{ borderColor: "var(--color-border)" }}
                        />
                        {q && (
                            <button
                                onClick={() => setQ("")}
                                className="absolute right-3 top-3 p-0 hover:text-lusuka-accent"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Province Filter */}
                <div className="shrink-0">
                    <label className="block text-sm font-semibold mb-2">Provinsi</label>
                    <select
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border bg-lusuka-surface 
                            transition-colors focus:ring focus:ring-lusuka-accent"
                        style={{ borderColor: "var(--color-border)" }}
                    >
                        {provinces.map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Reset Button */}
                {(q || province !== "Semua") && (
                    <button
                        onClick={() => {
                            setQ("");
                            setProvince("Semua");
                        }}
                        className="btn btn-outline"
                    >
                        Reset Filter
                    </button>
                )}
            </div>

            {/* Results Text */}
            <p className="muted text-sm mb-8">Menampilkan {filtered.length} cabang</p>

            {/* Empty State */}
            {filtered.length === 0 && (
                <div className="card p-10 text-center">
                    <h3 className="text-2xl font-semibold mb-3">Belum ada cabang di area tersebut</h3>
                    <p className="muted mb-6">
                        Tenang, Anda tetap bisa memesan dan berkonsultasi via WhatsApp.
                    </p>
                    <WhatsAppButton
                        label="Chat WhatsApp"
                        message="Halo Lusuka Skin, saya ingin memesan produk. Kota saya belum ada cabang."
                    />
                </div>
            )}

            {/* Semua Cabang, ditampilkan langsung berurutan tanpa dikelompokkan per provinsi */}
            {filtered.length > 0 && (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((b) => (
                        <article key={b.name} className="card hover-lift overflow-hidden h-full flex flex-col rounded-xl">
                            <Photo
                                src={b.image}
                                alt={`${b.name}, Toko & Klinik Lusuka Skin di ${b.city}`}
                                ratio="4 / 3"
                                className="shrink-0"
                            />
                            <div className="flex-1 flex flex-col p-6">
                                <div className="flex-1 space-y-3">
                                    <span
                                        className="chip"
                                        style={{
                                            minHeight: 28,
                                            fontSize: 12,
                                            cursor: "default",
                                            background: "var(--color-accent)",
                                            color: "#fff",
                                            borderColor: "var(--color-accent)",
                                        }}
                                    >
                                        Toko & Klinik
                                    </span>
                                    <h3 className="text-2xl">{b.name}</h3>
                                    <p className="muted flex gap-2 text-sm">
                                        <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                                        <span>
                                            {b.address}, {b.city}, {b.province}
                                        </span>
                                    </p>
                                    <p className="muted flex gap-2 text-sm">
                                        <Clock size={16} className="flex-shrink-0 mt-0.5" />
                                        <span>{b.hours}</span>
                                    </p>
                                    {b.services.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {b.services.map((s) => (
                                                <span
                                                    key={s}
                                                    className="chip"
                                                    style={{ minHeight: 28, fontSize: 11, cursor: "default" }}
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="shrink-0 flex flex-col gap-2 pt-2">
                                    <a
                                        href={mapsUrl(b)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary text-sm hover:-translate-y-0.5"
                                        style={{ transition: "all 0.2s ease-in-out" }}
                                    >
                                        Buka di Google Maps
                                    </a>
                                    <WhatsAppButton
                                        phone={b.whatsapp}
                                        label="Chat WhatsApp"
                                        message={`Halo ${b.name}, saya ingin bertanya tentang jam kunjungan dan ketersediaan produk.`}
                                        className="w-full justify-center text-sm text-white!"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}