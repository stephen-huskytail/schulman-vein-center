interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-[var(--sv-navy)] py-12 md:py-16">
      <div className="container-narrow">
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
