// src/components/Photo.tsx

import Image from "next/image";

interface PhotoProps {
    src: string;
    alt: string;
    ratio?: string;
    priority?: boolean;
    sizes?: string;
    className?: string;
    width?: number;
    height?: number;
}

export default function Photo({
    src,
    alt,
    ratio = "4 / 5",
    priority = false,
    sizes = "(min-width:1024px) 33vw, 100vw",
    className = "",
    width = 800,
    height = 1000,
}: PhotoProps) {
    return (
        <div
            className={`image-hover relative overflow-hidden ${className}`}
            style={{ aspectRatio: ratio }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                className="object-cover"
            />
        </div>
    );
}