import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & Coursework"
          description="Formal coursework that supports the practical work above."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={(index % 3) * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-bg-card p-6">
                <div>
                  <span className="font-mono text-xs tracking-[0.15em] text-text-faint uppercase">
                    {cert.area}
                  </span>
                  <h3 className="mt-2 text-base font-medium leading-snug text-text">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{cert.provider}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {cert.status}
                  </span>
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent"
                    >
                      View Certificate
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
