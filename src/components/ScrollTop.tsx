// src/components/ScrollTop.tsx

"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                aria-label="Kembali ke atas"
                className="fixed right-6 bottom-24 z-40 flex h-10 w-10 
                    items-center justify-center rounded-full bg-lusuka-accent 
                    text-lusuka-bg transition-all hover:bg-lusuka-accent-hover"
                style={{
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? "visible" : "hidden",
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                }}
            >
                <ChevronUp size={24} />
            </button>
        )
    );
}