# soraida-pranic-healer

Landing page + QR code for **Soraida Henao** — Sanación Pránica, Reiki y Meditación.

- **Live site (Vercel):** https://soraida-business-card.vercel.app/
- **Landing page:** `index.html`
- **QR code** (`public/qr-soraida.png` / `.svg`): links to the live site — print or share for mobile scanning
- **Scan card** (`qr-card.html`): printable branded card with the QR
- **Old business card:** preserved at `card.html`

## Tech

Static multi-page site built with [Vite](https://vitejs.dev/) and managed with **pnpm**
(this machine has `npm` disabled — always use `pnpm`).

The three pages (`index.html`, `card.html`, `qr-card.html`) live at the project root and
are the Vite build inputs. All static assets — favicons, `logo.svg`, `icon-sori.png`, the
QR images, `styles.css`, and `assets/IMG_3631.jpg` — live in `public/` so they are copied
into `dist/` verbatim (same names, same paths, no hashing). This keeps the standalone
deliverables (`qr-soraida.svg`, `qr-soraida-transparent.png`) downloadable at their
original URLs even though no page links to them. Fonts are loaded from external CDNs.

## Local development

```bash
pnpm install     # install dependencies
pnpm dev         # start the Vite dev server (hot reload)
pnpm build       # produce the production build in dist/
pnpm preview     # serve the built dist/ locally to sanity-check
```

## Deployment (Vercel)

Auto-deployed from GitHub (`stephymelo/soraida-pranic-healer`, branch `main`).
Vercel auto-detects the setup from `package.json` + `pnpm-lock.yaml`, so no `vercel.json`
is needed. Expected project settings:

- **Framework Preset:** Vite
- **Install Command:** `pnpm install`
- **Build Command:** `pnpm build` (runs `vite build`)
- **Output Directory:** `dist`
