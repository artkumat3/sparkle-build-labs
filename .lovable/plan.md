## Goal

Move the portfolio from "promising student" to "developer who ships production-grade systems" by tightening copy, adding technical depth, and giving each project a real case-study page.

## 1. Sharper hero + about

**Hero (`src/components/Hero.tsx`)**
- Replace tagline with: *"Full-stack developer building AI-powered web apps and automation systems that eliminate repetitive work."*
- Sub-line drops generic phrases, mentions stack (React, Next.js, Python, Supabase, OpenAI).
- Add 3 metric chips under CTA: *"6+ shipped projects · 70% manual work reduced · 500+ ad scans automated"* (numbers from existing project context).

**About (`src/components/About.tsx`)**
- Rewrite to be specific and evidence-led: full-stack apps + AI automation for small businesses and startups; concrete examples (ad-transparency platform, exam-prep platform, workflow bots).
- Replace filler ("opportunity to solve real problems...") with what you actually engineer.

## 2. Replace Services with an Engineering section

`src/components/Services.tsx` becomes `src/components/Engineering.tsx` (and is renamed in `Index.tsx`):
- **Tech Stack** grid grouped by Frontend / Backend / AI & Data / Infra: React, Next.js, TypeScript, Tailwind, Python, FastAPI, Supabase/Postgres, Prisma, OpenAI, LangChain, Vercel, Docker, Redis.
- **Engineering Approach** — 3 short cards: *Ship fast, measure*, *Automate the boring*, *Design for scale*.

## 3. Project detail pages as case studies

`src/pages/ProjectDetail.tsx` already exists for DB-backed projects. Upgrade it + cover the seed projects too:

- Add a static `src/data/caseStudies.ts` keyed by slug (`unmask`, `mau-care`, `brainx`) with: tagline, problem, role, stack, architecture bullets, challenges, outcomes/metrics, screenshots placeholder.
- `ProjectDetail` first checks the case-study map by `:id`, falls back to Supabase fetch by UUID. Renders sections: Overview · Problem · My Role · Tech Stack · Architecture · Challenges · Outcomes · Tags.
- Update `Projects.tsx` so seed projects link to `/projects/unmask`, `/projects/mau-care`, etc., and DB projects keep linking by UUID.

Seed copy uses the user's tightened versions (e.g. UnMask one-liner from the brief; Mau Care framed as a real local-problem build with auth/payments/scale notes).

## 4. Authentic testimonials

`src/components/Testimonials.tsx`:
- Rewrite 3 quotes to sound human and specific (e.g. *"Aryan automated our weekly reporting and cut it from ~4 hours to under 10 minutes."*).
- Add role + company line under each name.

## 5. Small polish

- `Header.tsx` nav: rename "Services" link to "Engineering"; add "Projects" anchor.
- `index.html` `<title>`/meta description updated to match new positioning.
- Memory: update `mem://design/layout/project-display` note to mention case-study detail pages.

## Out of scope (call out, don't do)

- Real screenshots/GIFs of Mau Care / UnMask — placeholder slots added; you'll drop assets later via the admin panel or `src/assets`.
- Resume PDF rewrite.
- Removing Testimonials entirely (kept but rewritten — say the word and I'll drop the section).

## Technical notes

- No DB schema changes. Case-study content lives in code (`src/data/caseStudies.ts`) so it's versioned and fast to edit.
- `ProjectDetail` route param accepts both slugs and UUIDs; static lookup first, Supabase second.
- All new copy stays within existing dark theme + framer-motion patterns; no new deps.
