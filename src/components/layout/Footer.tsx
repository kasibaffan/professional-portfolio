import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-semibold text-text">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-text-muted">
            AI Research Engineer &middot; Machine Learning Engineer
          </p>
          <p className="mt-1 text-sm text-text-faint">{siteConfig.university}</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send an email"
              className="text-text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-text-faint">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
      <Container className="border-t border-border py-4">
        <p className="text-center text-xs text-text-faint">
          Designed and built with{" "}
          <Link href="https://nextjs.org" target="_blank" rel="noreferrer noopener" className="hover:text-accent">
            Next.js
          </Link>{" "}
          and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
