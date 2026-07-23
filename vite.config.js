import { defineConfig } from 'vite'

// Multi-page static site. Each HTML file at the project root is a build input.
// All static assets (favicons, logo, QR codes, images, styles.css) live in
// public/ so they are copied to dist/ verbatim — same names, same paths, no
// hashing — which keeps the standalone deliverables (qr-soraida.svg,
// qr-soraida-transparent.png) downloadable at their original URLs.
export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        card: 'card.html',
        qrCard: 'qr-card.html',
      },
    },
  },
})
