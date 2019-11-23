<template>
  <img
    v-bind="$attrs"
    :data-src="src"
    :loading="imgLazy.useLoading ? 'lazy' : null"
    :class="imgLazy.selector"
  />
</template>

<script>
import imgLazy from '@dynamic/imgLazy'

export default {
  name: 'ImgLazy',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    imgLazy() {
      return imgLazy
    }
  }
}
</script>
