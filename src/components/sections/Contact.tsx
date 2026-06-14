import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s+/g, "")}` },
  { icon: FaGithub, label: "GitHub", value: "@" + siteConfig.githubUsername, href: siteConfig.links.github },
  { icon: FaLinkedin, label: "LinkedIn", value: "kasibaffan", href: siteConfig.links.linkedin },
  { icon: FaInstagram, label: "Instagram", value: "@kasibaffan", href: siteConfig.links.instagram },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk"
          description="Open to research collaborations, internships, and engineering roles. Reach out through any of the channels below, or use the form."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-text-faint" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-text-faint">{item.label}</span>
                      <span className="text-sm text-text">{item.value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="flex items-center gap-3 transition-colors hover:text-accent"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          <FadeIn delay={0.05}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
