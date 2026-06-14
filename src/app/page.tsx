import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { Resume } from "@/components/sections/Resume";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ResearchInterests />
      <Projects />
      <TechnicalExpertise />
      <Certifications />
      <ExperienceTimeline />
      <EngineeringPrinciples />
      <GitHubSection />
      <Resume />
      <Contact />
    </>
  );
}
