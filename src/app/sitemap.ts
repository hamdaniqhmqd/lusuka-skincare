import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://www.contoh-domain.com";
    const pages = ["", "/about", "/product", "/store", "/contact"];

    return pages.map((p) => ({
        url: `${base}${p}`,
        lastModified: new Date(),
    }));
}