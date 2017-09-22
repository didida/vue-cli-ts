// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "precss": {},
    "postcss-bem": {
      shortcuts: {
        'component-namespace': 'namespace',
        'component': 'block',
        'descendent': 'element',
        'modifier': 'modify'
      }
    }
  }
}
