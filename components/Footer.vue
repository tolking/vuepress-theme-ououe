<template>
  <footer class="footer">
    <nav v-if="$themeConfig.footer" class="link-list">
      <nav-link
        v-for="(item, index) in $themeConfig.footer"
        :key="index"
        :value="item"
        class="list-item"
      />
    </nav>
    <router-link :to="$localePath" class="copyright">{{
      $site.title + ' &copy; ' + new Date().getFullYear()
    }}</router-link>
  </footer>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Footer',
  components: {
    NavLink
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
  .link-list
    .list-item
      margin 0 .5rem
      font-size .9rem
      color $whiteColor
  .copyright
    display inline-block
    margin-top .55rem
    font-size .7rem
    color #fff
  @media print
    display none
</style>
