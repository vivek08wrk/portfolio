# Vivek Singh — Portfolio

A modern, single-page developer portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. Dark, spacious design with floating gradient glows, animated scroll reveals, and a project grid.

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- Google Fonts via `next/font` (Inter + Space Grotesk)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Customizing

| What | Where |
|------|-------|
| Projects (title, description, tech, links) | `lib/projects.js` |
| Project screenshots | `public/projects/` (see the README in that folder) |
| Hero text & social links | `components/Hero.jsx` |
| About bio & tech stack | `components/About.jsx` |
| Contact email & links | `components/Contact.jsx` |
| Stats numbers | `components/Stats.jsx` |
| Résumé file | `public/resume.pdf` |
| Colors / animations | `tailwind.config.js` and `app/globals.css` |

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com/new) — it deploys automatically with zero config.

```bash
npm run build   # production build
npm start       # serve the production build locally
```
