import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { TypingText } from "@/components/ui/TypingText";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-60">
        <NeuralBackground />
      </div>

      {/* Soft vignette so text stays readable over the network */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 35%, transparent 0%, var(--color-bg) 85%)",
        }}
      />

      <Container className="relative z-10">
        <FadeIn>
          <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase">
            {siteConfig.name}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-6xl md:text-7xl">
            <TypingText words={siteConfig.roles} />
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
            Building intelligent systems through machine learning, artificial
            intelligence, and data-driven engineering.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#research"
              className="inline-flex items-center gap-2 rounded-md bg-text px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-text"
            >
              View Research
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Selected Projects
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
