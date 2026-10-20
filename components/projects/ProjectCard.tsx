import Link from "next/link";
import { ArrowRight, ArrowUpRightFromSquare, LogoGithub } from "@gravity-ui/icons";
import Tag from "@/components/shared/Tag";
import type { Project } from "@/utils/projects";

type ProjectCardProps = {
  project: Project;
};

/** Summary card used in project grids. */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group surface-card flex h-full flex-col p-5 transition-colors hover:border-accent/30 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <span
          aria-hidden="true"
          className="grid size-8 shrink-0 place-items-center rounded-lg border border-line text-slate-500 transition-colors group-hover:border-accent/40 group-hover:text-accent"
        >
          <ArrowUpRightFromSquare className="size-3.5" />
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {project.summary}
      </p>

      <ul className="mt-5 mb-6 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.tech.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-4 border-t border-line pt-4 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-medium text-accent hover:text-white"
        >
          Details
          <ArrowRight className="size-3.5" aria-hidden="true" />
          <span className="sr-only">for {project.title}</span>
        </Link>

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
        >
          <LogoGithub className="size-3.5" aria-hidden="true" />
          Code
          <span className="sr-only">repository for {project.title}</span>
        </a>

        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-auto inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
          >
            Live
            <ArrowUpRightFromSquare className="size-3" aria-hidden="true" />
            <span className="sr-only">demo of {project.title}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
