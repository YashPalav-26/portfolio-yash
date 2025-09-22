# Yash Palav — Portfolio

A fast, modern, single‑page portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. It showcases About, Skills, Experience, Projects, and a dedicated inline Resume viewer, with tasteful motion and a minimal custom cursor effect.

- Live route for resume: `/resume` (opens in a new tab)
- SPA routing with React Router and Vercel rewrites
- Minimal, creative cursor aura with rotating ring and subtle ghost trail
- Lottie animations and smooth entrance reveals with reduced‑motion support

---

## Tech Stack
- Vite 5, React 18, TypeScript
- Tailwind CSS, shadcn/ui (Radix primitives)
- React Router, @tanstack/react-query (ready), Framer Motion
- Lottie for animations

## Requirements
- Node.js 18+ (required by Vite 5)
- npm (or pnpm/yarn if you prefer)

## Getting Started
1. Clone and install
   ```sh
   git clone https://github.com/YashPalav-26/My-Portfolio.git
   cd portfolio-yash
   npm install
   ```
2. Start dev server
   ```sh
   npm run dev
   ```
3. Build and preview
   ```sh
   npm run build
   npm run preview
   ```

## Available Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development‑mode build
- `npm run preview` — preview built app locally
- `npm run lint` — run ESLint

## Key Features
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Projects with clean GitHub/live icons and hover feedback
- Resume page: `/resume` embeds a PDF viewer for consistent inline viewing
- Custom cursor effect: small dot + soft aura + rotating ring + subtle ghost trail (disabled on touch devices)
- Smooth reveal animations that respect reduced‑motion user preferences
- Optimized SVG favicon for crisp tabs

## Project Structure (high level)
```
public/
  favicon.svg
  resume.pdf
src/
  components/
    effects/CursorAura.tsx      # cursor aura and trail
    motion/Reveal.tsx           # reveal + staggered fade components
    portfolio/                  # sections (Hero, About, Experience, Projects, etc.)
  pages/
    Resume.tsx                  # /resume route (iframe embed)
  index.css                     # design tokens, utilities, neobrutalist styles
  App.tsx                       # router + providers
  main.tsx                      # React entry
vite.config.ts
vercel.json                     # SPA rewrites for Vercel
```

## Customization
- Branding
  - Logo: `src/components/portfolio/Logo.tsx`
  - Favicon: `public/favicon.svg`
  - Colors/gradients/shadows: `src/index.css` (CSS variables at the top)
- Content
  - Experience: `src/components/portfolio/ExperienceSection.tsx`
  - Projects: `src/components/portfolio/ProjectsSection.tsx`
  - Resume: replace `public/resume.pdf` (buttons open `/resume` in a new tab)
- Cursor
  - Tweak size/speed/visibility in `src/components/effects/CursorAura.tsx`
    - Ring size: change the `h-8 w-8` class
    - Aura size: change `h-14 w-14`
    - Ghost visibility: adjust base opacity/size constants

## Deployment (Vercel)
- This repo includes a `vercel.json` that adds SPA rewrites so deep links like `/resume` work in production.
- Steps
  1. Push the repo to GitHub
  2. Import into Vercel
  3. Build command: `npm run build` | Output: `dist`

> Netlify or other static hosts work as well; ensure SPA rewrites are configured (e.g., redirect all to `index.html`).

## Accessibility & Performance Notes
- Reveal animations disable or reduce when `prefers-reduced-motion` is enabled.
- Cursor effect automatically disables on coarse pointers (touch devices).
- Designed for no layout thrashing: animations use `transform` and RAF.

## License
MIT License — see LICENSE for details.

Copyright (c) 2025 Yash Palav
