<template>
  <section id="global-layout">
    <app-header :class="{ 'cover-header': showCover }">
      <header-cover v-if="showCover" :item="$cover"></header-cover>
    </app-header>
    <component :is="layout" />
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '@theme/components/Header.vue'
import AppFooter from '@theme/components/Footer.vue'
import HeaderCover from '@theme/components/HeaderCover.vue'
import Layout from '@theme/layouts/Layout.vue'
import Page from '@theme/layouts/Page.vue'
import Tag from '@theme/layouts/Tag.vue'
import NotFound from '@theme/layouts/404.vue'

export default {
  name: 'GlobalLayout',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    Layout,
    Page,
    Tag,
    NotFound
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
    showCover() {
      return this.layout !== 'Page' && this.layout !== 'NotFound'
    }
  }
}
</script>
