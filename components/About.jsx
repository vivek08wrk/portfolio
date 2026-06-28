import Reveal from "./Reveal";
import TechBadge from "./TechBadge";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  Backend: ["Node.js", "Express", "REST APIs", "Socket.IO", "Microservices"],
  Database: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Firebase"],
  "Cloud & DevOps": ["AWS EC2 / RDS", "Docker", "Cloudflare R2", "Vercel", "Nginx"],
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-300/90">
            <span className="h-px w-8 bg-fuchsia-300/50" />
            About me
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white">
            I take products from idea to deployment.
          </h2>

          {/* Quick-facts panel */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <dl className="space-y-3.5 text-sm">
              <Fact label="Based in" value="Dehradun, India" />
              <Fact label="Role" value="Full-Stack Developer" />
              <Fact label="Core stack" value="MERN · Next.js · AWS" />
              <Fact label="Status">
                <span className="inline-flex items-center gap-1.5 font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Available for work
                </span>
              </Fact>
            </dl>

            <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-5">
              <FactLink href="https://github.com/vivek08wrk" label="GitHub">
                <GitHubIcon className="h-4 w-4" />
              </FactLink>
              <FactLink href="https://linkedin.com/in/05viveksingh" label="LinkedIn">
                <LinkedInIcon className="h-4 w-4" />
              </FactLink>
              <FactLink href="mailto:vivekrawat08wrk@gmail.com" label="Email">
                <MailIcon className="h-4 w-4" />
              </FactLink>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-zinc-400">
            <p>
              I&apos;m a full-stack developer based in Dehradun, India. I enjoy
              owning the whole lifecycle — designing APIs, building responsive
              interfaces, and wiring up the cloud infrastructure to run it all in
              production.
            </p>
            <p>
              Recently I built{" "}
              <span className="text-zinc-200">Proofly</span>,{" "}
              <span className="text-zinc-200">SkillSphere</span>, and{" "}
              <span className="text-zinc-200">CineBharat</span> — covering
              authentication, Stripe payments, real-time sync, and an
              event-driven microservices architecture deployed on AWS.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-3 text-sm font-semibold text-white">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((t) => (
                    <TechBadge key={t} name={t} size="md" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ label, value, children }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-zinc-500">{label}</dt>
      <dd className="text-right font-medium text-zinc-200">{value ?? children}</dd>
    </div>
  );
}

function FactLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all hover:border-white/30 hover:text-white"
    >
      {children}
    </a>
  );
}
