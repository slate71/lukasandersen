# lukasandersen.com

Personal portfolio and blog built with Astro, Tailwind CSS, and TypeScript. Deployed on Netlify.

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static site to dist/
npm run preview   # Preview production build
```

## What to improve next

### 1) Reliability and quality gates
- Add `npm run check` (Astro type/content checks) and `npm run lint` (ESLint + Prettier).
- Add CI (GitHub Actions) to run install, check, build, and fail fast on regressions.
- Add a dependency update bot (Dependabot or Renovate) to keep Astro/Tailwind packages current.

### 2) Performance and Core Web Vitals
- Optimize and lazy-load images with Astro assets.
- Add font loading strategy (`font-display: swap`, self-host where practical).
- Measure Lighthouse scores regularly and set explicit budgets for LCP/CLS/INP.

### 3) SEO and discoverability
- Add/verify sitemap, robots.txt, canonical URLs, and RSS feed.
- Add structured data (Person, BlogPosting) to improve rich results.
- Ensure every post has unique title/description/Open Graph metadata.

### 4) Content operations
- Add a post template with required frontmatter validation.
- Add reading-time, related posts, and tags/categories for better navigation.
- Create an editorial checklist (links, metadata, accessibility, formatting).

### 5) Accessibility and UX
- Run keyboard-only and screen-reader checks across pages.
- Verify heading hierarchy and color contrast.
- Add a dark mode toggle and persist preference.

### 6) Security and platform hardening
- Add security headers in `netlify.toml` (CSP, X-Frame-Options, Referrer-Policy).
- Add a lightweight privacy-first analytics solution and consent-safe setup.
- Document backup/recovery steps for domain, DNS, and deployment settings.
