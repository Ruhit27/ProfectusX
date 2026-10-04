# Agency site

Next.js rebuild of an existing Framer site, matched to it visually (colours, gradients, fonts, spacing, layout and motion measured from the live pages) and serving the same URLs ([ADR 0001](docs/adr/0001-keep-live-url-structure.md)). The repo ships with **placeholder copy**; the client's content is moved in by hand, see [Migrating content from Framer](#migrating-content-from-framer).

Domain vocabulary (Application, Case Study, Post, …) is defined in [GLOSSARY.md](GLOSSARY.md).

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · Satoshi + Clash Grotesk (Fontshare, self-hosted in `src/app/fonts/`) · MDX (gray-matter + next-mdx-remote) · zod · Resend · Vitest · Playwright

## Develop

```bash
pnpm install
cp .env.example .env.local   # optional
pnpm dev                     # http://localhost:3000
```

| Script | What it does |
|---|---|
| `pnpm typecheck` | TypeScript, no emit |
| `pnpm lint` | ESLint |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm test:e2e` | Builds, starts on :3100, runs Playwright (`pnpm exec playwright install chromium` first) |

## Applications

`/quote` posts to `POST /api/applications`, which validates the Application and hands it to a notifier:

- **No env vars set** → the Application is logged to the server console.
- **`RESEND_API_KEY` + `APPLICATION_INBOX` set** → it is emailed via Resend, with reply-to set to the Prospect. Set `APPLICATION_FROM` to a sender on a domain you've verified in Resend.

## Content

Case Studies live in `content/case-studies/*.mdx` (served at `/cs/<slug>`), Posts in `content/posts/*.mdx` (served at `/<slug>`). The file name is the slug, so keep the live slugs. A Post slug must not clash with a top-level page (`case-studies`, `our-blogs`, `quote`). Frontmatter is validated at build time; an invalid file fails the build with its path in the error.

```yaml
# Post
title: …
summary: …
date: 2026-05-21
cover: /posts/my-post.png     # optional, file in public/posts/
author: Jane Doe              # optional
authorAvatar: /authors/jane.png  # optional

# Case Study: the above, plus
client: …
industry: …
metrics:
  - value: "112"
    label: Demos booked in 90 days
```

## Migrating content from Framer

Open the Framer project next to `pnpm dev` and work top to bottom.

| Live page / section | Where it goes |
|---|---|
| Brand name, contact email, footer credit | `src/lib/site.ts` (`name`, `tagline`, `description`, `email`, `credit`) |
| Logo (top left) | replace `public/logo.svg` (rendered at 48×32) |
| Favicon | replace `src/app/favicon.ico` |
| Hero heading, subheading, button | `hero` in `src/data/home.ts` |
| "Trusted by" label and logos | `trustedBy`; logo files in `public/logos/`, set `src` |
| Results heading and screenshots | `results`; replace files in `public/results/` |
| Testimonials heading and cards | `testimonials` (cards are spread across three columns in order) |
| Process heading and steps | `process.steps`; use `body` for a paragraph or `points` for bold-label lists |
| "Why us" heading and three features | `why` |
| Case Studies preview heading / link labels | `caseStudiesPreview` (the cards come from the 3 newest Case Studies) |
| FAQ heading and items | `faq` |
| Closing call to action | `closingCta` |
| Each Case Study (`/cs/<slug>`) | one MDX file in `content/case-studies/<slug>.mdx` |
| Each Post (`/<slug>`) | one MDX file in `content/posts/<slug>.mdx`, cover image in `public/posts/` |

Then delete the sample MDX files and placeholder images, and run `pnpm build`: an invalid frontmatter field fails the build with the file name.

## Deploy to Vercel (later)

1. Push the repo to GitHub and import it in Vercel. The framework preset is detected automatically.
2. Under Project → Settings → Environment Variables, add `NEXT_PUBLIC_SITE_URL` (your production origin) and, if you want email delivery, `RESEND_API_KEY`, `APPLICATION_INBOX` and `APPLICATION_FROM`.
3. Deploy, then submit a test Application on `/quote` and confirm it arrives.
4. Point the domain at Vercel only after checking every live URL resolves on the preview deployment (`e2e/url-parity.spec.ts` lists one of each pattern).
