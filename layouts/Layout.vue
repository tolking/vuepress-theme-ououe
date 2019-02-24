<template>
  <section class="layout">
    <app-header :class="{'cover-header': cover }">
      <header-cover :item="cover"></header-cover>
    </app-header>
    <list :item="posts" :class="{'cover-list': cover, 'home-list': isHome }"></list>
    <Content class="main"/>
    <app-footer></app-footer>
  </section>
</template>

<script>
import { splitUrl, sortPosts } from '../lib/util.js';
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';
import HeaderCover from '../components/HeaderCover.vue';
import List from '../components/List.vue';

export default {
  name: 'layout',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    List
  },
  computed: {
    isHome() {
      return this.$localePath === this.$page.regularPath
    },
    cover() {
      return this.$frontmatter.image || this.$themeConfig.cover
    },
    posts() {
      if (this.isHome) {
        let _posts = [];
        for (const key in this.$pages) {
          const item = this.$pages[key];
          item.forEach(element => {
            (element.frontmatter.display === 'home') && _posts.push(element);
          });
        }
        return sortPosts(_posts);
      } else {
        const key = splitUrl(this.$page.regularPath)[0];
        return sortPosts(this.$pages[key]);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .content
    padding 0
</style>

