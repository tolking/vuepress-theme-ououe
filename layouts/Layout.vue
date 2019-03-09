<template>
  <section class="layout">
    <app-header :class="{ 'cover-header': cover }">
      <header-cover v-if="cover" :item="cover"></header-cover>
    </app-header>
    <list :class="{ 'cover-list': cover, 'home-list': isHome }"></list>
    <pagination></pagination>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '@theme/components/Header.vue';
import AppFooter from '@theme/components/Footer.vue';
import HeaderCover from '@theme/components/HeaderCover.vue';
import List from '@theme/components/List.vue';
import Pagination from '@theme/components/Pagination.vue';

export default {
  name: 'layout',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    List,
    Pagination
  },
  computed: {
    isHome() {
      return this.$localePath === this.$page.regularPath
    },
    cover() {
      const item = this.$themeConfig.nav.filter(item => {
        return item.link === this.$route.path
      })

      return this.$frontmatter.image
        || item.length && item[0].cover
        || this.$themeConfig.cover
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .content
    padding 0
</style>

