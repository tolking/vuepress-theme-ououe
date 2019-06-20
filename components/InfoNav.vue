<template>
  <section v-if="last || next" class="flex-xb main info-nav">
    <router-link v-if="last" :to="last.path" class="flex-xb nav-item">
      <div class="flex-xcc item-img">
        <img :src="last.frontmatter.image" :alt="last.title" class="img" />
      </div>
      <article class="flex-ysc item-content">
        <h2 class="content-title">{{ last.title }}</h2>
        <div v-html="last.excerpt" class="content-text"></div>
      </article>
    </router-link>
    <router-link v-if="next" :to="next.path" class="flex-xb nav-item">
      <div class="flex-xcc item-img">
        <img :src="next.frontmatter.image" :alt="next.title" class="img" />
      </div>
      <article class="flex-ysc item-content">
        <h2 class="content-title">{{ next.title }}</h2>
        <div v-html="next.excerpt" class="content-text"></div>
      </article>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'InfoNav',
  computed: {
    last() {
      return this.$list.lastPost || false
    },
    next() {
      return this.$list.nextPost || false
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-nav
  .nav-item
    margin-top 2rem
    width 100%
    max-height 12rem
    border-radius 1rem
    overflow hidden
    background var(--whiteColor)
    box-shadow 0px 0px 8px var(--shadowColor)
    transition all .5s ease-in-out
    &:nth-child(2)
      margin-left 2rem
    &:hover
      transform scale3d(1.01, 1.01, 1)
      transition all .5s ease-in-out
    .item-img
      width 30%
      min-height ($listCardHeight / 2)
      max-height 12rem
      overflow hidden
      .img
        width auto
    .item-content
      flex 1 0 60%
      padding .5rem 1rem
      .content-title
        font-size 1.3rem
        color var(--titleColor)
        font-weight bold
        transition color .5s ease-in-out
      .content-text
        flex 1
        margin-top .5rem
        max-height $listCardHeight
        overflow hidden
        font-size 1rem
        color var(--textColor)
        line-height 1.5rem
        transition color .5s ease-in-out
@media (max-width $phoneWidth)
  .info-nav
    flex-direction column
    justify-content center
    padding 0
    .nav-item
      margin-top 1rem
      &:nth-child(2)
        margin-left 0
</style>
