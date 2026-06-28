import { TECH_LIST } from "@/lib/tech";

// Fixed positions so the layout is stable (no randomness needed).
// Each entry: vertical %, horizontal %, icon size (px), float animation class.
const SPOTS = [
  { top: "8%", left: "6%", size: 46, anim: "animate-float" },
  { top: "14%", left: "84%", size: 58, anim: "animate-float-slow" },
  { top: "22%", left: "46%", size: 34, anim: "animate-float" },
  { top: "30%", left: "16%", size: 40, anim: "animate-float-slow" },
  { top: "26%", left: "70%", size: 50, anim: "animate-float" },
  { top: "40%", left: "90%", size: 36, anim: "animate-float-slow" },
  { top: "46%", left: "4%", size: 52, anim: "animate-float" },
  { top: "52%", left: "58%", size: 42, anim: "animate-float-slow" },
  { top: "58%", left: "30%", size: 34, anim: "animate-float" },
  { top: "64%", left: "82%", size: 48, anim: "animate-float" },
  { top: "70%", left: "12%", size: 40, anim: "animate-float-slow" },
  { top: "76%", left: "50%", size: 56, anim: "animate-float" },
  { top: "82%", left: "72%", size: 36, anim: "animate-float-slow" },
  { top: "88%", left: "22%", size: 44, anim: "animate-float" },
  { top: "92%", left: "92%", size: 38, anim: "animate-float-slow" },
  { top: "12%", left: "30%", size: 32, anim: "animate-float-slow" },
  { top: "36%", left: "38%", size: 30, anim: "animate-float" },
  { top: "68%", left: "44%", size: 32, anim: "animate-float-slow" },
];

export default function TechField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {SPOTS.map((s, i) => {
        const t = TECH_LIST[i % TECH_LIST.length];
        const Icon = t.Icon;
        return (
          <Icon
            key={i}
            aria-hidden="true"
            className={`absolute ${s.anim}`}
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              color: t.color,
              opacity: 0.06,
              animationDelay: `${(i % 6) * 0.7}s`,
            }}
          />
        );
      })}
    </div>
  );
}
