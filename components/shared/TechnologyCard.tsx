import Image from "next/image";
import Tag from "@/components/shared/Tag";
import { getTechnology } from "@/utils/technologies";

type TechnologyCardProps = {
  name: string;
  /** Hide the name when the card is used inside a tight grid. */
  showLabel?: boolean;
};

/** A technology icon with its name, used on the tech stack page. */
export default function TechnologyCard({ name, showLabel = true }: TechnologyCardProps) {
  const technology = getTechnology(name);
  if (!technology) return <Tag>{name}</Tag>;

  return (
    <div className="flex flex-col items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-4 transition-colors hover:border-accent/30">
      <Image
        src={technology.icon}
        alt=""
        width={32}
        height={32}
        className="size-8 object-contain"
      />
      {showLabel ? (
        <span className="text-center text-xs text-slate-400">{name}</span>
      ) : (
        <span className="sr-only">{name}</span>
      )}
    </div>
  );
}
