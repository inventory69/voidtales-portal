# VoidTales — Portal Hub

A stylish Nuxt 3 portal that centralizes links to your project subdomains (forum, blog, wiki, Discord).  
Includes an emblem SVG, animated portal cards, an interstitial redirect page with countdown, and a secure server-side redirect API (no open-redirects).

Repository: git@github.com:inventory69/voidtales-portal.git

---

## Features

- Nuxt 3 + Tailwind CSS (SSR-ready)  
- Emblem SVG in `public/svg/voidtales.svg`  
- Interstitial redirect page `/goto/:site` with countdown and animation  
- Server endpoints:
    - `GET /api/lookup/:site` → returns `{ site, title, target }`
    - `GET /api/goto/:site` → server-side validated 302 redirect (mapping in runtimeConfig)
- Accessibility: focus-visible, keyboard navigation, prefers-reduced-motion support  
- Easy to extend: PWA, OG image generation, particle backgrounds

---

## Prerequisites

- Node.js 18+ (LTS recommended)  
- Git

---

## Quick start (local)

Clone, install and run the dev server:

    git clone git@github.com:inventory69/voidtales-portal.git
    cd voidtales-portal

    npm install

    npm run dev

Open http://localhost:3000 in your browser.

---

## Configure portal targets

Edit `runtimeConfig.public.portalTargets` in `nuxt.config.ts` to set where each portal key points. Example:

    runtimeConfig: {
      public: {
        portalTargets: {
          forum: 'https://forum.voidtales.win',
          blog:  'https://blog.voidtales.win',
          wiki:  'https://wiki.voidtales.win',
          discord: 'https://discord.voidtales.win'
        }
      }
    }

Only keys listed here are allowed — this prevents open-redirect vulnerabilities.

---

## Project structure (key files)

- `nuxt.config.ts` — configuration & runtime mapping  
- `app.vue` — global wrapper / CSS import  
- `assets/css/main.css` — Tailwind directives + custom styles  
- `public/svg/voidtales.svg` — site emblem  
- `components/` — Logo, Hero, PortalCard, ThemeToggle, etc.  
- `pages/index.vue` — landing page  
- `pages/goto/[site].vue` — interstitial redirect page (countdown)  
- `server/api/lookup/[site].ts` — returns `target` JSON  
- `server/api/goto/[site].ts` — server-side 302 redirect (validates key)

---

## SVG / Image handling

Place the final emblem at `public/svg/voidtales.svg`.

Optional conversion to PNG/WebP with ImageMagick:

    magick convert -background transparent -density 300 public/svg/voidtales.svg \
      -resize 2048x2048 -fuzz 3% -trim +repage public/voidtales-2048.png

    magick convert public/voidtales-2048.png -quality 90 public/voidtales-2048.webp

To avoid font dependencies in SVG, convert text to paths (Inkscape or Illustrator).

---

## Editor & Tailwind tips

If your editor flags `@tailwind` rules as unknown:

- Install the "Tailwind CSS IntelliSense" extension (recommended), and/or
- Add `.vscode/settings.json` with:

    {
      "css.lint.unknownAtRules": "ignore",
      "scss.lint.unknownAtRules": "ignore",
      "less.lint.unknownAtRules": "ignore"
    }

These are editor-only warnings — the build (PostCSS + Tailwind) handles `@tailwind` directives.

---

## Common troubleshooting

- "defineNuxtConfig is not a function" → ensure `import { defineNuxtConfig } from 'nuxt/config'` and Nuxt 3 is installed.  
- h3 / `useRuntimeConfig` errors → use Nuxt auto-imports (`#imports`) or explicit imports from `h3` where appropriate.  
- Vue SFC parse errors with stray backslashes before template literals (e.g. `\${`) → remove stray backslashes so template literals are valid inside JS bindings.  
- Duplicate portal buttons → ensure only `Hero` renders the grid (avoid duplicating the same UI in `index.vue`).  
- If styles look wrong, check that `assets/css/main.css` is loaded via the `css` array in `nuxt.config.ts` or imported in `app.vue`.

---

## Git: rename `master` → `main` (if needed)

If your repository started on `master` and you want `main`:

    # rename local branch
    git branch -M main
    git push -u origin main

Then on GitHub: change the repository default branch to `main` in Settings → Branches. Optionally remove the old `master`:

    git push origin --delete master

---

## Build & deploy (to add later)

When you're ready for production:

    npm run build
    npm run start

Recommended host: Vercel (works well with Nuxt Nitro). Set build command to `npm run build` and output directory to `.output`.

---

## Contributing

- Fork → branch → PR  
- Use descriptive branch names: `feature/...`, `fix/...`, `chore/...`  
- Test locally: `npm run dev` and `npm run build` before opening a PR

---

## License

Add a license file (suggested: MIT). Example `LICENSE` header:

    MIT License

    © [Year] inventory69

---

## Useful links

- Nuxt 3 docs: https://nuxt.com/docs  
- Tailwind CSS: https://tailwindcss.com/docs/installation  
- ImageMagick: https://imagemagick.org/  
- Inkscape: https://inkscape.org/
