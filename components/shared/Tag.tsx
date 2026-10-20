import { cn } from "@/utils/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small, non-interactive label used for technology names and statuses. */
export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-surface-raised px-2.5 py-1 font-mono text-[11px] tracking-wide text-slate-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
