### Rational Resilience - Personal Coaching Website

Vue.js website for a coaching practice focusing on integrating rational thinking with emotional wisdom.

### Tech Stack

Vue 3
Vite
Tailwind CSS
Vue Router
Lucide Icons
Cal.com (appointment scheduling)
Midjourney for images

### Editing content

Prices, booking links and contact details all live in one place:
`src/config/site.js`. Change a rate there and it updates on the sessions
page and both booking pages at once — don't hardcode prices in components.
Coaching for founders and leaders has no published rate; its session
length and cadence live in `LEADERSHIP` in the same file. The workshops shown
on the Workshops page are the `WORKSHOPS` list there too.

Page titles, descriptions and social previews live in `src/config/pages.js`.
The build writes a static copy of `index.html` per page (`sessions.html`,
etc.) so shared links preview correctly, plus `sitemap.xml`, `robots.txt` and
`404.html` — see `vite.config.js`.

The design uses one typeface (EB Garamond) and a small set of shared
classes (`.page`, `.page-title`, `.section-title`, `.btn`, `.btn-quiet`,
`.link`, `.card`), all defined in `src/assets/main.css`. Colours are in
`tailwind.config.js`.

The hand-drawn sketches are generated: edit `scripts/make-sketches.py` and run
`python3 scripts/make-sketches.py`, which rewrites `src/config/sketches.js`.
`HandSketch.vue` draws any of them by name.

### Running it

```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```
