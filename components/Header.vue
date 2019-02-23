<template>
  <header class="header">
    <div class="header-navbar">
      <div class="flex-bc main header-nav">
        <div class="nav-link">
          <router-link :to="$site.base" class="inblock link-logo">
            <img v-if="logoImg" :src="logoImg" class="logo-img" alt="logo">
          </router-link>
          <nav-link :value="links" class="nav-link"></nav-link>
        </div>
        <search-box v-if="$site.themeConfig.search !== false"></search-box>
      </div>
    </div>
    <slot></slot>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import NavLink from './NavLink.vue';

export default {
  components: {
    SearchBox,
    NavLink,
  },
  name: 'app-header',
  computed: {
    links() {
      return this.$site.themeConfig.nav || [];
    },
    logoImg() {
      return this.$site.themeConfig.logo
    }
  },
}
</script>

<style lang="stylus" scoped>
.header
  position relative
  height $headerHeight
  .header-navbar
    position fixed
    top 0
    left 0
    right 0
    z-index 100
    background $maskColor
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
