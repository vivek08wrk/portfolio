// Central registry of technologies → brand icon + color.
// Used for: tech badges (icon before name), the marquee, and the background field.

import { FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiMongoose,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiCloudflare,
  SiNginx,
  SiVercel,
  SiGit,
  SiGithub,
  SiStripe,
  SiJsonwebtokens,
} from "react-icons/si";

// Raw list — entries whose icon is unavailable in this react-icons version
// are filtered out below, so nothing ever renders as `undefined`.
const RAW = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#E5E7EB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Redux", Icon: SiRedux, color: "#A78BFA" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#8B5CF6" },
  { name: "Material UI", Icon: SiMui, color: "#3B82F6" },
  { name: "Shadcn UI", Icon: SiShadcnui, color: "#E5E7EB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#D4D4D8" },
  { name: "Socket.IO", Icon: SiSocketdotio, color: "#D4D4D8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4F86C6" },
  { name: "Prisma", Icon: SiPrisma, color: "#7C8AF0" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", Icon: SiMongoose, color: "#C0563A" },
  { name: "Redis", Icon: SiRedis, color: "#FF5B49" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
  { name: "Nginx", Icon: SiNginx, color: "#22B573" },
  { name: "Vercel", Icon: SiVercel, color: "#E5E7EB" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#E5E7EB" },
  { name: "Stripe", Icon: SiStripe, color: "#7C7BFF" },
  { name: "JWT", Icon: SiJsonwebtokens, color: "#EC4899" },
];

export const TECH_LIST = RAW.filter((t) => typeof t.Icon === "function");

const MAP = Object.fromEntries(TECH_LIST.map((t) => [t.name.toLowerCase(), t]));

// Map the various names used across the site to a registry entry.
// `null` = intentionally no icon (concept, not a branded tool).
const ALIASES = {
  "nextjs": "Next.js",
  "redux toolkit": "Redux",
  "prisma orm": "Prisma",
  "aws ec2 / rds": "AWS",
  "aws ec2": "AWS",
  "aws rds": "AWS",
  "cloudflare r2": "Cloudflare",
  "rest apis": null,
  "rest api": null,
  "rest api design": null,
  "microservices": null,
  "microservices architecture": null,
  "ai insights": null,
  "qr code": null,
  "state management": null,
};

export function getTech(name) {
  if (!name) return null;
  const key = name.toLowerCase().trim();
  if (MAP[key]) return MAP[key];
  if (key in ALIASES) {
    const alias = ALIASES[key];
    return alias ? MAP[alias.toLowerCase()] || null : null;
  }
  // Fuzzy: e.g. "AWS EC2 / RDS" contains "aws"
  const hit = TECH_LIST.find((t) => key.includes(t.name.toLowerCase()));
  return hit || null;
}
