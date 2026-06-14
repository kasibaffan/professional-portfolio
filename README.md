# Portfolio — Mohammad Kasib Affan

Personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```
src/
├── app/                  # Routes (home, project detail pages, sitemap, robots, contact API)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, About, Projects, Contact, ...)
│   └── ui/               # Reusable primitives (Tag, FadeIn, ArchitectureDiagram, ...)
├── data/                 # Content — site config, projects, skills, certifications, experience
└── lib/                  # GitHub API helpers, formatting utilities
```

## Content

Almost everything on the site is data-driven from `src/data/`:

- `site.ts` — name, roles, bio, contact links, research interests, engineering principles
- `projects.ts` — project case studies shown on the homepage and `/projects/[slug]`
- `skills.ts`, `certifications.ts`, `experience.ts` — technical expertise, certifications, timeline

Update these files to change the site's content without touching components.

## Contact Form

The contact form posts to `src/app/api/contact/route.ts`, which sends email via [Resend](https://resend.com).
To enable it, set the following environment variables (e.g. in `.env.local` or your hosting provider):

```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=you@example.com
RESEND_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

Without `RESEND_API_KEY`, the form will return a friendly error asking visitors to email you directly.

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/new) or [Netlify](https://www.netlify.com/). Set the environment variables above in your hosting provider's dashboard.
