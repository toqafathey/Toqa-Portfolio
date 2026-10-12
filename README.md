# Toqa Fathey — Portfolio

Editorial, luxury-style portfolio for **Toqa Fathey, Social Media Specialist & Content Creator**.

Stack: React 18 · TypeScript · Tailwind CSS 3 · Three.js (plain Three.js, no React Three Fiber) · Vite · lucide-react.

> **Build status:** the code was written in a workspace where the npm registry was blocked, so `npm install`, the
> TypeScript check and `npm run build` have **not been run yet**. Run them first (see below) and fix any small
> type or styling issues that appear. Nothing has been viewed in a browser yet either.

## Run it

```bash
npm install
npm run dev      # local preview
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

Requires Node 18+.

## Publish

`dist/` is a static site. Upload it to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Build command `npm run build`, output directory `dist`. No environment variables or backend are needed.
After deploying, set the canonical URL and Open Graph image in `index.html` (both are commented placeholders).

## Where to edit things

| What | File |
| --- | --- |
| Name, headline, intro, About copy, contact details, CV path, social links | `src/data/siteConfig.ts` |
| Career history (feeds the 3D timeline, the 2D fallback, and earlier experience) | `src/data/experienceData.ts` |
| Portfolio projects, status labels, categories, images | `src/data/projects.ts` |
| Skills, tools, approach, "what I bring", education | `src/data/content.ts` |
| Colors and fonts | `tailwind.config.js`, `index.html` (font link) |

## File overview

```
src/
  data/           types.ts, siteConfig.ts, experienceData.ts, projects.ts, content.ts
  lib/            hooks.ts (media queries, active section), webgl.ts, seo.ts
  styles/         index.css
  components/
    layout/       Navbar, Footer, SectionHeading, Reveal
    hero/         Hero, HeroGraphic
    about/        About, Skills (+ tools), Approach, TeamValue, Education
    portfolio/    Portfolio (filters), ProjectCard, ProjectModal (case study), StatusBadge
    timeline/     ExperienceTimeline (section, scroll + state), TimelineScene (React wrapper),
                  SceneController (Three.js scene), TimelinePath, TimelineMilestone,
                  CareerDetailPanel, CareerTimelineFallback, EarlierExperience
    contact/      Contact
public/
  images/profile, images/portfolio/{veterinary,healthcare,restaurant,advertising,seo},
  videos/portfolio, documents
```

## Assets I need from you

- A real portrait (optional), saved in `public/images/profile/`, then set `portraitSrc` in `siteConfig.ts`.
- Your CV as a PDF in `public/documents/`, then set `contact.cvPath` (e.g. `/documents/Toqa-Fathey-CV.pdf`).
- Work samples for each project: screenshots, post images, Reels/video files, article excerpts and links.
- Professional email, LinkedIn URL, and optionally phone and location.
- A 1200×630 social sharing image and a favicon (optional).

## Employment details to confirm

1. Employer name for August 2025–Present.
2. Employer name for July 2024–August 2025.
3. Whether the restaurant and café marketing work belongs to the July 2024–August 2025 role or a separate employer.
4. Whether the veterinary marketing work belongs to an existing role or a separate engagement.
5. Employer and dates for the earlier Customer Service role.
6. How any overlapping employment periods relate.
7. Whether the Abdelrahman Alaa course is ongoing or completed.

Until confirmed, all employers show as unspecified, the Customer Service role appears as "dates and employer not
provided" outside the timeline, and the veterinary and restaurant/café entries are **hidden** in
`experienceData.ts` (`hidden: true`, `kind: 'pending'`). Remove `hidden` to show one with an
"Employment Details Pending Confirmation" label, or fill in its dates and employer and set `kind: 'timeline'`.

## Replacing placeholders with real work

1. Copy image or video files into the matching `public/images/portfolio/...` or `public/videos/portfolio/` folder.
2. In `src/data/projects.ts`, add them to that project's `visuals`:
   ```ts
   visuals: [{ src: '/images/portfolio/veterinary/post-01.jpg', alt: 'Describe the image', type: 'image' }]
   ```
   Only reference files that exist. Set `conceptual: true` on generated or illustrative visuals so they are labelled.
3. Change `status` to `'Actual Work Sample'` or `'Published Work'` only for real work, and update `disclosure`.
4. Fill `results` only with verified outcomes you can evidence. Leave it `null` otherwise.
5. Current statuses: three projects are **Concept Project** (vet equipment, vet clinic setup, AI video) and five are
   **Awaiting Assets**. No project is marked as published or as a verified sample, because no assets were supplied.

## Contact details and CV

Fill the empty strings in `siteConfig.contact`. Links appear only when a value exists: email becomes `mailto:`,
phone becomes `tel:`, LinkedIn must start with `http(s)://`, and the CV becomes a download link. Until then the
hero shows a visibly unavailable CV button (set `showCvPlaceholder: false` to hide it) and the contact section
shows a placeholder note.

There is deliberately **no contact form**: no delivery service has been configured, and a form that pretends to send
would be misleading. To add one later, use a service such as Formspree or Web3Forms (or your own endpoint) and
show a success message only after the service confirms delivery.

## How the Three.js timeline works

- `experienceData.ts` defines the entries. `ExperienceTimeline` takes the visible dated ones (plus any un-hidden
  pending ones) and passes their labels to the scene.
- `SceneController` builds the scene: perspective camera, ambient/key/rim lights, a moving focus light, a curved
  path (`TimelinePath`), one faceted marker per entry (`TimelineMilestone`, sharing geometry), and a few particles.
- Hover or click on a marker highlights it and selects its entry; the HTML milestone buttons below the scene do the
  same, support arrow keys, Home/End, and mirror hover into the scene. The detail panel is plain HTML with
  previous/next/deselect controls.
- Scrolling reveals the gold path and selects the matching milestone until you choose one yourself
  ("Follow scroll again" resumes). Scrolling is never intercepted.
- The scene mounts only near the viewport, loads lazily, pauses rendering when offscreen, renders on demand with
  `prefers-reduced-motion` (no camera movement, no particles), and disposes geometries, materials, listeners, the
  renderer and the WebGL context on unmount.
- Phones (under 768px) and devices without WebGL get a 2D timeline with the same content.
- Adding or editing a role means editing `experienceData.ts` only. The scene adapts to the number of entries.
