<template>
  <section class="tag">
    <app-header :class="{ 'cover-header': cover }">
      <header-cover :item="cover"></header-cover>
    </app-header>
    <tags-list :class="{ 'cover-list': cover }"></tags-list>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '@theme/components/Header.vue';
import AppFooter from '@theme/components/Footer.vue';
import HeaderCover from '@theme/components/HeaderCover.vue';
import TagsList from '@theme/components/TagsList.vue';

export default {
  name: 'page',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    TagsList
  },
  computed: {
    cover() {
      const item = this.$themeConfig.cover
      return this.$frontmatter.image
        || typeof item === 'string'
          ? item
          : item[this.$route.path]
            || item.base
    }
  }
}
</script>
