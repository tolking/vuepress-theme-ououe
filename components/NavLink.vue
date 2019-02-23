<template>
  <section>
    <span v-for="(item, index) in value" :key="index" class="list-item">
      <a v-if="checkUrl(item.link)" :href="item.link" class="item-link" target="_blank">{{ item.text }}</a>
      <router-link v-else :to="item.link" class="item-link">{{ item.text }}</router-link>
    </span>
  </section>
</template>

<script>
import { checkUrl } from '../lib/util';

export default {
  name: 'nav-link',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  methods: {
    checkUrl
  }
}
</script>

<style lang="stylus" scoped>
.nav-link
  display inline-block
  vertical-align top
  margin-left .5rem
  .list-item
    display inline-block
    &:after
      content ''
      display block
      margin-left 20%
      width 60%
      height .1rem
      background $accentColor
      transform scaleX(0)
      transition transform .5s ease-out
    &:hover:after
      transform scaleX(1)
      transition transform .5s ease-out
    .item-link
      display inline-block
      padding 0 .7rem
      font-size 1.2rem
      color $whiteColor
      line-height $headerHeight
    .router-link-exact-active,
    .router-link-active
      color $accentColor
    &:nth-child(1)
      .router-link-active
        color $whiteColor
      .router-link-exact-active
        color $accentColor
.footer-link
  .list-item
    margin-left .4rem
    &:before
      content ""
      display inline-block
      width .3rem
      height .3rem
      border-radius 50%
      background $whiteColor
      vertical-align middle
    &:nth-child(1)
      margin-left 0
      &:before
        content none
    .item-link
      margin-left .4rem
      font-size .8rem
      color $whiteColor
</style>
