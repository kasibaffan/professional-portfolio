import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchInterests } from "@/data/site";

export function ResearchInterests() {
  return (
    <section id="research" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Research"
          title="Research Domains"
          description="Areas I study, experiment in, and build toward — spanning core ML theory to the infrastructure that puts it into production."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest, index) => (
            <FadeIn key={interest.title} delay={(index % 3) * 0.05}>
              <div className="h-full bg-bg-card p-6 transition-colors duration-300 hover:bg-bg-elevated">
                <h3 className="text-base font-medium text-text">{interest.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {interest.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
