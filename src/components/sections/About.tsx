import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { focusAreas, siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="About" title="Background" />

        <div className="grid gap-12 md:grid-cols-3">
          <FadeIn className="md:col-span-2">
            <p className="text-lg leading-relaxed text-text-muted sm:text-xl">
              {siteConfig.shortBio}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="font-mono text-sm tracking-[0.2em] text-text-faint uppercase">
              Focus Areas
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Tag key={area}>{area}</Tag>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
