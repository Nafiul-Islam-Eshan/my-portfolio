import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRightFromSquare, LogoGithub } from "@gravity-ui/icons";
import Section from "@/components/shared/Section";
import Tag from "@/components/shared/Tag";
import { getProjectBySlug, projects } from "@/utils/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Md. Nafiul Islam`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const otherProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <Section>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <article className="mt-8 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
          {project.featured ? "Featured project" : "Project"}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
          {project.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm text-slate-200 transition-colors hover:border-accent/40 hover:text-white"
          >
            <LogoGithub className="size-4" aria-hidden="true" />
            Source code
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-base transition-colors hover:bg-accent-soft"
            >
              Live demo
              <ArrowUpRightFromSquare className="size-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="text-sm font-medium text-white">What it is</h2>
          <p className="mt-3 text-pretty leading-relaxed text-slate-400">
            {project.description}
          </p>
        </div>
      </article>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="text-sm font-medium text-white">More projects</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {otherProjects.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/projects/${item.slug}`}
                className="surface-card flex h-full flex-col p-4 transition-colors hover:border-accent/30"
              >
                <span className="font-medium text-slate-100">{item.title}</span>
                <span className="mt-1 text-sm text-slate-500">
                  {item.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
