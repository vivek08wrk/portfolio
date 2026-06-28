export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Vivek Singh. Built with Next.js &amp;
          Tailwind CSS.
        </p>
        <a
          href="#top"
          className="text-sm text-zinc-500 transition-colors hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
