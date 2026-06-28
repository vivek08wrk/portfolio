"use client";

import { motion } from "framer-motion";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowRightIcon,
  SparkIcon,
} from "./Icons";
import { getTech } from "@/lib/tech";

const EASE = [0.21, 0.47, 0.32, 0.98];

// Headline broken into lines → words so each word can animate independently.
const LINES = [
  [{ t: "Full-stack" }, { t: "developer" }],
  [{ t: "building" }, { t: "fast,", accent: true }, { t: "reliable", accent: true }],
  [{ t: "web" }, { t: "products." }],
];

const headlineWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.2 } },
};

const wordReveal = {
  hidden: { y: "120%", opacity: 0, filter: "blur(10px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-28 pb-16"
    >
      <div className="grid w-full items-stretch gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div>
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities · Dehradun, India
          </motion.div>

          <motion.h1
            variants={headlineWrap}
            initial="hidden"
            animate="show"
            className="font-display text-5xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl"
          >
            {LINES.map((line, li) => (
              <span key={li} className="block">
                {line.map((w, wi) => (
                  <span
                    key={wi}
                    className="inline-block overflow-hidden pb-[0.12em] pr-[0.25em] align-bottom"
                  >
                    <motion.span
                      variants={wordReveal}
                      className={`inline-block ${w.accent ? "text-aurora" : ""}`}
                    >
                      {w.t}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1.0}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            I&apos;m{" "}
            <span className="font-medium text-zinc-200">Vivek Singh</span> — a
            MERN &amp; Next.js developer focused on clean architecture, real-time
            features, and cloud deployment. I build and ship{" "}
            <span className="font-medium text-zinc-200">
              production-grade web apps
            </span>{" "}
            end to end.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={1.15}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <SparkIcon className="h-4 w-4 text-fuchsia-300" />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1.3}
            initial="hidden"
            animate="show"
            className="mt-10 flex items-center gap-3"
          >
            <SocialLink href="https://github.com/vivek08wrk" label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/05viveksingh" label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="mailto:vivekrawat08wrk@gmail.com" label="Email">
              <MailIcon />
            </SocialLink>
          </motion.div>
        </div>

        {/* Right — floating code card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          className="relative hidden h-full lg:flex lg:flex-col"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-full flex-col justify-between gap-5"
          >
            <TechStrip />
            <CodeCard />
            <StatusCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const STRIP = ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Docker"];

function TechStrip() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
      <div className="mb-3.5 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Daily drivers
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          live stack
        </span>
      </div>
      <div className="flex items-center justify-between">
        {STRIP.map((name) => {
          const t = getTech(name);
          const Icon = t?.Icon;
          return (
            <div
              key={name}
              className="group/icon flex flex-col items-center gap-2"
              title={name}
            >
              {Icon ? (
                <Icon
                  className="h-7 w-7 transition-transform duration-300 group-hover/icon:scale-110"
                  style={{ color: t.color }}
                  aria-hidden="true"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatusCard() {
  return (
    <a
      href="#contact"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">Open to full-stack roles</p>
          <p className="text-xs text-zinc-500">Freelance &amp; full-time</p>
        </div>
      </div>
      <span className="text-sm font-medium text-zinc-400 transition-all group-hover:translate-x-0.5 group-hover:text-white">
        Say hello →
      </span>
    </a>
  );
}

function CodeCard() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-4 rounded-3xl bg-aurora opacity-20 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c14]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-zinc-500">developer.js</span>
        </div>

        {/* code */}
        <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-relaxed">
          <code className="font-mono">
            <Line>
              <K>const</K> <V>vivek</V> <P>=</P> <P>{"{"}</P>
            </Line>
            <Line indent>
              <Key>role</Key>
              <P>:</P> <S>&quot;Full-Stack Developer&quot;</S>
              <P>,</P>
            </Line>
            <Line indent>
              <Key>location</Key>
              <P>:</P> <S>&quot;Dehradun, India&quot;</S>
              <P>,</P>
            </Line>
            <Line indent>
              <Key>stack</Key>
              <P>:</P> <P>[</P>
              <S>&quot;React&quot;</S>
              <P>,</P> <S>&quot;Next.js&quot;</S>
              <P>,</P> <S>&quot;Node&quot;</S>
              <P>],</P>
            </Line>
            <Line indent>
              <Key>focus</Key>
              <P>:</P> <P>[</P>
              <S>&quot;APIs&quot;</S>
              <P>,</P> <S>&quot;real-time&quot;</S>
              <P>,</P> <S>&quot;cloud&quot;</S>
              <P>],</P>
            </Line>
            <Line indent>
              <Key>available</Key>
              <P>:</P> <B>true</B>
              <P>,</P>
            </Line>
            <Line>
              <P>{"}"}</P>
              <P>;</P>
              <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] animate-pulse bg-fuchsia-300" />
            </Line>
          </code>
        </pre>
      </div>
    </div>
  );
}

/* Tiny syntax-highlight helpers */
const Line = ({ children, indent }) => (
  <div className={indent ? "pl-5" : ""}>{children}</div>
);
const K = ({ children }) => <span className="text-fuchsia-300">{children}</span>;
const V = ({ children }) => <span className="text-sky-300">{children}</span>;
const Key = ({ children }) => <span className="text-violet-300">{children}</span>;
const S = ({ children }) => <span className="text-emerald-300">{children}</span>;
const B = ({ children }) => <span className="text-orange-300">{children}</span>;
const P = ({ children }) => <span className="text-zinc-500">{children}</span>;

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/30 hover:text-white"
    >
      {children}
    </a>
  );
}
