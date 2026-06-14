import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

export function TechnicalExpertise() {
  return (
    <section id="expertise" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Tools & Technologies"
          description="A working toolkit spanning machine learning, software engineering, and cloud infrastructure."
        />

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.category} delay={(index % 2) * 0.05}>
              <h3 className="font-mono text-sm tracking-[0.2em] text-text-faint uppercase">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} className="hover:border-accent hover:text-text">
                    {item}
                  </Tag>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
