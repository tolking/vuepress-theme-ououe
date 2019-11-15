<template>
  <img
    v-bind="$attrs"
    :data-src="src"
    :loading="$imgLazyConfig.useLoading ? 'lazy' : null"
    :class="$imgLazyConfig.selector"
  />
</template>

<script>
export default {
  name: 'ImgLazy',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
