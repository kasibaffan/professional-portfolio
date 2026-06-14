import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engineeringPrinciples } from "@/data/site";

export function EngineeringPrinciples() {
  return (
    <section id="principles" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Philosophy"
          title="Engineering Principles"
          description="The standards I hold my own work to, regardless of the project."
        />

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {engineeringPrinciples.map((principle, index) => (
            <FadeIn key={principle.title} delay={(index % 2) * 0.05}>
              <div className="flex gap-4">
                <span className="font-mono text-sm text-text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-medium text-text">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {principle.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
