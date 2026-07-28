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

Shared styles (`.handwritten-text`, `.handwritten-alt`, `.card`, `.torn-top`)
and the Google Fonts import are defined once in `src/assets/main.css`.

### Running it

```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```
