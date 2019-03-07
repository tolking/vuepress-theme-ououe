<template>
<section v-if="total > limit" class="page-nav">
  <div v-if="total" class="nav-content">
    <nuxt-link v-if="current !== 1"
      :to="setUrl(current - 1)" 
      class="pointer nav-item">
      <span class="font-18">&lt;</span>
    </nuxt-link>
    <nuxt-link v-for="(item, index) in grouplist" 
      :key="index" 
      :to="setUrl(item.val)" 
      :class="{'active': current == item.val}" 
      class="pointer nav-item">
      <span class="font-18">{{ item.text }}</span>
    </nuxt-link>
    <nuxt-link v-if="current !== page"
      :to="setUrl(current + 1)" 
      class="pointer nav-item">
      <span class="font-18">&gt;</span>
    </nuxt-link>
  </div>
</section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    // 分页路由地址
    url: {
      type: String,
      default: ""
    },
    // 数据总条数
    total: {
      type: Number,
      default: 0
    },
    // 每页显示条数
    limit: {
      type: Number,
      default: 10
    },
    // 显示页码数
    pagegroup: {
      type: Number,
      default: 6,
      coerce(v) {
        v = v > 0 ? v : 6;
        return v % 2 === 1 ? v : v + 1;
      }
    }
  },
  data() {
    return {
      current: 1
    };
  },
  computed: {
    page() {
      return Math.ceil(this.total / this.limit);
    },
    grouplist() {
      var len = this.page,
        temp = [],
        list = [],
        count = Math.floor(this.pagegroup / 2),
        center = this.current;
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({
            text: this.page - len,
            val: this.page - len
          });
        }
        return temp;
      }
      while (len--) {
        temp.push(this.page - len);
      }
      var idx = temp.indexOf(center);
      if (idx < count) {
        center = center + count - idx;
      }
      if (this.current > this.page - count) {
        center = this.page - count;
      }
      temp = temp.splice(center - count - 1, this.pagegroup);
      do {
        var t = temp.shift();
        list.push({
          text: t,
          val: t
        });
      } while (temp.length);
      if (this.page > this.pagegroup) {
        if (this.current > count + 1) {
          list.unshift({
            text: "...",
            val: list[0].val - 1
          });
        }
        if (this.current < this.page - count) {
          list.push({
            text: "...",
            val: list[list.length - 1].val + 1
          });
        }
      }
      return list;
    }
  },
  watch: {
    $route() {
      this.current = +this.$route.query.page || 1;
      this.$nextTick(() => {
        this.KeepTop();
      });
    }
  },
  mounted() {
    this.current = +this.$route.query.page || 1;
  },
  methods: {
    ...mapMutations(["KeepTop"]),
    setUrl(page) {
      let query = {...this.$route.query};
      if (page !== 1) {
        query.page = page;
      } else {
        delete query.page;
      }
      return { push: this.url, query };
    }
  }
};
</script>

<style lang="less" scoped>
@import url(../less/mixins);

.page-nav {
  padding: 1rem 0.5rem;
  background: @c-white;
  .nav-content {
    display: table;
    margin: 0 auto;
    overflow: hidden;
    height: 2rem;
    .box>.border;
    background: @c-group;
    .nav-item {
      display: inline-block;
      padding: 0 0.5rem;
      margin: 0.25rem 0;
      height: 1.5rem;
      .box>.border>.left;
      &:first-child {
        .box>.border>.left(0);
      }
      &:hover {
        .font-18 {
          background: @c-green;
          color: @c-white;
          transition: all 1s;
        }
      }
      .font-18 {
        display: inline-block;
        .box(1.5rem, 1.5rem);
        text-align: center;
        line-height: 1.5rem;
        transition: all 1s;
      }
    }
    .active {
      .font-18 {
        background: @c-green;
        color: @c-white;
      }
    }
  }
}
</style>
