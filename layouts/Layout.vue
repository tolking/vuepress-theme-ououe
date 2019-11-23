<template>
  <section class="layout">
    <list :class="{ 'cover-list': $cover, 'home-list': $isHome }"></list>
    <pagination />
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
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .content
    padding 0
</style>
