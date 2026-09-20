// src/components/Sections/ContactForm.tsx

"use client";

import { useState } from "react";
import { waLink } from "../WhatsAppButton";

interface ContactFormProps {
    topics: string[];
}

export default function ContactForm({ topics }: ContactFormProps) {
    const [name, setName] = useState("");
    const [topic, setTopic] = useState(topics[0]);
    const [message, setMessage] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Halo Lusuka Skin, saya ${name}.\nTopik: ${topic}\n\n${message}`;
        window.open(waLink(text), "_blank");
    };

    const isValid = name.trim() && topic && message.trim().length >= 10;

    return (
        <form onSubmit={submit} className="card h-full rounded-xl space-y-5 p-8">
            <label className="block">
                <span className="mb-2 block text-sm font-semibold">Nama</span>
                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-lusuka-accent"
                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                    placeholder="John Doe"
                />
            </label>

            <label className="block">
                <span className="mb-2 block text-sm font-semibold">Topik</span>
                <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full rounded-xl border p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-lusuka-accent"
                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                >
                    {topics.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </label>

            <label className="block">
                <span className="mb-2 block text-sm font-semibold">Pesan</span>
                <textarea
                    required
                    minLength={10}
                    rows={4}
                    value={message}
                    placeholder="Halo, Lusuka Skincare"
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-lusuka-accent resize-none"
                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                />
            </label>

            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-wa w-full text-white!"
            >
                Kirim via WhatsApp
            </button>

            <p className="muted text-center text-xs">
                Anda akan diarahkan ke WhatsApp untuk mengirim pesan ini.
            </p>
        </form>
    );
}