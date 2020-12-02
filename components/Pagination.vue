<template>
  <section v-if="page" class="flex-xcc main pagination">
    <nav class="flex-wac pagination-list">
      <router-link
        v-if="current !== 1"
        :to="pagination[current - 2]"
        class="list-item"
        >&lt;
      </router-link>
      <router-link
        v-for="(item, index) in grouplist"
        :key="index"
        :to="item.path || ''"
        :class="{ 'list-item-active': current === item.val }"
        class="list-item"
        >{{ item.text }}
      </router-link>
      <router-link
        v-if="current !== page"
        :to="pagination[current]"
        class="list-item"
        >&gt;
      </router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  computed: {
    pagination() {
      return this.$list.pagination
    },
    page() {
      return this.pagination && this.pagination.length
    },
    current() {
      return this.pagination && this.$route.meta.current
    },
    grouplist() {
      const count = Math.floor(this.$themeConfig.pageGroup / 2)
      let len = this.page
      let temp = []
      let list = []
      let center = this.current

      if (this.pagination) {
        if (len <= this.$themeConfig.pageGroup) {
          while (len--) {
            temp.push({
              text: this.page - len,
              val: this.page - len,
              path: this.pagination[this.page - len - 1]
            })
          }
          return temp
        }
        while (len--) {
          temp.push(this.page - len)
        }
        const idx = temp.indexOf(center)
        if (idx < count) {
          center = center + count - idx
        }
        if (this.current > this.page - count) {
          center = this.page - count
        }
        temp = temp.splice(center - count - 1, this.$themeConfig.pageGroup)
        do {
          const t = temp.shift()
          list.push({
            text: t,
            val: t,
            path: this.pagination[t - 1]
          })
        } while (temp.length)
      }
      return list
    }
  }
}
</script>

<style lang="stylus" scoped>
.pagination
  margin 1rem auto 2rem
  .pagination-list
    .list-item
      display inline-block
      margin 0 .5rem
      padding .6rem 1rem
      border 1px solid $borderColor
      border-radius .5rem
      background $bgColor
      font-size 1.1rem
      color $titleColor
      transition all .5s ease-in-out
      @media (prefers-color-scheme: dark)
        border 1px solid $borderDarkColor
        background $bgDarkColor
        color $titleDarkColor
      &:hover
        border-color $accentColor
    .list-item-active
      border-color $accentColor
      background $accentColor
      color $whiteColor
@media (max-width $phoneWidth)
  .pagination
    margin .8rem
    .pagination-list
      .list-item
        margin  0 .3rem
        padding .5rem .8rem
@media print
  .pagination
    display none
</style>
