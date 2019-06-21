<template>
  <section class="flex-ycc error">
    <h1 class="error-code">404</h1>
    <p class="error-description">Page not found</p>
    <router-link :to="$localePath" class="error-home">home</router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="stylus" scoped>
.error
  min-height calc(100vh - 4.5rem)
  .error-code
    font-size 12vw
    color #d6dadc
    font-weight 700
    letter-spacing 5px
    text-shadow 0px 0px 0 rgb(210,214,216),
                1px -1px 0 rgb(195,199,201),
                2px -2px 0 rgb(180,184,186),
                3px -3px 0 rgb(165,169,171),
                4px -4px 0 rgb(150,154,156),
                5px -5px 0 rgb(135,139,141),
                6px -6px 0 rgb(120,124,126),
                7px -7px 6px rgba(0,0,0,0),
                7px -7px 1px rgba(0,0,0,0.5),
                0px 0px 6px rgba(0,0,0,.2)
  .error-description
    font-size 2rem
    color $textColor
    font-weight 400
    opacity .5
    transition color .5s ease-in-out
    @media (prefers-color-scheme: dark)
      color $textDarkColor
  .error-home
    display inline-block
    margin 2rem 0 4rem
    font-size 2rem
    color $accentColor
    transition color .5s ease-in-out
    @media (prefers-color-scheme: dark)
      color $accentDarkColor
    &:hover
      opacity .8
</style>
