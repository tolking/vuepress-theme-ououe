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
          >{{ item }}
        </router-link>
      </div>
      <span v-if="categories.length && tags.length" class="tag-space">/</span>
      <div v-if="tags.length" class="inblock tag-list">
        <router-link
          v-for="(item, index) in tags"
          :key="index"
          :to="$pluginConfig.tagIndexPageUrl + item + '/'"
          class="tag-text"
          >{{ item }}
        </router-link>
      </div>
    </div>
    <Content class="content" />
    <div v-if="postTime" class="content-time">
      <time
        v-if="postTime.createTime && createTime"
        :datetime="createTime"
        class="time-text"
        >{{ postTime.createTime + ': ' + createTime }}
      </time>
      <time
        v-if="postTime.lastUpdated && lastUpdated"
        :datetime="lastUpdated"
        class="time-text"
        >{{ postTime.lastUpdated + ': ' + lastUpdated }}
      </time>
    </div>
  </article>
</template>

<script>
import { getCategories, getTags } from '@theme/lib/util'

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
      return this.formatDate(this.$frontmatter.date)
    },
    lastUpdated() {
      return this.formatDate(this.$page.lastUpdated)
    },
    postTime() {
      return this.$themeConfig.postTime
    }
  },
  methods: {
    formatDate(date) {
      return (
        date && new Date(date).toLocaleString(this.$lang, this.postTime.options)
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-content
  border-radius 1rem
  box-shadow 0px 0px 8px $shadowColor
  background $whiteColor
  transition all .5s ease-in-out
  @media (prefers-color-scheme: dark)
    box-shadow 0px 0px 8px $shadowDarkColor
    background $whiteDarkColor
  @media print
    box-shadow none
  .content-header
    padding 3rem 0 1rem
    text-align center
    .header-title
      font-size 2.1rem
      color $blackColor
      font-weight bold
      text-shadow 0 1px 5px $shadowColor
      transition all .5s ease-in-out
      @media (prefers-color-scheme: dark)
        color $blackDarkColor
        text-shadow 0 1px 5px $shadowDarkColor
      @media print
        color $blackColor
        text-shadow none
  .content-tag
    .tag-list
      padding .5rem 0
      .tag-text
        display inline-block
        padding .2rem .5rem
        font-size 1.2rem
        color $accentColor
        transition all .5s ease-in-out
        @media (prefers-color-scheme: dark)
          color $accentDarkColor
    .tag-space
      color $blackColor
      transition color .5s ease-in-out
      @media (prefers-color-scheme: dark)
        color $blackDarkColor
  .content-time
    padding 0 3rem 2rem
    text-align right
    @media print
      display none
    .time-text
      display block
      font-size .9rem
      color $textColor
      transition all .5s ease-in-out
      @media (prefers-color-scheme: dark)
        color $textDarkColor
</style>
