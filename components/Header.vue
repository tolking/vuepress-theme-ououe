<template>
  <header class="header">
    <div class="header-navbar">
      <div class="flex-xbc main header-nav">
        <nav class="nav-link">
          <router-link :to="$localePath" class="inblock link-logo">
            <img v-if="logoImg" :src="logoImg" class="logo-img" alt="logo" />
          </router-link>
          <nav-link :value="links" class="nav-link"></nav-link>
        </nav>
        <search-box v-if="$themeConfig.search"></search-box>
      </div>
    </div>
    <slot></slot>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Header',
  components: {
    SearchBox,
    NavLink
  },
  computed: {
    links() {
      return this.$themeConfig.nav
    },
    logoImg() {
      return this.$themeConfig.logo
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  position relative
  .header-navbar
    position fixed
    top 0
    left 0
    right 0
    z-index 100
    background $maskColor
    transition all .5s ease-in-out
    @media (prefers-color-scheme: dark)
      background $maskDarkColor
    .header-nav
      height $headerHeight
      .nav-link
        .link-logo
          height $headerHeight
          .logo-img
            padding 16.5% 0
            height 50%
@media (max-width $phoneWidth)
  .nav-link
    white-space nowrap
    overflow-x scroll
    .link-logo
      display none
.cover-header
  height $coverHeight
</style>
