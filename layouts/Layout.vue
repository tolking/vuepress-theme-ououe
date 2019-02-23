<template>
  <section class="latout">
    <app-header :class="{'cover-header': $themeConfig.cover }">
      <header-cover></header-cover>
    </app-header>
    <list :item="posts" :class="{'cover-list': $themeConfig.cover, 'home-list': isHome }"></list>
    <app-footer></app-footer>
  </section>
</template>

<script>
import { splitUrl } from '../lib/util.js';
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
      return this.$site.base === this.$page.regularPath
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
        return _posts;
      } else {
        const key = splitUrl(this.$page.regularPath)[0];
        return this.$pages[key];
      }
    }
  }
}
</script>
