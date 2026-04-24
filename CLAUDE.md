# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev server

```bash
npm run dev   # serves the project at http://localhost:3000 (via npx serve)
```

No build step — the site is plain HTML/CSS/JS served as static files.

## Architecture

Single-page portfolio with a fixed sidebar on desktop (≥1024px) and a slide-in drawer on mobile. All content lives in `index.html`; there are no separate pages.

**CSS layer order** (all loaded in `index.html`):
1. `css/variables.css` — design tokens: color palette, typography scale, spacing, layout dimensions, transitions, shadows. Dark mode overrides are in `[data-theme="dark"]`.
2. `css/reset.css` — baseline reset.
3. `css/main.css` — layout: sidebar, topbar, `.page` / `.main` wrapper, footer, responsive breakpoints.
4. `css/components.css` — section-level components (hero, exp cards, skill chips, contact form, etc.).

**JS modules** (loaded at the bottom of `<body>`, all IIFEs with no module bundler):
- `js/theme.js` — reads/writes `localStorage('kb-theme')`, sets `data-theme` on `<html>`. Defaults to OS preference.
- `js/i18n.js` — reads/writes `localStorage('kb-lang')`. Applies translations by matching `data-i18n` attributes on elements to keys in the `translations` object (EN/ES). `contact.js` reads the same key (`kb-lang`) for its own status messages.
- `js/main.js` — sidebar open/close, overlay toggle, and scroll-spy (highlights the active nav link based on scroll position).
- `js/contact.js` — async Formspree submission. Relies on `translations` being defined (from `i18n.js`) for the submit button label reset in the `finally` block — script order matters.

**Content changes:** Text rendered through the i18n system must be updated in both the `en` and `es` objects in `js/i18n.js`, plus the fallback text directly in `index.html` (used before JS runs). Static content not wired to i18n can be edited directly in `index.html`.

**Design tokens:** All colors, spacing, and type sizes are CSS custom properties defined in `css/variables.css`. Prefer using existing tokens over hardcoded values.

## Git

Commit messages must be a single short line — no body, no bullet points, no `Co-Authored-By`.

```
feat: short description
```
