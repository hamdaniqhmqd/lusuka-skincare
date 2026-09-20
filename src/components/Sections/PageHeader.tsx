// src/components/Sections/PageHeader.tsx

import Link from "next/link";

interface Crumb {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    description: string;
    crumbs: Crumb[];
}

export default function PageHeader({ title, description, crumbs }: PageHeaderProps) {
    return (
        <section className="section-alt py-20">
            <div className="container-custom">
                <nav aria-label="Breadcrumb" className="mb-1 text-xs muted">
                    {crumbs.map((c, i) => (
                        <span key={c.label}>
                            {c.href ? (
                                <Link href={c.href} className="hover:text-lusuka-accent transition-colors">
                                    {c.label}
                                </Link>
                            ) : (
                                <span aria-current="page" className="text-lusuka-text font-semibold">
                                    {c.label}
                                </span>
                            )}
                            {i < crumbs.length - 1 && <span className="mx-2">/</span>}
                        </span>
                    ))}
                </nav>
                <h4 className="mb-1">{title}</h4>
                <p className="muted max-w-2xl text-sm">{description}</p>
            </div>
        </section>
    );
}