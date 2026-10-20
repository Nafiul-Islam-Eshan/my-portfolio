import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import GitHubActivity from "@/components/sections/GitHubActivity";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Capabilities from "@/components/sections/Capabilities";
import ContactForm from "@/components/contact/ContactForm";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Md. Nafiul Islam — Aspiring Full-Stack Web Developer",
  description:
    "Computer Science & Engineering student at BAIUST building full-stack web applications with React, Next.js, Node.js and MongoDB. Open to internship opportunities.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <TechMarquee />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-14">
          <SectionHeading
            eyebrow="GitHub"
            title="Consistent, public practice"
            description="Most of what I learn ends up in a public repository. The graph below is pulled straight from GitHub."
          />
          <GitHubActivity />
        </div>
      </Section>

      <FeaturedProjects />

      <Capabilities />

      <Section id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about an internship"
          description="I'm looking for a team where I can contribute on real features and learn from people who have shipped more than I have."
        />
        <div className="mt-10">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
