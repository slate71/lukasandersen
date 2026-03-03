# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Build static site to `dist/`
- `npm run preview` - Preview production build locally

## Architecture

Static personal portfolio + blog built with:
- **Framework**: Astro 5 with static output
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Fonts**: Inter (sans, UI/headings) and Literata (serif, blog body) via Google Fonts
- **Content**: Astro Content Collections for blog posts (markdown in `src/content/blog/`)
- **Deployment**: Netlify via `@astrojs/netlify` adapter

## Design System

Scandinavian-inspired warm neutral palette — no pure black or white:
- Colors defined as `@theme inline` tokens in `src/styles/global.css`
- Key tokens: `bg-primary`, `bg-surface`, `text-primary`, `text-secondary`, `text-muted`, `border-default`, `accent`
- Typography scale uses weight and spacing for hierarchy, not dramatic size jumps
- Max reading width: `max-w-[680px]` for all prose/content

## Key Configuration

- TypeScript path mapping: `@/*` maps to `./src/*`
- Tailwind CSS integrated as Vite plugin in `astro.config.mjs`
- Content collection schema defined in `src/content.config.ts` (title, description, date, draft)
- Netlify build config in `netlify.toml`

## Project Structure

- `src/pages/` - Astro pages (index, blog listing, blog post)
- `src/layouts/` - BaseLayout, BlogLayout (nav chrome), BlogPost (article layout with serif body styles)
- `src/content/blog/` - Blog post markdown files
- `src/content.config.ts` - Content collection schema
- `src/styles/global.css` - Global styles, Tailwind theme tokens, color palette
- `public/` - Static assets
