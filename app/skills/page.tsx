import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Tag from "@/components/shared/Tag";
import { skillGroups, currentlyLearning } from "@/utils/skills";
import { getTechnology } from "@/utils/technologies";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Frontend, backend, database and tooling skills of Md. Nafiul Islam — React, Next.js, TypeScript, Node.js, Express, MongoDB, Git and more.",
};

export default function SkillsPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Skills"
        title="Skills by area of work"
        description="No percentages or star ratings — they would be invented. These are the areas I have built real projects in, and what I am working on next."
      />

      <div className="mt-12 flex flex-col gap-10">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`skills-${group.title.replace(/\s+/g, "-").toLowerCase()}`}
            className="border-t border-line pt-8 first:border-t-0 first:pt-0"
          >
            <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12">
              <div>
                <h2
                  id={`skills-${group.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-lg font-semibold text-white"
                >
                  {group.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {group.description}
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill) => {
                  const technology = getTechnology(skill);
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2.5 transition-colors hover:border-accent/30"
                    >
                      {technology ? (
                        <Image
                          src={technology.icon}
                          alt=""
                          width={22}
                          height={22}
                          className="size-5.5 shrink-0 object-contain"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="grid size-5.5 shrink-0 place-items-center rounded bg-accent/10 font-mono text-[10px] text-accent"
                        >
                          {skill.slice(0, 1)}
                        </span>
                      )}
                      <span className="text-sm text-slate-200">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="surface-card p-6">
          <h2 className="text-base font-semibold text-white">Currently learning</h2>
          <p className="mt-2 text-sm text-slate-400">
            Things I am actively working through rather than claiming as
            strengths.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <li key={item}>
                <Tag className="border-accent/25 bg-accent/5 text-accent">{item}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-base font-semibold text-white">Looking for</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            A frontend or full-stack internship where I can work on shipped
            features, receive code review, and learn from a team. I am{" "}
            {siteConfig.availability.toLowerCase()}.
          </p>
          <a
            href={siteConfig.links.email}
            className="mt-4 inline-block text-sm font-medium text-accent hover:text-white"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </Section>
  );
}
