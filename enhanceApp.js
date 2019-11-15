import themeConfig from './lib/themeConfig'
import imgLazy from '@dynamic/imgLazy'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $themeConfig() {
        return Object.assign(themeConfig, this.$site.themeConfig)
      },
      $imgLazyConfig() {
        return imgLazy
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
      },
      $isHome() {
        return (
          this.$localePath === this.$page.regularPath ||
          this.$page.regularPath.startsWith(
            '/' + this.$pluginConfig.paginatioPath
          )
        )
      }
    }
  })
}
