# Portfolio revamp plan

## Confirmed direction

- Keep the existing React + Vite application. Next.js/App Router and `next/font` will not be introduced.
- Recreate the requested structure with React Router, TypeScript, Tailwind, static route data, and a prebuild Medium RSS step.
- Dark editorial identity: ink background, paper text, marigold primary accent, teal secondary accent, Fraunces headings, Inter body, and JetBrains Mono labels.
- Core story: **“Built in Purvanchal, for the real world.”** Projects show **From Register to Software**, and project pages/footer carry **Built in Mau**.
- No invented numbers, clients, quotes, dates, links, or outcomes. Phase 2 starts after the missing real material is supplied.

## Pages to add or replace

| URL | Page | Purpose |
|---|---|---|
| `/` | Home | Hero → proof → about → services → selected work → process → stack → experience → writing → testimonials → FAQ → contact |
| `/work/:slug` | Project case study | Concise project summary for Mau Care, UnMask, and Hustlers; invalid slugs use the friendly not-found view |
| `/now` | Now | What Aryan is building, learning, reading, and current availability |
| `/notes` | Notes | Medium feed plus local Markdown notes/fallback entries |
| `/resume` | Resume | Accessible web resume, PDF download, and LinkedIn link |
| `*` | Not found | Friendly custom 404 with a clear route home |

The old public `/projects/:id` links will redirect to the matching `/work/:slug` URL so existing links do not break. `/admin` remains unchanged and outside the public portfolio navigation; public project content will no longer read from its database records.

## Files to create

### Data and content

- `src/data/projects.ts` — the only public project source; typed `Project` model and the three records with `tags: string[]`, URLs, image data, old/new ways, concise case-study fields, results, learnings, and Medium fields.
- `src/data/site.ts` — profile, availability, services, process, stack, FAQs, verified proof figures, social links, and contact constants.
- `src/data/mediumFallback.ts` — manually maintained article fallback used only when RSS cannot be read.
- `src/data/mediumFeed.generated.ts` — generated article snapshot consumed by the app.
- `src/data/notes.ts` — local Markdown note metadata and content.
- `scripts/fetch-medium.ts` — fetch and safely parse the Medium RSS feed before development/build; on failure, write the fallback list.

### Shared components

- `src/components/layout/SiteHeader.tsx` — logo, desktop navigation, accessible mobile menu, and contact action.
- `src/components/layout/SiteFooter.tsx` — logo, page links, “Built in Mau” badge, and required footer line.
- `src/components/layout/PageShell.tsx` — consistent header/main/footer framing.
- `src/components/seo/PageMeta.tsx` — per-route title, description, canonical URL, Open Graph/Twitter tags, and optional JSON-LD.
- `src/components/shared/BuiltInMauBadge.tsx` — reusable location badge.
- `src/components/shared/SectionHeading.tsx` — consistent editorial section heading.
- `src/components/shared/FadeUp.tsx` — progressive enhancement only: content is visible by default and motion is disabled for reduced-motion users.
- `src/components/shared/StatusBadge.tsx` — live/in-development project status.
- `src/components/shared/ProjectLinks.tsx` — Live, GitHub, or in-development state with safe external-link attributes.

### Home sections

- `src/components/home/ProofStrip.tsx`
- `src/components/home/Services.tsx`
- `src/components/home/SelectedWork.tsx`
- `src/components/home/Process.tsx`
- `src/components/home/TechStack.tsx`
- `src/components/home/Writing.tsx`
- `src/components/home/Testimonials.tsx`
- `src/components/home/Faq.tsx`
- `src/components/home/NowBoard.tsx` — compact building/learning/availability board linked to `/now`.

Existing `Hero`, `About`, `Experience`, and `Contact` files will be retained but rebuilt as listed below.

### Case study and supporting pages

- `src/pages/WorkDetail.tsx` — shared `/work/:slug` case-study page with project lookup, article metadata, snapshot, old/new comparison, gallery, conditional results, Medium action, next project, and contact action.
- `src/pages/Now.tsx`
- `src/pages/Notes.tsx`
- `src/pages/Resume.tsx`
- `src/components/work/ProjectSnapshot.tsx`
- `src/components/work/RegisterToSoftware.tsx`
- `src/components/work/ScreenshotGallery.tsx`
- `src/components/notes/ArticleList.tsx`

### Brand and supplied media targets

- `public/logo.svg` — exact supplied SVG.
- `public/apple-touch-icon.png` — 180×180 raster export of the logo.
- `public/og-image.png` — 1200×630 branded social image based on the same logo and identity.
- `src/assets/projects/mau-care-cover.webp.asset.json`
- `src/assets/projects/mau-care-01.webp.asset.json`
- `src/assets/projects/mau-care-02.webp.asset.json`
- `src/assets/projects/mau-care-03.webp.asset.json`
- `src/assets/projects/unmask-cover.webp.asset.json`
- `src/assets/projects/unmask-01.webp.asset.json`
- `src/assets/projects/unmask-02.webp.asset.json`
- `src/assets/projects/unmask-03.webp.asset.json`
- `src/assets/projects/hustlers-cover.webp.asset.json`
- `src/assets/projects/hustlers-01.webp.asset.json`
- `src/assets/projects/hustlers-02.webp.asset.json`
- `src/assets/projects/hustlers-03.webp.asset.json`
- `src/assets/resume.pdf.asset.json`

The asset pointer names above are the intended targets; they will be created from the real files you provide, not mockups.

## Files to change

- `package.json` — add RSS generation to `predev`/`prebuild`; add only the small parsing dependency if the native parser is insufficient.
- `src/App.tsx` — register `/work/:slug`, `/now`, `/notes`, `/resume`, redirects, and not-found routing; remove theme-switching behavior because the requested identity is dark-only.
- `src/main.tsx` — keep the app bootstrap and remove the devtools blocker, which harms accessibility/performance and does not protect source code.
- `src/pages/Index.tsx` — assemble the homepage once, in the exact requested order, and add Person JSON-LD.
- `src/pages/NotFound.tsx` — simplify into the new friendly branded 404.
- `src/components/Hero.tsx` — use the supplied title/copy/buttons/status with one H1 and no duplicated hero.
- `src/components/About.tsx` — use the supplied Mau/Purvanchal story in an editorial bento layout.
- `src/components/Experience.tsx` — retain the CBSE exam-prep role using only verified details supplied by Aryan; remove any unsupported claims.
- `src/components/Contact.tsx` — preserve validation, honeypot, AI spam check, loading/success/error states; add visible labels, exact copy, 24-hour promise, email, and WhatsApp once supplied; fix the current ref warning.
- `src/components/Header.tsx` — replaced internally by the new shared header or reduced to a compatibility export.
- `src/components/Footer.tsx` — replaced internally by the new shared footer or reduced to a compatibility export.
- `src/components/Projects.tsx` — replace filtering and database loading with the three typed project cards, real images, proper tag arrays, and complete link/status states.
- `src/index.css` — replace every indigo/purple token and decorative orb with the specified dark editorial palette, grain, ruled lines, type roles, focus states, and reduced-motion behavior.
- `tailwind.config.ts` — map Fraunces/Inter/JetBrains Mono and the semantic color/token system.
- `index.html` — set static fallback metadata, theme color, favicon, Apple icon, and remove duplicate/stale social tags and old font links.
- `public/robots.txt` — preserve crawler access and sitemap reference; retain the admin exclusion.
- `public/sitemap.xml` — include `/`, `/now`, `/notes`, `/resume`, and all three `/work/...` routes; remove obsolete project URLs and omit synthetic `lastmod` dates.
- `README.md` — explain what changed, where projects are edited, how the Medium feed/fallback works, where Medium links go, and list remaining placeholders.
- `vite.config.ts` — add only the minimal static/Markdown support needed for notes if required.
- `vercel.json` — confirm SPA rewrites cover every new public URL and adjust only if needed.

## Files to remove after replacements are wired

- `src/data/caseStudies.ts` — superseded by `src/data/projects.ts`.
- `src/components/Engineering.tsx` — split into Services, Process, and Tech Stack.
- `src/components/Testimonials.tsx` — superseded by the verified home testimonial component; it will render nothing until genuine quotes are supplied.
- `src/components/SplashScreen.tsx` — remove the blocking splash so content never stays hidden and startup is faster.
- `src/components/ThemeToggle.tsx` — remove light/dark switching for the single specified dark brand.
- `src/components/Marquee.tsx` — not part of the requested structure.
- `src/assets/logo-brainx.png` — BrainX is not in the new three-project set.

Old unused logo/profile assets will be removed only after a final reference search confirms they are no longer used.

## Build details

### Home

- Keep one hero and one H1. The proof strip shows only figures Aryan confirms; if none are supplied, the strip stays out rather than displaying placeholders publicly.
- About and Services use an un-nested bento grid. Selected Work uses large screenshot-led editorial cards without filters.
- Testimonials follow the requested order but stay absent until genuine quotes are supplied.
- The Now board appears within About as the third recurring site idea and links to the full `/now` page.

### Projects

- Use Mau Care, UnMask, and Hustlers only.
- Every card displays its real cover and one valid action state: Live, GitHub, both, or In development.
- Every case study includes the exact requested section order. Results are conditional. Medium buttons are external and safe; missing links produce a truly disabled “Full case study coming soon” control.
- Gallery objects will include `src`, `alt`, and `caption`, with three to five real images per project.

### Writing

- `predev` and `prebuild` fetch Medium RSS and generate a typed local snapshot.
- Failed RSS fetches never break the site; the static fallback is used.
- Because this remains React + Vite, RSS is refreshed during preview/build rather than by a Next.js server at request time.
- `/notes` combines Medium entries with short local Markdown notes while clearly distinguishing external articles.

### SEO and accessibility

- Unique route metadata through the existing head manager, canonical URLs on the published domain, Person JSON-LD on home, and Article/CreativeWork-style JSON-LD for case studies.
- In a Vite SPA, dynamic route metadata is applied in the browser; crawlers that do not run JavaScript receive the site-wide static fallback from `index.html`.
- One H1 per page, semantic landmarks, keyboard-operable controls, visible focus rings, 12px minimum labels, useful alternative text, and AA contrast checks.

### Quality checks

- Test interactions, page routing, forms, external links, missing project slugs, RSS fallback, and disabled Medium actions.
- Review at 360px, 768px, and 1280px with screenshots and check for overflow, empty gaps, duplicate content, and hidden animation states.
- Run focused tests and inspect build/runtime/console/network diagnostics.
- Run an accessibility/performance audit and address issues within the constraints of the SPA and supplied media.

## Required material before Phase 2

Please provide these after approving the plan:

1. Medium username or exact RSS URL.
2. WhatsApp number with country code and the public contact email.
3. LinkedIn URL.
4. Current resume PDF.
5. Mau Care: live URL, GitHub URL if public, role, timeline, year, status, stack, real results, learnings, Medium URL/date, one cover, and 3–5 screenshots with captions.
6. UnMask: the same set of details and images.
7. Hustlers: the same set, including at least a GitHub/live URL or confirmation that it is in development.
8. Three or four verified proof-strip numbers, including what each number measures.
9. Current “Now” details: building, learning, and reading.
10. Verified CBSE exam-prep experience details, including organization, title, dates, and only claims/numbers you can support.
11. Genuine testimonials with name, role/company, quote, and permission to publish; otherwise the section will stay hidden.
12. FAQ answers you want published, or approval for factual answers based only on supplied portfolio information.
13. Any local Markdown notes you want launched on day one.

## Phase boundary

No application code or visual assets will be changed in Phase 1. After approval and receipt of the required real material, Phase 2 will implement the pages, data model, routing, content structure, and integrations. Phase 3 will apply the final visual system, responsive polish, accessibility, performance checks, README, and the final unresolved-placeholder checklist.
