import { FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Once a resume PDF is ready, drop it into /public (e.g. /resume.pdf) and
// link it here instead of rendering the placeholder card below.
export function Resume() {
  return (
    <section id="resume" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Resume" title="Resume" />

        <FadeIn>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-dashed border-border-strong bg-bg-card p-8 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-bg-elevated">
              <FileText className="h-5 w-5 text-text-faint" />
            </div>
            <p className="text-base leading-relaxed text-text-muted">
              A new version of my professional resume is currently under development
              and will be published soon.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
