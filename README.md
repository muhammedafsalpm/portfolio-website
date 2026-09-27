# Muhammed Afsal P M — Portfolio

Personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Editing content

All text, links, experience, projects and certifications live in one file:

```
src/data/profile.ts
```

- Resume PDF: `public/Muhammed_Afsal_P_M_Resume.pdf` (path set in `profile.resume`)
- Add a project: append to the `projects` array (optional `github` / `demo` links)
- Add a job: prepend to the `experience` array

## Project structure

```
src/
├─ app/          layout, page, global styles, SEO (OG image, sitemap, robots, favicon)
├─ components/   Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
├─ data/         profile.ts — all site content
└─ lib/          site.ts — production URL
```

## Deploy (Vercel)

1. Push to GitHub (`main`).
2. Vercel → **Add New Project** → import `portfolio-website` → **Deploy** (defaults work).
3. Every push to `main` redeploys automatically.

Optional: set `NEXT_PUBLIC_SITE_URL` in Vercel if you add a custom domain.
