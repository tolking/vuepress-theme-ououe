<template>
  <section :style="{'background-image': `url(${$frontmatter.image})`}"
    :class="{'no-bg': !$frontmatter.image}"
    class="info">
    <div class="main info-main">
      <div class="info-header">
        <h1 class="header-title">{{ $page.title }}</h1>
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
import { formatDate } from '../lib/util'
export default {
  computed: {
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
  padding-top ($coverHeight / 1.6)
  padding-bottom 2rem
  background-size cover
  background-position center
  background-attachment fixed
  .info-main
    min-height "calc(100vh - 9.75rem - %s)" % ($coverHeight / 1.6)
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
    .info-time
      padding 0 2rem 2rem
      text-align right
      .time-text
        font-size .9rem
        color $textColor

.no-bg
  padding-top 2rem
  .info-main
    min-height "calc(100vh - 8.25rem - %s)" % $headerHeight
</style>
