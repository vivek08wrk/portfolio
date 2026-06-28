import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-300/90">
              <span className="h-px w-8 bg-fuchsia-300/50" />
              Selected work
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              Full-stack apps, shipped end&nbsp;to&nbsp;end.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            A mix of full-stack SaaS, microservices, and real-time apps — each
            built, deployed, and running live.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
