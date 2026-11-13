// Writes a page's metadata into <head>. Shared by the browser (router) and the
// build (vite.config.js), which runs it against a string instead of a DOM.

const escape = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// [selector-ish key, attribute that holds the value, value getter]
const TAGS = [
  ['meta[name="description"]', "content", (m) => m.description],
  ['meta[name="robots"]', "content", (m) => m.robots],
  ['link[rel="canonical"]', "href", (m) => m.url],
  ['meta[property="og:title"]', "content", (m) => m.title],
  ['meta[property="og:description"]', "content", (m) => m.description],
  ['meta[property="og:url"]', "content", (m) => m.url],
  ['meta[property="og:image"]', "content", (m) => m.image],
  ['meta[property="og:image:width"]', "content", (m) => m.width],
  ['meta[property="og:image:height"]', "content", (m) => m.height],
  ['meta[name="twitter:card"]', "content", (m) => m.card],
];

export const applyMetaToDocument = (doc, meta) => {
  doc.title = meta.title;
  for (const [selector, attr, get] of TAGS) {
    doc.querySelector(selector)?.setAttribute(attr, get(meta));
  }
};

export const applyMetaToHtml = (html, meta) => {
  let out = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escape(meta.title)}</title>`,
  );
  for (const [selector, attr, get] of TAGS) {
    // 'meta[name="description"]' -> tag "meta", match 'name="description"'
    const [, tag, match] = selector.match(/^(\w+)\[(.+)\]$/);
    const re = new RegExp(
      `(<${tag}\\s[^>]*?${match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^>]*?\\s${attr}=")[^"]*(")`,
    );
    const reReversed = new RegExp(
      `(<${tag}\\s[^>]*?\\s${attr}=")[^"]*("[^>]*?${match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    );
    const value = escape(get(meta));
    if (re.test(out)) out = out.replace(re, `$1${value}$2`);
    else if (reReversed.test(out)) out = out.replace(reReversed, `$1${value}$2`);
    else throw new Error(`index.html is missing ${selector}`);
  }
  return out;
};
