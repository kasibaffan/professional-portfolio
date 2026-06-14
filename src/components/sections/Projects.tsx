import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected Projects"
          title="Projects"
          description="A few projects that reflect how I approach applied AI — from research-driven systems to practical, end-to-end products."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={(index % 2) * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
