import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://lusuka-skincare.vercel.app";
    const pages = [
        { path: "", priority: 1.0, changeFrequency: "weekly" as const },
        { path: "/product", priority: 0.9, changeFrequency: "weekly" as const },
        { path: "/store", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    ];

    return pages.map((p) => ({
        url: `${base}${p.path}`,
        lastModified: new Date(),
        changeFrequency: p.changeFrequency,
        priority: p.priority,
    }));
}