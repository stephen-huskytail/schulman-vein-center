import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem, createBreadcrumbSchema } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ eyebrow, title, description, breadcrumbs = [] }: PageHeroProps) {
  const breadcrumbSchema = breadcrumbs.length > 0 ? createBreadcrumbSchema(breadcrumbs) : null;

  return (
    <section className="bg-[var(--sv-navy)] py-12 md:py-16">
      <div className="container-narrow">
        {breadcrumbSchema ? (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.url} className="inline-flex items-center gap-2">
                      {index > 0 ? <ChevronRight className="h-4 w-4 text-white/50" aria-hidden="true" /> : null}
                      {isLast ? (
                        <span className="text-white font-medium">{crumb.name}</span>
                      ) : (
                        <Link href={crumb.url} className="hover:text-[var(--sv-teal)] transition-colors">
                          {crumb.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </>
        ) : null}
        <p className="text-sm font-semibold tracking-widest uppercase mb-2 text-[var(--sv-teal)]">
          {eyebrow}
        </p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
}
