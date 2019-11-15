<template>
  <section class="tag">
    <tags-list :class="{ 'cover-list': $cover }" />
  </section>
</template>

<script>
import TagsList from '@theme/components/TagsList.vue'

export default {
  name: 'Tag',
  components: {
    TagsList
  }
}
</script>
