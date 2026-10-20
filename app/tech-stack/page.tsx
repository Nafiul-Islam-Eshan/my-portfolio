import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import TechnologyCard from "@/components/shared/TechnologyCard";
import { technologies } from "@/utils/technologies";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "The technologies Md. Nafiul Islam works with: HTML, CSS, Tailwind, JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Git and more.",
};

const stackGroups = [
  {
    title: "Languages",
    description: "The syntax I write every day, plus coursework languages.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "C", "C++", "Python"],
  },
  {
    title: "Frameworks & libraries",
    description: "What I use to build and structure applications.",
    items: ["React", "Next.js", "Tailwind", "Bootstrap", "Node.js", "Express.js"],
  },
  {
    title: "Data",
    description: "Where application state and records live.",
    items: ["MongoDB"],
  },
  {
    title: "Tooling & deployment",
    description: "How code gets written, reviewed and shipped.",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
];

export default function TechStackPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Tech stack"
        title="The tools behind the work"
        description="Every project on this site is built from this list. No framework is here because it looked good on a list — each one is something I have shipped with."
      />

      <div className="mt-12 flex flex-col gap-12">
        {stackGroups.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`stack-${group.title.replace(/\W+/g, "-").toLowerCase()}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2
                id={`stack-${group.title.replace(/\W+/g, "-").toLowerCase()}`}
                className="text-lg font-semibold text-white"
              >
                {group.title}
              </h2>
              <p className="text-sm text-slate-500">{group.description}</p>
            </div>

            <ul className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {group.items.map((item) => (
                <li key={item}>
                  <TechnologyCard name={item} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="surface-card mt-14 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-white">
            {technologies.length} technologies, one working style
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            Prefer simple solutions, readable components and interfaces that
            hold up on a small screen.
          </p>
        </div>
      </div>
    </Section>
  );
}
