<template>
  <section class="flex-w main list">
    <router-link
      v-for="(item, index) in $list.posts"
      :key="index"
      :to="item.path"
      :class="{ 'no-image': !item.frontmatter.image }"
      class="flex-y list-item"
    >
      <div v-if="item.frontmatter.image" class="flex-xcc item-img">
        <img-lazy :src="item.frontmatter.image" :alt="item.title" class="img" />
      </div>
      <article class="flex-yb item-content">
        <div v-if="getCategories(item.frontmatter)" class="content-categories">
          <router-link
            v-for="(item, index) in getCategories(item.frontmatter)"
            :key="index"
            :to="$pluginConfig.categoryIndexPageUrl + item + '/'"
            class="item-text"
            >{{ item }}
          </router-link>
        </div>
        <h2 class="content-title">{{ item.title }}</h2>
        <div v-html="item.excerpt" class="content" />
        <div v-if="getTags(item.frontmatter)" class="content-tags">
          <router-link
            v-for="(item, index) in getTags(item.frontmatter)"
            :key="index"
            :to="$pluginConfig.tagIndexPageUrl + item + '/'"
            class="item-text"
            >{{ item }}
          </router-link>
        </div>
      </article>
    </router-link>
  </section>
</template>

<script>
import { getCategories, getTags } from '@theme/lib/util'

export default {
  name: 'List',
  methods: {
    getCategories(item) {
      return getCategories(item)
    },
    getTags(item) {
      return getTags(item)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  position relative
  margin-top ($headerHeight + 2rem)
  min-height "calc(100vh - 6.5rem - %s)" % $headerHeight
  .list-item
    flex: 1 1 300px;
    margin 0 .8rem 2rem
    min-height $listCardHeight
    border-radius .5rem
    box-shadow 0 1px 8px $shadowColor
    background $whiteColor
    overflow hidden
    transition all .5s ease-in-out
    @media (prefers-color-scheme: dark)
      box-shadow 0 1px 8px $shadowDarkColor
      background $whiteDarkColor
    &:hover
      box-shadow 0 3px 15px $shadowColor
      transform scale3d(1.02, 1.02, 1)
      transition all .5s ease-in-out
      @media (prefers-color-scheme: dark)
        box-shadow 0 3px 15px $shadowDarkColor
      .item-content
        .content-title:after
          transform scaleX(1)
          transition transform .5s ease-out
    .item-img
      max-height ($listCardHeight / 1.5)
      overflow hidden
      .img
        height auto
    .item-content
      flex: 1
      padding 1rem
      .content-categories
      .content-tags
        white-space nowrap
        overflow hidden
        .item-text
          padding .2rem
          font-size 1rem
          color $textColor
          transition transform .5s ease-out
          @media (prefers-color-scheme: dark)
            color $textDarkColor
            &:hover
              color $accentDarkColor
          &:hover
            color $accentColor
      .content-tags
        text-align right
      .content-title
        font-size 1.3rem
        color $titleColor
        line-height 2.5rem
        font-weight bold
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        transition transform .5s ease-out
        @media (prefers-color-scheme: dark)
          color $titleDarkColor
          &:after
            background $accentDarkColor
        &:after
          content ""
          display block
          margin-left 5%
          width 98%
          height .1rem
          background $accentColor
          transform scaleX(0)
          transition transform .5s ease-out
      .content
        flex 1
        margin-top .5rem
        padding 0
        max-height $listCardHeight
        overflow hidden
        font-size .9rem
.cover-list
  margin-top -2rem
  min-height "calc(100vh - 2.5rem - %s)" % $coverHeight
@media (min-width $phoneWidth)
  .home-list
    .list-item:nth-child(6n+1):not(.no-image)
      flex: 1 1 100%;
      flex-direction: row;
      .item-img
        min-height 19rem
      .item-content
        flex: 1 1 60%
@media (max-width $phoneWidth)
  .list
    .list-item
      margin 0 0 1rem
@media print
  .list .list-item
    border-radius 0
    box-shadow none
    page-break-inside avoid
    &:nth-child(2n)
      margin-left .8rem
    .item-img .img
      white-space pre-wrap
      page-break-inside avoid
    .item-content
      .content-categories
      .content-tags
        .item-text
          color $textColor
      .content-title
        color $titleColor
</style>
