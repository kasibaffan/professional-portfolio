import { Download, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Resume() {
  return (
    <section id="resume" className="border-t border-border py-24 sm:py-32">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center gap-6 rounded-xl border border-border bg-bg-card p-10 text-center sm:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg-elevated">
              <FileText className="h-6 w-6 text-accent" />
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold text-text">Mohammad Kasib Affan</p>
              <p className="text-sm text-text-muted">
                B.Tech · Computer Science &amp; Engineering · SRM Institute of Science &amp; Technology
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Mohammad_Kasib_Affan_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
