import Link from "next/link";
import { ArrowRight, ArrowDownToLine, LogoGithub } from "@gravity-ui/icons";
import { siteConfig } from "@/utils/site";

const quickFacts = [
  { label: "Studying", value: `${siteConfig.role} · ${siteConfig.universityShort}` },
  { label: "Graduating", value: `${siteConfig.expectedGraduation}` },
  { label: "Based in", value: siteConfig.location },
];

export default function Hero() {
  return (
    <section className="relative pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24">
      <div className="page-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div className="flex flex-col">
            <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-slate-400">
              <span className="relative flex size-2">
                <span
                  aria-hidden="true"
                  className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70"
                />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.availability}
            </p>

            <h1 className="mt-6 text-balance text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              I build for the web,
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-accent">one feature at a time.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
              I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} at{" "}
              {siteConfig.universityShort} working towards full-stack
              development with React, Next.js, Node.js and MongoDB. I like
              small, well-structured applications that work properly on a phone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-base transition-colors hover:bg-accent-soft"
              >
                View projects
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={siteConfig.links.cv}
                download
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
              >
                <ArrowDownToLine className="size-4" aria-hidden="true" />
                Download CV
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <LogoGithub className="size-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          <dl className="surface-card divide-y divide-line overflow-hidden">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-5 py-4">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm text-slate-200">{fact.value}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 px-5 py-4">
              <dt className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
                Currently
              </dt>
              <dd className="text-sm text-slate-200">
                Building with Next.js and TypeScript
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
