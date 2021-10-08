
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/thaile/dev/thai-portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/thaile/dev/thai-portfolio/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/thaile/dev/thai-portfolio/src/pages/page-2.js"))
}

