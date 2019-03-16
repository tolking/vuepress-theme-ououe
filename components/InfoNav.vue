<template>
  <section v-if="last || next" class="flex-b main info-nav">
    <router-link v-if="last" :to="last.path" class="flex-b nav-item">
      <div :style="{ 'background-image': `url(${last.frontmatter.image})` }"
        class="item-img"></div>
      <article class="flex-csc item-content">
        <h2 class="content-title">{{ last.title }}</h2>
        <div v-html="last.excerpt" class="content-text"></div>
      </article>
    </router-link>
    <router-link v-if="next" :to="next.path" class="flex-b nav-item">
      <div :style="{ 'background-image': `url(${next.frontmatter.image})` }"
        class="item-img"></div>
      <article class="flex-csc item-content">
        <h2 class="content-title">{{ next.title }}</h2>
        <div v-html="next.excerpt" class="content-text"></div>
      </article>
    </router-link>
  </section>
</template>

<script>
export default {
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
    border-radius 1rem
    overflow hidden
    background $whiteColor
    box-shadow 0px 0px 8px $shadowColor
    transition transform .5s ease-in-out
    &:nth-child(2)
      margin-left 2rem
    &:hover
      transform scale3d(1.01, 1.01, 1)
      transition transform .5s ease-in-out
    .item-img
      width 35%
      min-height ($listCardHeight / 2)
      background-size cover
      background-position center
    .item-content
      flex 1
      padding .5rem 1rem
      .content-title
        font-size 1.3rem
        color $titleColor
        font-weight bold
      .content-text
        flex 1
        margin-top .5rem
        max-height $listCardHeight
        overflow hidden
        font-size 1rem
        color $textColor
        line-height 1.5rem
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
