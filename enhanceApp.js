import themeConfig from './lib/themeConfig'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $themeConfig() {
        return Object.assign(themeConfig, this.$site.themeConfig)
      },
      $cover() {
        const item = this.$themeConfig.cover
        if (this.$frontmatter.image) {
          return this.$frontmatter.image
        } else if (typeof item === 'string') {
          return item
        } else if (item[this.$route.path]) {
          return item[this.$route.path]
        } else {
          return item.base || ''
        }
      }
    }
  })
}
