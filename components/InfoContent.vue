<template>
  <article class="main info-content">
    <div class="content-header">
      <h1 class="header-title">{{ $page.title }}</h1>
    </div>
    <div v-if="categories.length || tags.length" class="flex-wcc content-tag">
      <div v-if="categories.length" class="inblock tag-list">
        <router-link
          v-for="(item, index) in categories"
          :key="index"
          :to="$pluginConfig.categoryIndexPageUrl + item + '/'"
          class="tag-text"
        >{{ item }}</router-link>
      </div>
      <span v-if="categories.length && tags.length">/</span>
      <div v-if="tags.length" class="inblock tag-list">
        <router-link
          v-for="(item, index) in tags"
          :key="index"
          :to="$pluginConfig.tagIndexPageUrl + item + '/'"
          class="tag-text"
        >{{ item }}</router-link>
      </div>
    </div>
    <Content/>
    <div v-if="postTime" class="content-time">
      <time
        v-if="createTime"
        datetime="2019-02-22"
        class="time-text"
      >{{ postTime.createTime + ": " + createTime }}</time>
      <time
        v-if="lastUpdated"
        datetime="2019-02-22"
        class="time-text"
      >{{ postTime.lastUpdated + ": " + lastUpdated }}</time>
    </div>
  </article>
</template>

<script>
import { getCategories, getTags, formatDate } from '@theme/lib/util'

export default {
  name: 'InfoContent',
  computed: {
    categories() {
      return getCategories(this.$frontmatter)
    },
    tags() {
      return getTags(this.$frontmatter)
    },
    createTime() {
      return this.$frontmatter.date
        && formatDate(this.$frontmatter.date)
    },
    lastUpdated() {
      return this.$page.lastUpdated
        && formatDate(this.$page.lastUpdated.split(' ')[0])
    },
    postTime() {
      return this.$themeConfig.postTime
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-content
  border-radius 1rem
  box-shadow 0px 0px 8px $shadowColor
  background $whiteColor
  .content-header
    padding 3rem 0 1rem
    text-align center
    .header-title
      font-size 2.2rem
      color $blackColor
      font-weight bold
      text-shadow 0 1px 5px $shadowColor
  .content-tag
    .tag-list
      padding .5rem 0
      .tag-text
        display inline-block
        padding .2rem .5rem
        font-size 1.2rem
        color $accentColor
  .content-time
    padding 0 2rem 2rem
    text-align right
    .time-text
      display block
      font-size .9rem
      color $textColor
</style>
