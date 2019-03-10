<template>
  <section class="flex-cc main tags-list">
    <nav class="flex-wbc list-content">
      <router-link v-for="(item, index) in list"
        :key="index"
        :to="item.path"
        class="list-item">
        <p class="item-count">{{ item.count }}</p>
        <h3 class="item-text">{{ item.text }}</h3>
      </router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'tag',
  computed: {
    list() {
      const m = this.$route.path === this.$pluginConfig.categoryIndexPageUrl
        ? '$categories'
        : '$tags'
      let list = []
      for (const key in this[m]._metaMap) {
        if (this[m]._metaMap.hasOwnProperty(key)) {
          const paginatioPath = this.$pluginConfig.paginatioPath
          const item = this[m]._metaMap[key]
          const _key = key.includes(paginatioPath)
            ? key.split(paginatioPath)[0]
            : key
          const _tag = list.filter(item => item.text === _key)

          if (_tag.length) {
            _tag[0].count += item.pageKeys.length
          } else {
            list.push({
              text: _key,
              count: item.pageKeys.length,
              path: item.path.includes(paginatioPath)
                ? item.path.split(paginatioPath)[0]
                : item.path
            })
          }
        }
      }
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
