import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import Tag from "@/components/shared/Tag";
import { projects } from "@/utils/projects";
import { getGitHubProfile, getPublicRepositories } from "@/lib/github";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web applications built by Md. Nafiul Islam, including PAYOO, KeenKeeper, Movie Explorer and Dragon News.",
};

export const revalidate = 3600;

const formatDate = (isoDate: string) =>
  new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));

export default async function ProjectsPage() {
  const [profile, repositories] = await Promise.all([
    getGitHubProfile(siteConfig.githubUsername),
    getPublicRepositories(siteConfig.githubUsername),
  ]);

  const curatedRepoNames = new Set(
    projects.map((project) => project.repo.split("/").pop()?.toLowerCase()),
  );

  const otherRepositories = repositories
    .filter((repo) => !curatedRepoNames.has(repo.name.toLowerCase()))
    .slice(0, 8);

  return (
    <>
      <Section className="pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Projects"
          title="Things I have built"
          description="Each of these is a working application with a public repository. Featured projects come first; the rest are smaller exercises that taught me something specific."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="From GitHub"
            title="Recently updated repositories"
            description="Pulled live from the public GitHub API. Forks and empty repositories are left out."
          />
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-xs text-slate-500 hover:text-accent"
          >
            github.com/{siteConfig.githubUsername}
          </a>
        </div>

        {repositories.length === 0 ? (
          <p className="surface-card mt-8 p-6 text-sm text-slate-400">
            GitHub data is unavailable right now. You can browse the
            repositories directly on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent hover:text-white"
            >
              GitHub
            </a>
            .
          </p>
        ) : (
          <>
            {profile ? (
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <dt>Public repositories</dt>
                  <dd className="text-slate-200">{profile.publicRepos}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt>Followers</dt>
                  <dd className="text-slate-200">{profile.followers}</dd>
                </div>
              </dl>
            ) : null}

            <ul className="mt-6 divide-y divide-line border-y border-line">
              {otherRepositories.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex flex-col gap-2 py-4 transition-colors hover:bg-surface/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-slate-100 group-hover:text-accent">
                        {repo.name}
                      </p>
                      <p className="mt-0.5 truncate text-sm text-slate-500">
                        {repo.description ?? "No description"}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      {repo.language ? <Tag>{repo.language}</Tag> : null}
                      <span className="font-mono text-xs text-slate-600">
                        {formatDate(repo.updated_at)}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </Section>
    </>
  );
}
