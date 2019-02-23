<template>
  <footer class="footer">
    <nav-link v-if="links" :value="links" class="footer-link"></nav-link>
    <router-link :to="$site.base"
      class="copyright">{{ $site.title + " &copy; " + year }}</router-link>
  </footer>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  components: {
    NavLink
  },
  computed: {
    links() {
      return this.$site.themeConfig.footer;
    },
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  padding 1rem 0 .5rem
  background $codeBgColor
  text-align center
  .copyright
    display inline-block
    margin-top .55rem
    font-size .7rem
    color $whiteColor
</style>
