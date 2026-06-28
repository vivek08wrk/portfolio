import { getTech } from "@/lib/tech";

export default function TechBadge({ name, size = "sm" }) {
  const tech = getTech(name);
  const Icon = tech?.Icon;

  const sizing =
    size === "md"
      ? "px-3 py-1.5 text-xs"
      : "px-2.5 py-1 text-xs";
  const iconSize = size === "md" ? "h-3.5 w-3.5" : "h-3.5 w-3.5";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] text-zinc-300 transition-colors hover:border-white/20 hover:text-white ${sizing}`}
    >
      {Icon ? (
        <Icon className={iconSize} style={{ color: tech.color }} aria-hidden="true" />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
      )}
      {name}
    </span>
  );
}
