<template>
  <footer class="footer">
    <nav-link v-if="links" :value="links" class="footer-link"></nav-link>
    <router-link :to="$localePath" class="copyright">{{
      $site.title + ' &copy; ' + year
    }}</router-link>
  </footer>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Footer',
  components: {
    NavLink
  },
  computed: {
    links() {
      return this.$themeConfig.footer
    },
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  padding 1rem 0 .5rem
  background $codeBgColor
  text-align center
  transition background .5s ease-in-out
  @media (prefers-color-scheme: dark)
    background $codeBgDarkColor
  .copyright
    display inline-block
    margin-top .55rem
    font-size .7rem
    color #fff
</style>
