import Reveal from "./Reveal";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora opacity-20 blur-[100px]" />

          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-300/90">
            <span className="h-px w-8 bg-fuchsia-300/50" />
            Let&apos;s connect
            <span className="h-px w-8 bg-fuchsia-300/50" />
          </p>

          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Have a role or project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-zinc-400">
            I&apos;m open to full-stack developer roles and freelance work. Drop
            a message — I usually reply within a day.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:vivekrawat08wrk@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              <MailIcon className="h-4 w-4" />
              vivekrawat08wrk@gmail.com
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              View résumé
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <Social href="https://github.com/vivek08wrk" label="GitHub">
              <GitHubIcon />
            </Social>
            <Social href="https://linkedin.com/in/05viveksingh" label="LinkedIn">
              <LinkedInIcon />
            </Social>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/30 hover:text-white"
    >
      {children}
    </a>
  );
}
