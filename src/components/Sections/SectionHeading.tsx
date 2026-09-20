// src/components/Sections/SectionHeading.tsx

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    const alignClass = align === "center" ? "text-center" : "text-left";

    return (
        <div className={`w-full mb-12 ${alignClass}`}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="mb-5">{title}</h2>
            {description && <p className="muted text-lg">{description}</p>}
        </div>
    );
}