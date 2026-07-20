# TimberCraft Rwanda — Static Frontend

A fully static React + Vite site for TimberCraft Rwanda. **No backend, API,
database, or server of any kind is required or used.** All content lives in
organized JavaScript data files and is imported directly into components.

## Running it locally

```bash
cd Frontend
npm install
npm run dev
```

Open http://localhost:3000.

## Building for production

```bash
cd Frontend
npm run build
```

Output goes to `Frontend/dist` — a plain static site you can host anywhere
(Netlify, Vercel, GitHub Pages, S3, any static file host).

## Where the content lives

All site content — text, numbers, and image paths — is in
`Frontend/src/data/`, one file per section:

| File | Powers |
|---|---|
| `hero.js` | Homepage hero title/subtitle/background image |
| `features.js` | The 6 "Quality Craftsmanship" etc. feature cards |
| `products.js` | All 6 products, each with a cover image + 4-image gallery |
| `about.js` | "Who We Are" section |
| `statistics.js` | The stats bar (500+ Happy Clients, etc.) |
| `cta.js` | "Have a Project in Mind?" call-to-action section |
| `contactInfo.js` | Phone/email/address shown in the navbar, footer, and contact page |
| `services.js` | All 4 services, each with a cover image + 4-image gallery |
| `projects.js` | All 3 portfolio projects, each with a cover image + 4-image gallery |
| `sustainability.js` | The 4 sustainability pillars |

`Frontend/src/data/index.js` re-exports all of them, so any component can do:

```js
import { products, contactInfo } from '../data';
```

**To edit any content** (change a price, swap an image, add a new product),
edit the relevant file in `src/data/` — no component code needs to change.
Restart `npm run dev` isn't even necessary; Vite hot-reloads data file
changes instantly.

### Adding a new product / service / project

Add a new object to the array in `products.js` (or `services.js` /
`projects.js`) with a unique `id`, `title`, `description`, `image`, and a
`gallery` array of image paths. The detail page and "View More" link will
pick it up automatically — no route or component changes needed, since
`ProductDetailPage.jsx` looks the item up by `id` from the same array.

## Images

All images live in `Frontend/public/images/` and are referenced by path
(e.g. `/images/img71.jpeg`) in the data files. Several are placeholders
picked from a generic furniture-photo set — see the table below for which
ones still need real photos. To replace one, just overwrite the file with
the same filename; no code changes needed.

| Filename(s) | Used for | Status |
|---|---|---|
| `img69` | Hero background | Placeholder — needs a real craftsman/workshop photo |
| `img70` | About section image | Placeholder |
| `img77` | CTA circle image | Placeholder — needs a real timber cross-section photo |
| `img71, img78–80` | Home Furniture | Reasonable placeholder |
| `img72, img81–83` | Doors & Windows | Placeholder — needs real doors/windows photos |
| `img73, img84–86` | Office Furniture | Placeholder — needs real office desk photos |
| `img74, img87–89` | Interior Finishing | Reasonable placeholder |
| `img75, img90–92` | Packaging Solutions | Placeholder — needs real pallets/crates photos |
| `img76, img93–95` | Timber Supply | Placeholder — needs real log-pile photos |
| `img96–123` | Services & Projects galleries | Reasonable placeholders |

## Contact form

There is no backend to send form submissions to. Clicking "Send Message" on
the Contact page builds a `mailto:` link from the form fields (name, email,
phone, message) and opens the visitor's own email app with everything
pre-filled, addressed to the business email in `contactInfo.js`. Nothing is
sent over the network and nothing is stored anywhere — this is standard,
fully client-side behavior with no server required.

If you'd later like real form submissions with persistence (e.g. saved to a
database, or emailed automatically without opening the visitor's mail app),
that would require reintroducing some kind of backend or a third-party form
service (Formspree, Netlify Forms, etc.) — currently out of scope by design,
since this project intentionally has zero backend dependencies.

## Deploying to Netlify

A `netlify.toml` is already set up at the repo root:

```toml
[build]
  base = "Frontend"
  command = "npm install && npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The redirect rule is required because React Router handles routing
client-side — without it, directly visiting or refreshing any route other
than `/` (e.g. `/products/1`) would 404 on Netlify's static file server.

Since this is now a pure static site with no backend, there are no
environment variables to configure and no separate server to deploy —
connect the repo to Netlify (or drag-and-drop the `dist` folder) and it
works immediately.

## Project structure

```
Frontend/
  public/
    images/          — all product/service/project photos
    _redirects       — Netlify SPA fallback (backup for netlify.toml)
  src/
    data/            — ALL static content (see table above)
    components/      — Navbar, Hero, Footer, Products, etc. (import from data/)
    pages/           — one file per route, plus *DetailPage.jsx for /products/:id etc.
    App.jsx          — route definitions
netlify.toml         — Netlify build + SPA redirect config
.gitignore
```

## Multilingual support (English / Kinyarwanda / French)

The entire site is translated using [i18next](https://www.i18next.com/) +
`react-i18next`. There is no live translation API call at runtime — all
three languages are pre-written, complete translation files, kept in sync
with each other (currently 164 matching keys across all three).

### How it works

- **Translation files**: `Frontend/public/locales/{en,rw,fr}/translation.json`
  — one flat, namespaced JSON file per language (nav, hero, products,
  contact form + validation errors, footer, page metadata, etc). Every
  piece of visible text on the site — nav, buttons, headings, paragraphs,
  form labels/placeholders/validation errors, cards, footer, and page
  `<title>`/meta description — comes from these files. Nothing is
  hardcoded in a component.
- **Lazy loading**: only the active language's file is ever fetched
  (`i18next-http-backend`). A first-time English visitor never downloads
  the Kinyarwanda or French files; they load only if that language is
  selected.
- **Browser detection + persistence**: `i18next-browser-languagedetector`
  checks `localStorage` first (a visitor's explicit past choice always
  wins), then falls back to the browser's language, then defaults to
  English. The chosen language is stored under the `tc_language`
  localStorage key.
- **Fallback**: `fallbackLng: 'en'` — if a key is ever missing in `rw` or
  `fr`, English is shown instead of a blank or broken string.
- **Instant switching**: the `LanguageSwitcher` component (flag + code
  dropdown, in the navbar) calls `i18n.changeLanguage()`, which re-renders
  the already-mounted React tree with the new language — no page reload.
- **Accessibility**: `<html lang="...">` is kept in sync with the active
  language automatically (`App.jsx`).

### Adding a new language

1. Add a new folder `Frontend/public/locales/<code>/translation.json` with
   the same key structure as `en/translation.json` (copy it as a starting
   point and translate every value).
2. Add `<code>` to `SUPPORTED_LANGUAGES` in `Frontend/src/i18n/i18n.js`.
3. Add its flag emoji + native name to `LANGUAGE_META` in
   `Frontend/src/components/LanguageSwitcher.jsx`, and add a
   `language.<code>` key (its native name) to all translation files.

No component code needs to change — every component reads through `t()`.

### Editing existing translations

Just edit the relevant value in the relevant
`Frontend/public/locales/<lang>/translation.json` file. Vite hot-reloads
these instantly in dev.

### A note on translation quality

The English and French text was written directly. The Kinyarwanda
translations were written carefully or reviewed by AI, but — as with any
AI-assisted translation into a lower-resource language — I'd recommend a
native Kinyarwanda speaker review them before this goes live for real
customers, particularly the product/service names and the contact form
copy, since a wrong word choice on a real business's site is more costly
than an unusual phrasing.

## Light / Dark theme system

The whole site supports light and dark mode via a React Context + CSS
custom properties — no page reload needed to switch, and the choice
persists across visits.

### How it works

- **`Frontend/src/contexts/ThemeContext.jsx`** — `ThemeProvider` +
  `useTheme()` hook. On first visit (no stored preference), it reads
  `window.matchMedia('(prefers-color-scheme: dark)')` and follows the OS
  setting live until the visitor uses the toggle — after that, their
  explicit choice is remembered in `localStorage` (`tc_theme` key) and
  takes over.
- **`Frontend/index.html`** — a small inline script in `<head>` mirrors the
  same detection logic and sets the theme attribute *before* React or any
  CSS loads, so there's no flash of the wrong theme on page load.
- **`Frontend/src/index.css`** — defines all theme colors as CSS custom
  properties under `:root` (light) and `[data-theme='timbercraft-dark']`
  (dark). `Frontend/tailwind.config.js` exposes these as Tailwind color
  utilities (`bg-theme-bg`, `text-theme-text`, `border-theme-border`, etc.)
  so any component just uses those classes and automatically responds to
  the active theme — no `dark:` prefixes needed anywhere.
- **`Frontend/src/components/ThemeToggle.jsx`** — the sun/moon button in
  the navbar (both a desktop and a mobile placement). Calls
  `toggleTheme()`, which flips React state (instant re-render, no reload)
  and persists the choice.
- Every color-related CSS property (background, text, border, shadow,
  fill, stroke) transitions over 350ms site-wide, so the whole page fades
  between themes smoothly instead of snapping.

### Theme colors

| Token | Light | Dark |
|---|---|---|
| Background | `#FFFFFF` | `#0F172A` |
| Surface | `#F8F9FA` | `#1E293B` |
| Primary text | `#111827` | `#F8FAFC` |
| Secondary text | `#6B7280` | `#CBD5E1` |
| Border | `#E5E7EB` | `#334155` |

**Primary/accent color** — kept as the existing TimberCraft brand green
(`#2D5A27` light / `#43813C` dark) instead of switching to a generic blue,
since blue would clash with the wood/green identity used throughout the
rest of the site (buttons, active nav states, badges, the logo). Both
dark-mode shades were chosen and verified to meet WCAG AA contrast
(4.5:1+) against their actual backgrounds — the "obvious" choice of
reusing the light-mode accent green directly in dark mode only achieves
4.1:1 with white button text, which fails AA, so two slightly different
greens are used for two different roles (solid button fills vs. text/links
sitting directly on the dark background). All of this lives in one place —
`--color-primary` / `--color-primary-text` in `index.css` — change it there
to use a different accent color (e.g. the blue from a generic spec) site-wide.

### What stays permanently dark regardless of theme

The navbar's top contact strip, the footer, the stats bar, the CTA card,
and the Hero's photo overlay are intentionally dark in both light and dark
mode — these are brand-accent sections (like a permanently-dark footer on
an otherwise light site, a common pattern), not meant to invert. Text
inside them was already tuned for a dark background, so they read
correctly either way without needing per-theme overrides.

### Adding a new themed component

Use the semantic classes instead of raw Tailwind grays/whites:

| Instead of | Use |
|---|---|
| `bg-white`, `bg-gray-50` | `bg-theme-bg` (page-level) or `bg-theme-surface` (cards) |
| `text-gray-900`, `text-timbercraft-dark` (as text) | `text-theme-text` |
| `text-gray-500/600` | `text-theme-text-secondary` |
| `border-gray-100/200` | `border-theme-border` |
| `text-timbercraft-green` (as a link/accent) | `text-theme-primary-text` |
| `bg-timbercraft-green` (as a button fill) | `bg-theme-primary` (or just use the `.btn-primary` class) |

DaisyUI components (`card`, `btn`, `modal`, `alert`, `badge`, `dropdown`,
`input`, `table`, etc.) already theme automatically — they read from the
two DaisyUI theme definitions (`timbercraft` / `timbercraft-dark`) in
`tailwind.config.js`, no extra work needed.
