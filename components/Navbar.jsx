"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto mt-3 max-w-5xl px-4 sm:mt-4">
        <div
          className={`flex items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-base/70 shadow-lg shadow-black/40 backdrop-blur-xl"
              : "border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
          }`}
        >
          {/* Brand */}
          <a href="#top" className="group flex items-center gap-2.5 pl-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-aurora text-sm font-bold text-white shadow-lg shadow-fuchsia-500/25 transition-transform group-hover:scale-105">
              V
            </span>
            <span className="font-display text-base font-bold tracking-tight text-white">
              Vivek<span className="text-zinc-500">.dev</span>
            </span>
          </a>

          {/* Links with sliding highlight */}
          <div
            className="relative hidden items-center md:flex"
            onMouseLeave={() => setHover(null)}
          >
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onMouseEnter={() => setHover(i)}
                className="relative rounded-full px-4 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {hover === i && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition-transform hover:scale-[1.04] md:inline-block"
            >
              Résumé
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5 md:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mt-2 max-w-5xl px-4 md:hidden"
        >
          <div className="rounded-2xl border border-white/10 bg-base/95 p-2 backdrop-blur-xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block rounded-xl bg-white/5 px-3 py-2.5 text-sm font-semibold text-white"
            >
              Résumé →
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
