module.exports = {
  layoutDir: 'layouts',
  globalLayout: '/layouts/GlobalLayout.vue',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    '@vuepress/last-updated',
    'blog-multidir',
    'img-lazy'
  ]
}
