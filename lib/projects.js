// Project data for the portfolio.
//
// To add a real screenshot for any project:
//   1. Save an image (1200x750 works well) to:  public/projects/<slug>.jpg
//   2. Set its `image` field below to:           "/projects/<slug>.jpg"
// Until then, a styled gradient placeholder is shown automatically.

export const projects = [
  {
    slug: "proofly",
    title: "Proofly",
    tagline: "Photo proofing SaaS for photographers",
    description:
      "A full-stack platform where photographers create client projects, share public gallery links, and track selections in real time. Features direct browser-to-Cloudflare R2 uploads via presigned URLs, Sharp-based image processing, and live sync over Socket.IO.",
    tech: ["Next.js", "TypeScript", "Express", "MongoDB", "Socket.IO", "Cloudflare R2"],
    live: "https://proofly-two.vercel.app",
    code: "https://github.com/vivek08wrk/proofly",
    accent: "from-violet-500 to-fuchsia-500",
    image: null,
    featured: true,
  },
  {
    slug: "skillsphere",
    title: "SkillSphere",
    tagline: "Microservices online learning platform",
    description:
      "A production-ready learning platform built as 5 independently containerized services (Auth, User, Course, Payment, Notification) on AWS EC2 with Docker Compose, an API Gateway, Redis Pub/Sub events, and Stripe-powered enrollment.",
    tech: ["Node.js", "Next.js", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS", "Stripe"],
    live: "https://skill-sphere-eta.vercel.app",
    code: "https://github.com/vivek08wrk/SkillSphere",
    accent: "from-sky-500 to-indigo-500",
    image: null,
    featured: true,
  },
  {
    slug: "cinebharat",
    title: "CineBharat",
    tagline: "Full-stack movie booking platform",
    description:
      "A MERN booking system with real-time seat availability, automated QR-code ticket generation, and a role-based admin dashboard for scheduling, seat management, and analytics. Secured end to end with JWT and role-based access control.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    live: "https://cine-bharat.vercel.app",
    code: "https://github.com/vivek08wrk/CineBharat",
    accent: "from-rose-500 to-orange-500",
    image: null,
    featured: true,
  },
  {
    slug: "gympro",
    title: "GymPro",
    tagline: "AI-powered gym management system",
    description:
      "A MERN gym management dashboard with attendance tracking, payment analytics, and smart insights. Helps gym owners monitor memberships and revenue with clean, data-driven views.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI Insights"],
    live: "https://gym-pro-eta.vercel.app",
    code: "https://github.com/vivek08wrk/GymPro",
    accent: "from-emerald-500 to-teal-500",
    image: null,
    featured: false,
  },
  {
    slug: "indikart",
    title: "IndiKart",
    tagline: "E-commerce web application",
    description:
      "An e-commerce app where users browse products, view detailed product pages, and manage a shopping cart. Built with React and Redux for state management and Firebase for data and auth.",
    tech: ["React", "Redux", "Firebase", "Tailwind CSS"],
    live: "https://indi-kart-ter2.vercel.app",
    code: "https://github.com/vivek08wrk/IndiKart",
    accent: "from-amber-500 to-orange-500",
    image: null,
    featured: false,
  },
  {
    slug: "searchflix",
    title: "SearchFlix",
    tagline: "Modern movie search app",
    description:
      "A fast, responsive movie search experience built with the Next.js App Router and Tailwind CSS, with a clean UI and instant results.",
    tech: ["Next.js", "Tailwind CSS", "REST API"],
    live: "https://search-flix-pied.vercel.app",
    code: "https://github.com/vivek08wrk/SearchFlix",
    accent: "from-cyan-500 to-blue-500",
    image: null,
    featured: false,
  },
];
