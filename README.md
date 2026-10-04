# Northbound

Marketing site for **Northbound**, a fictional B2B lead-generation agency, built as a learning/portfolio project. Its layout and motion patterns are modelled on modern agency landing pages; all copy, branding, clients, figures and testimonials are original sample data.

Domain vocabulary (Application, Case Study, Post, …) is defined in [GLOSSARY.md](GLOSSARY.md).

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · MDX (gray-matter + next-mdx-remote) · zod · Resend · Vitest · Playwright

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

`/apply` posts to `POST /api/applications`, which validates the Application and hands it to a notifier:

- **No env vars set** → the Application is logged to the server console.
- **`RESEND_API_KEY` + `APPLICATION_INBOX` set** → it is emailed via Resend, with reply-to set to the Prospect. Set `APPLICATION_FROM` to a sender on a domain you've verified in Resend.

`/quote` permanently redirects to `/apply`.

## Content

Case Studies live in `content/case-studies/*.mdx`, Posts in `content/posts/*.mdx`. The file name is the slug. Frontmatter is validated at build time; an invalid file fails the build with its path in the error.

```yaml
# Post
title: …
summary: …
date: 2026-05-21

# Case Study: the above, plus
client: …
industry: …
metrics:
  - value: "112"
    label: Demos booked in 90 days
```

## Deploy to Vercel (later)

1. Push the repo to GitHub and import it in Vercel. The framework preset is detected automatically.
2. Under Project → Settings → Environment Variables, add `NEXT_PUBLIC_SITE_URL` (your production origin) and, if you want email delivery, `RESEND_API_KEY`, `APPLICATION_INBOX` and `APPLICATION_FROM`.
3. Deploy, then submit a test Application on `/apply` and confirm it arrives.
