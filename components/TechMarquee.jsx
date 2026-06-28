import { TECH_LIST } from "@/lib/tech";

export default function TechMarquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const row = [...TECH_LIST, ...TECH_LIST];

  return (
    <section
      aria-label="Technologies I work with"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-7"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent sm:w-40" />

      <div className="flex w-max animate-marquee items-center gap-12 pr-12">
        {row.map((t, i) => {
          const Icon = t.Icon;
          return (
            <div
              key={`${t.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-zinc-400"
            >
              <Icon
                className="h-6 w-6 transition-transform"
                style={{ color: t.color }}
                aria-hidden="true"
              />
              <span className="whitespace-nowrap text-sm font-medium tracking-tight">
                {t.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
