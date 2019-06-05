<template>
  <section class="layout">
    <list :class="{ 'cover-list': $cover, 'home-list': isHome }"></list>
    <pagination></pagination>
  </section>
</template>

<script>
import List from '@theme/components/List.vue'
import Pagination from '@theme/components/Pagination.vue'

export default {
  name: 'Layout',
  components: {
    List,
    Pagination
  },
  computed: {
    isHome() {
      return (
        this.$localePath === this.$page.regularPath ||
        this.$page.regularPath.startsWith(
          '/' + this.$pluginConfig.paginatioPath
        )
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .content
    padding 0
</style>
