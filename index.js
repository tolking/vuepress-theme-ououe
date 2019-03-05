module.exports = {
  layoutDir: 'layouts',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    '@vuepress/last-updated',
    require('./lib/my-plugin.js')
  ]
}
