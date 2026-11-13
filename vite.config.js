import { fileURLToPath, URL } from 'node:url'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { SITE_URL, STATIC_PAGES, pageMeta } from './src/config/pages.js'
import { applyMetaToHtml } from './src/config/applyMeta.js'

// Link previews (LinkedIn, Slack, WhatsApp, email) don't run JavaScript, so
// they only ever see index.html. Write a copy per page with that page's tags.
// Netlify serves dist/executive.html at /executive before the SPA fallback in
// _redirects kicks in, and the app boots from it exactly as from index.html.
const perPageHtml = () => ({
  name: 'per-page-html',
  apply: 'build',
  closeBundle() {
    const dist = resolve(fileURLToPath(new URL('./dist', import.meta.url)))
    const html = readFileSync(resolve(dist, 'index.html'), 'utf8')
    for (const path of STATIC_PAGES) {
      writeFileSync(
        resolve(dist, `${path.slice(1)}.html`),
        applyMetaToHtml(html, pageMeta(path)),
      )
    }

    // Unknown URLs: Netlify serves this with a 404 status, and the app then
    // shows its "page not found" screen.
    writeFileSync(resolve(dist, '404.html'), applyMetaToHtml(html, pageMeta('/404')))

    // Sitemap and robots.txt, generated from the same page list.
    const urls = ['/', ...STATIC_PAGES]
      .map((path) => `  <url><loc>${pageMeta(path).url}</loc></url>`)
      .join('\n')
    writeFileSync(
      resolve(dist, 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    )
    writeFileSync(
      resolve(dist, 'robots.txt'),
      `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    )
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    perPageHtml(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
