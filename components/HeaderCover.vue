<template>
  <section v-if="coverImg"
    :style="{'background-image': `url(${coverImg})`}"
    class="flex-ccc header-cover">
    <h1 class="cover-title">
      <img v-if="logoImg" :src="logoImg" class="title-img"/>
      <span v-else class="title-text">{{ $title }}</span>
    </h1>
    <h2 class="cover-text">{{ $site.description }}</h2>
  </section>
</template>

<script>
export default {
  computed: {
    coverImg() {
      return this.$themeConfig.cover;
    },
    logoImg() {
      return this.$themeConfig.logo;
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
      font-size 2rem
      color $whiteColor
  .cover-text
    font-size 1.2rem
    color $whiteColor
@media (max-width $s-phoneWidth)
  .cover-header
    height 100vh
</style>
