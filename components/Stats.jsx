import Reveal from "./Reveal";

const stats = [
  { value: "06", label: "Projects built" },
  { value: "100%", label: "Deployed & live" },
  { value: "MERN", label: "+ Next.js core stack" },
  { value: "15+", label: "Technologies used" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-base/40 px-6 py-7 text-center transition-colors hover:bg-white/[0.02]"
            >
              <div className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
