// src/components/WhatsAppButton.tsx

import { IconWa } from "@/utils/icons";

const WA_NUMBER = "6285607599369";

export const waLink = (message: string, phone: string = WA_NUMBER) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

interface WhatsAppButtonProps {
    message: string;
    label?: string;
    phone?: string;
    variant?: "solid" | "outline" | "floating" | "white";
    className?: string;
}

export default function WhatsAppButton({
    message,
    label = "",
    phone = WA_NUMBER,
    variant = "solid",
    className = "",
}: WhatsAppButtonProps) {
    const href = waLink(message, phone);

    if (variant === "floating") {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="btn-wa fixed right-6 bottom-6 z-50 flex text-sm h-14 w-14 items-center justify-center rounded-full shadow-lg hover:shadow-md transition-shadow"
            >
                <IconWa className="w-8 h-8 text-white" />
            </a>
        );
    }

    const baseStyle = "btn";

    const style =
        variant === "solid"
            ? "btn-wa"
            : variant === "white"
                ? "btn-wa-white"
                : "btn btn-outline";

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseStyle} ${style} ${className}`}
        >
            {label}
        </a>
    );
}