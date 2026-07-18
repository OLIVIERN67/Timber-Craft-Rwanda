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
