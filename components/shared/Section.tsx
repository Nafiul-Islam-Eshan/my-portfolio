import { cn } from "@/utils/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

/** A full-width page band with consistent vertical rhythm. */
export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="page-shell">{children}</div>
    </section>
  );
}
