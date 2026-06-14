import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Timeline"
          description="A short history — this section grows as new milestones happen."
        />

        <div className="relative">
          <div
            className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-[5px]"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {timeline.map((entry, index) => (
              <FadeIn key={entry.year} delay={index * 0.05}>
                <li className="relative pl-8 sm:pl-10">
                  <span
                    className="absolute left-0 top-2 h-[7px] w-[7px] rounded-full bg-accent sm:left-[2px]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm text-accent">{entry.year}</span>
                  <h3 className="mt-1 text-lg font-medium text-text">{entry.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
                    {entry.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
