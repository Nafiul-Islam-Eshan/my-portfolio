import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  /** Small label above the title, e.g. "01 — About". */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

/**
 * Shared heading block for page sections. Renders the eyebrow, a short rule,
 * the title and an optional supporting line.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">
          <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={cn(
          "text-balance font-semibold tracking-tight text-white",
          Heading === "h1"
            ? "text-3xl sm:text-4xl lg:text-5xl"
            : "text-2xl sm:text-3xl lg:text-4xl",
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-base",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
