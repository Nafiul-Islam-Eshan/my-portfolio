import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, LogoGithub } from "@gravity-ui/icons";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import TechnologyCard from "@/components/shared/TechnologyCard";
import { siteConfig } from "@/utils/site";
import { skillGroups, currentlyLearning } from "@/utils/skills";
import { technologies } from "@/utils/technologies";

export const metadata: Metadata = {
  title: "About",
  description:
    "Md. Nafiul Islam is a Computer Science & Engineering student at BAIUST in Cumilla, Bangladesh, learning full-stack web development with React, Next.js and Node.js.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title="A student engineer learning by building."
            />

            <div className="mt-8 flex max-w-2xl flex-col gap-5 text-pretty text-base leading-relaxed text-slate-400">
              <p>
                I&apos;m {siteConfig.name}, a first-generation web developer
                studying Computer Science &amp; Engineering at{" "}
                {siteConfig.university}. I&apos;m based in {siteConfig.location}
                , and I&apos;m working towards becoming a full-stack developer.
              </p>
              <p>
                My route into this was practical. I started with HTML, CSS and
                JavaScript, moved to React and Next.js, and now build complete
                applications — routing, state, forms, API calls and a backend
                that stores data. Each project on this site exists because I
                wanted to understand how the thing worked, not because a
                tutorial asked for it.
              </p>
              <p>
                What I care about in the code I write: interfaces that stay
                readable on a 375px phone, forms that tell the user what went
                wrong, and components that someone else could pick up without
                me explaining them. I&apos;m looking for an internship where I
                can ship real features on a real team.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-base transition-colors hover:bg-accent-soft"
              >
                See the projects
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
              >
                <LogoGithub className="size-4" aria-hidden="true" />
                GitHub profile
              </a>
            </div>
          </div>

          <aside className="flex flex-col gap-5">
            <div className="surface-card flex flex-col items-center p-6 text-center">
              <div className="relative size-28 overflow-hidden rounded-full border border-line bg-surface-raised">
                <Image
                  src="/programmer.png"
                  alt="Illustration used as a placeholder avatar"
                  fill
                  sizes="112px"
                  className="object-contain p-3"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-xs text-slate-500">{siteConfig.headline}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                A real photograph will replace this illustration once it is
                available.
              </p>
            </div>

            <dl className="surface-card divide-y divide-line">
              <div className="px-5 py-4">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
                  Education
                </dt>
                <dd className="mt-1 text-sm text-slate-200">
                  B.Sc. in CSE, {siteConfig.universityShort}
                </dd>
              </div>
              <div className="px-5 py-4">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
                  Expected graduation
                </dt>
                <dd className="mt-1 text-sm text-slate-200">
                  {siteConfig.expectedGraduation}
                </dd>
              </div>
              <div className="px-5 py-4">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-sm text-slate-200">
                  {siteConfig.location}
                </dd>
              </div>
              <div className="px-5 py-4">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
                  Status
                </dt>
                <dd className="mt-1 text-sm text-emerald-400">
                  {siteConfig.availability}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Focus"
          title="What I work with"
          description="Grouped by the kind of work rather than a made-up proficiency score."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card p-5 sm:p-6">
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {group.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-surface-raised px-2 py-1 font-mono text-[11px] text-slate-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-white">Currently learning</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <li
                key={item}
                className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I use"
          description="The full set, including the languages I use for coursework and problem solving."
        />
        <ul className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {technologies.map((technology) => (
            <li key={technology.name}>
              <TechnologyCard name={technology.name} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
