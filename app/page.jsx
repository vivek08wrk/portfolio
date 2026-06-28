import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechField from "@/components/TechField";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fixed ambient background — floating tech icons + glows + blueprint grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
        <TechField />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/15 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px] animate-float" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <TechMarquee />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
