<template>
  <section class="page">
    <app-header></app-header>
    <info></info>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';
import HeaderCover from '../components/HeaderCover.vue';
import Info from '../components/Info.vue';

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
