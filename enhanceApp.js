import { splitPages } from './lib/util'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.mixin({
    computed: {
      $pages() {
        return splitPages(this.$site.pages);
      },
      $themeConfig() {
        return Object.assign({
          search: true,
          postTime: {
            createTime: 'Create Time',
            lastUpdated: 'Last Updated'
          },
          nav: [],
          footer: []
        }, this.$site.themeConfig)
      }
    }
  })
}