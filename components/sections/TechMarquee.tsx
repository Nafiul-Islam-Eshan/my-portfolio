import Image from "next/image";
import { technologies } from "@/utils/technologies";

/**
 * Continuously scrolling row of technology badges. Duplicated once so the
 * loop is seamless; the copy is hidden from assistive tech.
 */
export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/40 py-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-base to-transparent sm:w-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-base to-transparent sm:w-28"
      />

      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex shrink-0 items-center gap-10"
          >
            {technologies.map((tech) => (
              <li
                key={tech.name}
                className="flex shrink-0 items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100"
              >
                <Image
                  src={tech.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="size-5.5 object-contain"
                />
                <span className="text-sm whitespace-nowrap text-slate-400">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
