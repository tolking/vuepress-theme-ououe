<template>
  <component :is="whatType" v-bind="whatProp">{{ value.text }}</component>
</template>

<script>
import { checkUrl } from '@theme/lib/util'

export default {
  name: 'NavLink',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    whatType() {
      return checkUrl(this.value.link) ? 'a' : 'router-link'
    },
    whatProp() {
      return checkUrl(this.value.link)
        ? {
            href: this.value.link,
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        : { to: this.value.link }
    }
  }
}
</script>
