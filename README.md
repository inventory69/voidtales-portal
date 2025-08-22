# ✨ VoidTales — Portal Hub

A stylish Nuxt 3 portal that centralizes links to your project subdomains (forum, blog, wiki, Discord).  
Includes an emblem SVG, animated portal cards, an interstitial redirect page with countdown, and a secure server-side redirect API (no open-redirects).

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3-green?logo=nuxt.js)](https://nuxt.com/docs)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwindcss)](https://tailwindcss.com/docs/installation)

---

## 📚 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Configure Portal Targets](#configure-portal-targets)
- [Project Structure](#project-structure)
- [Editor & Tailwind Tips](#editor--tailwind-tips)
- [Troubleshooting](#common-troubleshooting)
- [Build & Deploy](#build--deploy)
- [Contributing](#contributing)
- [Useful Links](#useful-links)

---

## 🚀 Features

- **Nuxt 3 + Tailwind CSS** (SSR-ready)
- **Emblem SVG** in `public/svg/voidtales.svg`
- **Animated portal cards** & interstitial redirect page `/goto/:site` with countdown
- **Secure server endpoints**:
  - `GET /api/lookup/:site` → returns `{ site, title, target }`
  - `GET /api/goto/:site` → server-side validated 302 redirect (mapping in runtimeConfig)
- **Accessibility**: focus-visible, keyboard navigation, prefers-reduced-motion
- **Easy to extend**: PWA, OG image generation, particle backgrounds

---

## ⚡ Prerequisites

- [Node.js 18+](https://nodejs.org/) (LTS recommended)  
- [Git](https://git-scm.com/)  
- [Bun](https://bun.sh/) (optional, supported)

---

## 🏁 Quick Start

```sh
git clone git@github.com:inventory69/voidtales-portal.git
cd voidtales-portal

npm install      # or bun install
npm run dev      # or bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Configure Portal Targets

Edit `runtimeConfig.public.portalTargets` in [`nuxt.config.ts`](nuxt.config.ts) to set where each portal key points:

```ts
runtimeConfig: {
  public: {
    portalTargets: {
      forum:   'https://forum.voidtales.win',
      blog:    'https://blog.voidtales.win',
      wiki:    'https://wiki.voidtales.win',
      discord: 'https://discord.voidtales.win'
    }
  }
}
```

> **Only keys listed here are allowed** — this prevents open-redirect vulnerabilities.

---

## 🗂️ Project Structure

```
nuxt.config.ts              # Configuration & runtime mapping
app.vue                     # Global wrapper / CSS import
assets/css/main.css         # Tailwind directives + custom styles
public/svg/voidtales.svg    # Site emblem
components/                 # Logo, Hero, PortalCard, ThemeToggle, etc.
pages/index.vue             # Landing page
pages/goto/[site].vue       # Interstitial redirect page (countdown)
server/api/lookup/[site].ts # Returns target JSON
server/api/goto/[site].ts   # Server-side 302 redirect (validates key)
```

---

## 🛠️ Editor & Tailwind Tips

If your editor flags `@tailwind` rules as unknown:

- Install the **Tailwind CSS IntelliSense** extension (recommended)
- Or add `.vscode/settings.json`:

  ```json
  {
    "css.lint.unknownAtRules": "ignore",
    "scss.lint.unknownAtRules": "ignore",
    "less.lint.unknownAtRules": "ignore"
  }
  ```

> These are editor-only warnings — the build (PostCSS + Tailwind) handles `@tailwind` directives.

---

## 🧩 Common Troubleshooting

- **"defineNuxtConfig is not a function"**  
  → Ensure `import { defineNuxtConfig } from 'nuxt/config'` and Nuxt 3 is installed.
- **h3 / `useRuntimeConfig` errors**  
  → Use Nuxt auto-imports (`#imports`) or explicit imports from `h3`.
- **Vue SFC parse errors with stray backslashes**  
  → Remove stray backslashes before template literals inside JS bindings.
- **Duplicate portal buttons**  
  → Ensure only `Hero` renders the grid (avoid duplicating UI in `index.vue`).
- **Styles look wrong**  
  → Check that `assets/css/main.css` is loaded via the `css` array in `nuxt.config.ts` or imported in `app.vue`.

---

## 📦 Build & Deploy

When you're ready for production:

```sh
npm run build      # or bun build
npm run start      # or bun start
```

---

## 🤝 Contributing

- Fork → branch → PR
- Use descriptive branch names: `feature/...`, `fix/...`, `chore/...`
- Test locally: `npm run dev` and `npm run build` before opening a PR

---

- [Nuxt 3 docs](https://nuxt.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [ImageMagick](https://imagemagick.org/)