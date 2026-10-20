import Link from "next/link";
import { ArrowRight } from "@gravity-ui/icons";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/utils/projects";

export default function FeaturedProjects() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have shipped"
          description="Applications built end to end while working through structured web development training and my own practice."
        />
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white"
        >
          All projects
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
