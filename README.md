# Portfolio — Md. Nafiul Islam

Personal portfolio of **Md. Nafiul Islam**, a Computer Science & Engineering student at BAIUST
building towards full-stack web development.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, HeroUI, EmailJS
and the Gemini API.

## Getting started

```bash
npm install
cp docs/environment.md .env   # then fill in the values (see the file for the exact keys)
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command         | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Development server with Turbopack  |
| `npm run build` | Production build                   |
| `npm start`     | Serve the production build         |
| `npm run lint`  | ESLint                             |

## Structure

```text
app/
  page.tsx                 Home: hero, stack, GitHub activity, projects, contact
  about/                   Background, focus areas, toolkit
  skills/                  Skills grouped by area of work
  tech-stack/              Technologies by category
  projects/                Curated projects + live GitHub repository list
  projects/[slug]/         Per-project detail page
  contact/                 Contact form
  api/assistant/           Gemini-backed portfolio assistant (server-only)
  opengraph-image.tsx      Generated social share card
  sitemap.ts, robots.ts    SEO
components/
  layout/                  Navbar, Footer
  sections/                Home page sections
  projects/                Project card
  contact/                 Contact form
  assistant/               Floating assistant UI
  shared/                  Section, SectionHeading, Tag, TechnologyCard
  background/              Interactive dot grid
lib/                       GitHub API and assistant context
utils/                     Site config, projects, skills, technologies
```

## Content rules

Everything rendered comes from `utils/site.ts`, `utils/projects.ts`, `utils/skills.ts` and
`utils/technologies.ts`. The Gemini assistant is grounded in the same data, so it cannot describe
work that is not on the site. To change a fact, change it in one place.

## Environment variables

See [docs/environment.md](docs/environment.md).
