import themeConfig from './lib/themeConfig'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $themeConfig() {
        return Object.assign(themeConfig, this.$site.themeConfig)
      }
    }
  })
}