import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Md. Nafiul Islam about internship opportunities, collaboration or a question about a project.",
};

const details = [
  { label: "Email", value: siteConfig.email, href: siteConfig.links.email },
  { label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location },
  { label: "Status", value: siteConfig.availability },
];

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Let's build something together"
        description="Whether it is an internship, a small project or a question about how something on this site works, I read every message."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <ContactForm />

        <aside className="order-first flex flex-col gap-6 lg:order-last">
          <dl className="surface-card divide-y divide-line">
            {details.map((detail) => (
              <div key={detail.label} className="px-5 py-4">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-sm text-slate-200">
                  {detail.href ? (
                    <a href={detail.href} className="hover:text-accent">
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="text-xs leading-relaxed text-slate-500">
            I&apos;m in Cumilla, Bangladesh (GMT+6). Messages sent outside
            office hours get a reply the next morning.
          </p>
        </aside>
      </div>
    </Section>
  );
}
