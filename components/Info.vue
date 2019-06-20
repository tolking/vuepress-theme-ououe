<template>
  <section
    :style="style"
    :class="{ 'no-bg': !$frontmatter.image }"
    class="info"
  >
    <info-content></info-content>
    <info-nav></info-nav>
    <Vssue
      v-if="$themeConfig.useVssue && $list.total"
      title="comment"
      class="main info-vssue"
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
      return this.$frontmatter.image
        ? { 'background-image': `url(${this.$frontmatter.image})` }
        : ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.info
  padding ($coverHeight / 1.6 + $headerHeight) 0.5rem 2rem
  background-size cover
  background-position center
  background-attachment fixed
  .info-content
    min-height "calc(100vh - 9.95rem - %s)" % ($coverHeight / 1.6)
  .info-vssue
    margin-top 3rem
    padding 2rem
    border-radius 1rem
    background var(--whiteColor)
    box-shadow 0px 0px 8px var(--shadowColor)
    transition all .5s ease-in-out
.no-bg
  padding-top ($headerHeight + 2rem)
  .info-content
    min-height "calc(100vh - 8.45rem - %s)" % $headerHeight
@media (max-width $phoneWidth)
  .info
    .info-vssue
      padding 1rem
</style>
