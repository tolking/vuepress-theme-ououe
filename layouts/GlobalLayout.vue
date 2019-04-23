<template>
  <section id="global-layout">
    <app-header :class="{ 'cover-header': layout !== 'Page' }">
      <header-cover v-if="layout !== 'Page'" :item="$cover"></header-cover>
    </app-header>
    <component :is="layout"/>
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

export default {
  name: 'GlobalLayout',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    Layout,
    Page,
    Tag
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
    }
  }
}
</script>
