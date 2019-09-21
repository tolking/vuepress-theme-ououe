<template>
  <section
    :style="style"
    :class="{ 'no-bg': !$themeConfig.backgroundImage || !$frontmatter.image }"
    class="info"
  >
    <info-content></info-content>
    <info-nav></info-nav>
    <Vssue
      v-if="$themeConfig.useVssue && $list.total"
      title="comment"
      class="main"
    ></Vssue>
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
</style>
