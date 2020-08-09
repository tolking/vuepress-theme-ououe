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
      return list.sort((a, b) => b.count - a.count)
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
      @media (prefers-color-scheme: dark)
        box-shadow 0 1px 5px $shadowDarkColor
        background $whiteDarkColor
      &:hover
        transform scale3d(1.05, 1.05, 1)
        transition transform .5s ease-in-out
      .item-count
        padding .5rem .5rem 0
        font-size 1rem
        color $accentColor
        text-align right
        transition color .5s ease-in-out
        @media (prefers-color-scheme: dark)
          color $accentDarkColor
      .item-text
        padding 0 3rem .3rem
        font-size 1.4rem
        color $titleColor
        transform translateY(-0.8rem)
        transition color .5s ease-in-out
        @media (prefers-color-scheme: dark)
          color $titleDarkColor
.cover-list
  min-height "calc(100vh - 4.5rem - %s)" % $coverHeight
@media (max-width $phoneWidth)
  .tags-list
    .list-content
      .list-item
        margin 1rem .8rem
        .item-count
          font-size 12px
        .item-text
          padding 0 1.5rem .3rem
          font-size 1rem
          transform translateY(-0.5rem)
@media print
  .tags-list .list-content .list-item
    box-shadow none
    background-color transparent
    .item-text
      color $titleColor
</style>
