import Link from "next/link";
import { Envelope, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { siteConfig } from "@/utils/site";

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github, Icon: LogoGithub },
  { label: "LinkedIn", href: siteConfig.links.linkedin, Icon: LogoLinkedin },
  { label: "Email", href: siteConfig.links.email, Icon: Envelope },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/60">
      <div className="page-shell flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500">
            {siteConfig.role} at {siteConfig.universityShort}, graduating{" "}
            {siteConfig.expectedGraduation}.
          </p>
          <p className="text-sm text-slate-500">{siteConfig.location}</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg border border-line text-slate-400 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="size-4.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/projects" className="text-sm text-slate-500 hover:text-white">
              Projects
            </Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-white">
              Contact
            </Link>
            <a
              href={siteConfig.links.cv}
              download
              className="text-sm text-slate-500 hover:text-white"
            >
              Résumé
            </a>
          </nav>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
