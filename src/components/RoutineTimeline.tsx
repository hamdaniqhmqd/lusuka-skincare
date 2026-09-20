"use client";

import { useEffect, useRef, useState } from "react";

interface RoutineStep {
    step: number;
    name: string;
    text: string;
}

export default function RoutineTimeline({ steps }: { steps: RoutineStep[] }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative grid gap-10 pb-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
        >
            {/* Garis penghubung — hanya tampil di layar sm ke atas, mengisi dari kiri ke kanan */}
            <div className="absolute top-6 hidden h-px w-full bg-lusuka-border lg:block">
                <div
                    className="h-full origin-left scale-x-0 bg-lusuka-accent transition-transform duration-[1400ms] ease-out"
                    style={isVisible ? { transform: "scaleX(1)" } : undefined}
                />
            </div>

            {steps.map((r, i) => (
                <div key={r.step} className="relative text-center">
                    <div
                        className={`relative z-10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white transition-colors duration-500 ${isVisible ? "bg-lusuka-accent" : "bg-lusuka-border"
                            }`}
                        style={{ transitionDelay: `${i * 150}ms` }}
                    >
                        {r.step}
                    </div>
                    <h4 className="mb-1 text-sm font-semibold">{r.name}</h4>
                    <p className="mx-auto max-w-xs text-xs text-lusuka-text-muted">{r.text}</p>
                </div>
            ))}
        </div>
    );
}