import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="py-32">
      <Container>
        <FadeIn>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-text-faint">
            <span>{project.year}</span>
            <span aria-hidden="true">&middot;</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub className="h-4 w-4" />
              View on GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md bg-text px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-text"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-16 lg:grid-cols-3">
          <div className="space-y-16 lg:col-span-2">
            <ProjectSection title="Overview" delay={0}>
              <p>{project.overview}</p>
            </ProjectSection>

            <ProjectSection title="Problem Statement" delay={0.05}>
              <p>{project.problemStatement}</p>
            </ProjectSection>

            <ProjectSection title="Research Motivation" delay={0}>
              <p>{project.researchMotivation}</p>
            </ProjectSection>

            <ProjectSection title="System Architecture" delay={0.05}>
              <p>{project.systemArchitecture}</p>
              <ArchitectureDiagram stages={project.architecture} />
            </ProjectSection>

            <ProjectSection title="Implementation Details" delay={0}>
              <ul className="list-disc space-y-2 pl-5">
                {project.implementation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ProjectSection>

            <ProjectSection title="Challenges" delay={0.05}>
              <ul className="list-disc space-y-2 pl-5">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ProjectSection>

            <ProjectSection title="Future Scope" delay={0}>
              <ul className="list-disc space-y-2 pl-5">
                {project.futureScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ProjectSection>
          </div>

          <FadeIn delay={0.1} className="lg:col-span-1">
            <div className="sticky top-28 rounded-lg border border-border bg-bg-card p-6">
              <h3 className="font-mono text-sm tracking-[0.2em] text-text-faint uppercase">
                Technology Stack
              </h3>
              <div className="mt-4 space-y-5">
                {project.techStack.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs text-text-faint">{group.category}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </article>
  );
}

function ProjectSection({
  title,
  delay,
  children,
}: {
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <FadeIn delay={delay}>
      <h2 className="text-2xl font-semibold tracking-tight text-text">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-text-muted">
        {children}
      </div>
    </FadeIn>
  );
}
