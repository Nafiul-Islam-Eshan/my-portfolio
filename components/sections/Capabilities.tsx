import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import { skillGroups } from "@/utils/skills";

export default function Capabilities() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What I can do"
        title="Where I can contribute today"
        description="The areas I have built real things in, grouped by the kind of work rather than by a self-assigned score."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="surface-card flex flex-col p-5 transition-colors hover:border-accent/30 sm:p-6"
          >
            <h3 className="text-base font-semibold text-white">{group.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {group.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
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
    </Section>
  );
}
