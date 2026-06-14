import { FadeIn } from "@/components/ui/FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/**
 * Shared heading layout used at the top of every page section —
 * a small mono "eyebrow" label, a large title, and an optional description.
 */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12 max-w-2xl md:mb-16">
      <span className="font-mono text-sm tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-muted">{description}</p>
      )}
    </FadeIn>
  );
}
