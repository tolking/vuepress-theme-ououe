module.exports = {
  layoutDir: 'layouts',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    '@vuepress/last-updated',
    [(pluginOptions, context) => ({
      name: 'ououe-add-layout',
      extendPageData($page) {
        if (!$page.frontmatter.layout && $page.regularPath.includes('.html')) {
          $page.frontmatter.layout = 'Page';
        }
      }
    })]
  ]
}
