// src/components/ThemeToggle.tsx

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isDark = document.documentElement.classList.contains("dark");
        setDark(isDark);
    }, []);

    const toggle = () => {
        const html = document.documentElement;
        const newDark = !dark;
        if (newDark) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        setDark(newDark);
    };

    if (!mounted) return <span className="inline-block h-11 w-11" />;

    return (
        <button
            onClick={toggle}
            aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            className="flex h-11 w-11 items-center justify-center rounded-full 
                transition-colors hover:bg-lusuka-beige dark:hover:bg-lusuka-rose"
        >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}