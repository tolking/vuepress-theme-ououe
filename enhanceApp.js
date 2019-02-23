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
      }
    }
  })
}