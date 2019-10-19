<template>
  <section
    v-if="item"
    :style="{ 'background-image': `url(${item})` }"
    class="flex-ycc header-cover"
  >
    <h1 class="cover-title">
      <img
        v-show="!coverTitle"
        :data-src="$themeConfig.logo"
        loading="lazy"
        class="title-img lazy"
      />
      <span v-show="coverTitle" class="title-text">{{ coverTitle }}</span>
    </h1>
    <h2 class="cover-text">{{ $site.description }}</h2>
  </section>
</template>

<script>
export default {
  name: 'HeaderCover',
  props: {
    item: {
      type: String,
      default: null
    }
  },
  computed: {
    coverTitle() {
      return this.$route.path === '/'
        ? false
        : this.$themeConfig.nav.find(item => {
            return item.link === this.$route.path
          }).text ||
            this.$frontmatter.title ||
            this.$title
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-cover
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  width 100%
  height 100%
  background-size cover
  background-position center
  .cover-title
    .title-img
      height ($coverHeight / 5)
    .title-text
      font-size 4rem
      color $whiteColor
  .cover-text
    margin-top .5rem;
    font-size 1.2rem
    color $whiteColor
</style>
