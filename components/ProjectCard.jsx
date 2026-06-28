import { ArrowUpRightIcon, CodeIcon } from "./Icons";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project }) {
  const { title, tagline, description, tech, live, code, accent, image } = project;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
      {/* Image / placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <Placeholder title={title} accent={accent} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500">{tagline}</p>
          </div>
          <span
            className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${accent}`}
          />
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-fuchsia-300"
          >
            Live demo
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <span className="text-white/15">/</span>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <CodeIcon className="h-4 w-4" />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}

function Placeholder({ title, accent }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-surface">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-20`} />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -inset-x-10 -top-10 h-40 bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
      <span className="relative font-display text-2xl font-bold tracking-tight text-white/90">
        {title}
      </span>
    </div>
  );
}
