<template>
  <section class="layout">
    <app-header :class="{ 'cover-header': cover }">
      <header-cover :item="cover"></header-cover>
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
      const item = this.$themeConfig.cover
      return this.$frontmatter.image
        || typeof item === 'string'
          ? item
          : item[this.$route.path]
            || item.base
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .content
    padding 0
</style>

