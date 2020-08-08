<template>
  <section
    :style="style"
    :class="{ 'no-bg': !$themeConfig.backgroundImage || !$frontmatter.image }"
    class="info"
  >
    <info-content />
    <info-nav />
    <Vssue
      v-if="$themeConfig.useVssue && $list.total"
      :title="vssueTitle"
      :issue-id="vssueId"
      class="main"
    />
  </section>
</template>

<script>
import InfoContent from '@theme/components/InfoContent'
import InfoNav from '@theme/components/InfoNav.vue'

export default {
  name: 'Info',
  components: {
    InfoContent,
    InfoNav
  },
  computed: {
    style() {
      return this.$themeConfig.backgroundImage && this.$frontmatter.image
        ? { 'background-image': `url(${this.$frontmatter.image})` }
        : ''
    },
    vssueTitle() {
      return (
        this.$frontmatter['vssue-title'] || this.$frontmatter.title || undefined
      )
    },
    vssueId() {
      return this.$frontmatter['vssue-id'] || undefined
    }
  }
}
</script>

<style lang="stylus" scoped>
.info
  padding ($coverHeight / 1.6 + $headerHeight) 0.5rem 2rem
  min-height "calc(100vh - 9.95rem - %s)" % ($coverHeight / 1.6)
  background-size cover
  background-position center
  background-attachment fixed

.no-bg
  padding-top ($headerHeight + 2.5rem)
  min-height "calc(100vh - 8.95rem - %s)" % $headerHeight

@media print
  .info, .no-bg
    padding-top 0
    min-height auto
</style>
