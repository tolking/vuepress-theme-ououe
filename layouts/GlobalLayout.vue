<template>
  <section id="global-layout">
    <app-header :class="{ 'cover-header': showCover }">
      <header-cover v-if="showCover" :item="$cover"></header-cover>
    </app-header>
    <label v-if="showCover" @click="changeScheme" class="switch">
      <input
        class="switch-input"
        type="checkbox"
        :checked="colorScheme.scheme === 'dark'"
      />
    </label>
    <component :is="layout" />
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '@theme/components/Header.vue'
import AppFooter from '@theme/components/Footer.vue'
import HeaderCover from '@theme/components/HeaderCover.vue'
import Layout from '@theme/layouts/Layout.vue'
import Page from '@theme/layouts/Page.vue'
import Tag from '@theme/layouts/Tag.vue'
import NotFound from '@theme/layouts/404.vue'
import prefersColorScheme from 'css-prefers-color-scheme'

export default {
  name: 'GlobalLayout',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    Layout,
    Page,
    Tag,
    NotFound
  },
  data() {
    return {
      colorScheme: {}
    }
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
    showCover() {
      return this.layout !== 'Page' && this.layout !== 'NotFound'
    }
  },
  mounted() {
    const localTheme = window.localStorage.getItem('defaultTheme') || ''
    const defaultTheme = localTheme || this.$themeConfig.defaultTheme
    this.colorScheme = prefersColorScheme(defaultTheme)
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

<style lang="stylus" scoped>
#global-layout
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
