// src/components/Sections/FaqSection.tsx

"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/Sections/SectionHeading";
import { ChevronDown } from "lucide-react";

interface FaqItem {
    q: string;
    a: string;
}

interface FaqSectionProps {
    faqs: FaqItem[];
    title?: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export default function FaqSection({
    faqs,
    title = "Pertanyaan yang Sering Diajukan",
    description,
    align = "center",
    className
}: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`section ${className}`}>
            <div className="container-custom">
                <SectionHeading title={title} description={description} align={align} />
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-3">
                        {faqs.map((f, index) => (
                            <Reveal key={f.q}>
                                <div
                                    className="card rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                                    onClick={() => toggleFaq(index)}
                                    style={{ transition: "all 0.3s ease" }}
                                >
                                    <div className="flex items-center justify-between font-semibold p-5 hover:text-lusuka-accent transition-colors duration-200">
                                        <span className="text-left">{f.q}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`faq-icon flex-shrink-0 ml-4 ${openIndex === index ? "open" : ""
                                                }`}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    {openIndex === index && (
                                        <div className="faq-content px-5 pb-5 border-t border-lusuka-border">
                                            <p className="muted text-sm leading-relaxed pt-3">{f.a}</p>
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}