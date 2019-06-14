<template>
  <section class="flex-xcc main tags-list">
    <nav class="flex-wbc list-content">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="item.path"
        class="list-item"
      >
        <p class="item-count">{{ item.count }}</p>
        <h3 class="item-text">{{ item.text }}</h3>
      </router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'TagsList',
  computed: {
    list() {
      let list = []
      const m =
        this.$route.path === this.$pluginConfig.categoryIndexPageUrl
          ? '$categories'
          : '$tags'
      Object.keys(this[m]._metaMap).map(key => {
        const item = this[m]._metaMap[key]
        list.push({
          text: key,
          count: item.pageKeys.length,
          path: item.path
        })
      })
      return list
    }
  }
}
</script>

<style lang="stylus" scoped>
.tags-list
  min-height "calc(100vh - 4.5rem - %s)" % $headerHeight
  .list-content
    .list-item
      position relative
      margin 1.5rem 1rem
      border-radius .5rem
      box-shadow 0 1px 5px $shadowColor
      background $whiteColor
      transition transform .5s ease-in-out
      &:hover
        transform scale3d(1.05, 1.05, 1)
        transition transform .5s ease-in-out
      .item-count
        padding .5rem .5rem 0
        font-size 1rem
        color $accentColor
        text-align right
      .item-text
        padding 0 3rem 1rem
        font-size 1.4rem
        color $titleColor
.cover-list
  min-height "calc(100vh - 4.5rem - %s)" % $coverHeight
</style>
