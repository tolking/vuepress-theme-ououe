<template>
  <section id="global-layout">
    <app-header :class="{ 'cover-header': showCover }">
      <header-cover v-if="showCover" :item="$cover" />
    </app-header>
    <label
      v-if="
        this.$themeConfig.showThemeButton &&
          $themeConfig.defaultTheme &&
          showCover
      "
      @click="changeScheme"
      class="switch"
    >
      <input
        class="switch-input"
        type="checkbox"
        :checked="colorScheme.scheme === 'dark'"
      />
    </label>
    <transition name="fade-transform" mode="out-in" appear>
      <component :is="layout" :key="$page.path" />
    </transition>
    <app-footer />
  </section>
</template>

<script>
import AppHeader from '@theme/components/Header.vue'
import AppFooter from '@theme/components/Footer.vue'
import HeaderCover from '@theme/components/HeaderCover.vue'
import Page from '@theme/layouts/Page.vue'
import Tag from '@theme/layouts/Tag.vue'

export default {
  name: 'GlobalLayout',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    Page,
    Tag
  },
  data() {
    return {
      colorScheme: {}
    }
  },
  computed: {
    layout() {
      const layout = this.$frontmatter.layout
      if (this.$page.path) {
        if (
          layout &&
          (this.$vuepress.getLayoutAsyncComponent(layout) ||
            this.$vuepress.getVueComponent(layout))
        ) {
          return layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
    showCover() {
      return this.layout !== 'Page' && this.layout !== 'NotFound'
    },
    defaultTheme() {
      const _defaultTheme =
        (this.$themeConfig.defaultTheme &&
          this.$themeConfig.showThemeButton &&
          window.localStorage.getItem('defaultTheme')) ||
        this.$themeConfig.defaultTheme
      if (typeof _defaultTheme === 'object') {
        const hours = new Date().getHours()
        let _key = false
        for (const key in _defaultTheme) {
          const value = _defaultTheme[key]
          if (value[0] <= value[1]) {
            if (value[0] <= hours && hours < value[1]) {
              _key = key
              break
            }
          } else {
            if (
              (value[0] <= hours && hours < 24) ||
              (0 <= hours && hours < value[1])
            ) {
              _key = key
              break
            }
          }
        }
        return _key
      } else {
        return _defaultTheme || false
      }
    }
  },
  beforeMount() {
    if (this.defaultTheme) {
      const prefersColorScheme = require('css-prefers-color-scheme').default
      this.colorScheme = prefersColorScheme(this.defaultTheme)
    }
  },
  mounted() {
    // Prevent styles in index.styl not work
    if (this.defaultTheme) {
      window.onload = function() {
        this.colorScheme.scheme === this.defaultTheme
      }.bind(this)
    }
  },
  methods: {
    changeScheme() {
      this.colorScheme.scheme =
        this.colorScheme.scheme === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('defaultTheme', this.colorScheme.scheme)
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/public.styl'
@require '../styles/content.styl'
@require '../styles/code.styl'
</style>
<style lang="stylus" scoped>
#global-layout
  min-height 100vh
  overflow hidden
  background $bgColor
  transition all .5s ease-in-out
  @media (prefers-color-scheme: dark)
    background $bgDarkColor
.switch
  position absolute
  right 1rem
  transform translate(0px, .5rem)
  @media (max-width $phoneWidth)
    transform translate(0px, -5rem)
  @media print
    display none
.switch-input
  position relative
  display inline-block
  width 52px
  height 31px
  border 1px solid $borderColor
  border-radius 20px
  box-shadow $borderColor 0 0 0 0 inset
  background-color $bgColor
  background-clip content-box
  -webkit-appearance none
  user-select none
  outline none
  transition all .5s ease-in-out
  @media (prefers-color-scheme: dark)
    border 1px solid $borderDarkColor
    box-shadow $borderDarkColor 0 0 0 0 inset
    background-color $bgDarkColor
.switch-input:before
  content ''
  position absolute
  top 0px
  left 0
  width 29px
  height 29px
  border-radius 20px
  box-shadow 0 1px 3px $shadowColor
  background-color $whiteColor
  transition all 0.5s ease-in-out
  @media (prefers-color-scheme: dark)
    box-shadow 0 1px 3px $shadowDarkColor
    background-color $whiteDarkColor
.switch-input:checked
  background-color $bgColor
  transition background-color .5s
  @media (prefers-color-scheme: dark)
    background-color $bgDarkColor
.switch-input:checked:before
  left: 21px
  transition left 0.5s ease-in-out
</style>
