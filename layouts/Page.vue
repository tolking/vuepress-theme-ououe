<template>
  <section class="page">
    <app-header></app-header>
    <info></info>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '@theme/components/Header.vue'
import AppFooter from '@theme/components/Footer.vue'
import HeaderCover from '@theme/components/HeaderCover.vue'
import Info from '@theme/components/Info.vue'

export default {
  name: 'page',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    Info
  }
}
</script>
