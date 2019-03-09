<template>
  <section :style="{'background-image': `url(${$frontmatter.image})`}"
    :class="{'no-bg': !$frontmatter.image}"
    class="info">
    <div class="main info-main">
      <div class="info-header">
        <h1 class="header-title">{{ $page.title }}</h1>
      </div>
      <div class="flex-wcc info-tag">
        <div v-if="categories" class="inblock tag-list">
          <router-link v-for="(item, index) in categories"
            :key="index"
            :to="$pluginConfig.categoryIndexPageUrl + item + '/'"
            class="tag-text">{{ item }}</router-link>
        </div>
        <span v-if="categories && tags">/</span>
        <div v-if="tags" class="inblock tag-list">
          <router-link v-for="(item, index) in tags"
            :key="index"
            :to="$pluginConfig.tagIndexPageUrl + item + '/'"
            class="tag-text">{{ item }}</router-link>
        </div>
      </div>
      <Content/>
      <div v-if="$themeConfig.postTime" class="info-time">
        <p v-if="createTime"
          class="time-text">{{ $themeConfig.postTime.createTime + ": " + createTime }}</p>
        <p v-if="lastUpdated"
          class="time-text">{{ $themeConfig.postTime.lastUpdated + ": " + lastUpdated }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { formatDate } from '@theme/lib/util'

export default {
  computed: {
    categories() {
      return this.$frontmatter.categories || [this.$frontmatter.category]
    },
    tags() {
      return this.$frontmatter.tags || [this.$frontmatter.tag]
    },
    createTime() {
      return this.$frontmatter.date && formatDate(this.$frontmatter.date)
    },
    lastUpdated() {
      return this.$page.lastUpdated && formatDate(this.$page.lastUpdated.split(' ')[0])
    }
  }
}
</script>

<style lang="stylus" scoped>
.info
  padding ($coverHeight / 1.6) 0.5rem 2rem
  background-size cover
  background-position center
  background-attachment fixed
  .info-main
    min-height "calc(100vh - 9.95rem - %s)" % ($coverHeight / 1.6)
    border-radius 1rem
    box-shadow 0px 0px 8px $shadowColor
    background $whiteColor
    .info-header
      padding 3rem 0 1rem
      text-align center
      .header-title
        font-size 2rem
        color $blackColor
        font-weight bold
        text-shadow 0 1px 5px $shadowColor
    .info-tag
      .tag-list
        padding .5rem 0
        .tag-text
          display inline-block
          padding .2rem .5rem
          font-size 1.2rem
          color $accentColor
    .info-time
      padding 0 2rem 2rem
      text-align right
      .time-text
        font-size .9rem
        color $textColor
.no-bg
  padding-top 2rem
  .info-main
    min-height "calc(100vh - 8.45rem - %s)" % $headerHeight
</style>
