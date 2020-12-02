---
title: vuepress-plugin-img-lazy
description: a vuepress plugin to better supporting image lazy loading
---

# vuepress-plugin-img-lazy <Badge text="^1.3.7"/>

::: tip
You can modify the plugin options, or just use

[Base URL](https://vuepress.vuejs.org/guide/assets.html#rBase%20URL) already included by default
:::

[Live Demo](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

[Source code](https://github.com/tolking/vuepress-plugin-img-lazy)

::: tip
You need to know how to use it.
:::

``` md
![img](/img.jpg)
<!-- or -->
![img](/img.jpg =500x300) <!-- better -->
<!-- or -->
<img-lazy src="/img.jpg" />
```

## Modify

::: tip
You can control the img of markdown and theme (^1.4.0)
:::

``` js
module.exports = {
  plugins: [
    [
      'img-lazy',
      { /* options */ }
    ]
  ]
}
```

## Options

### useNative
- Type: `Boolean`
- Default: `true`
- Required: `false`

Use the native image lazy-loading for the web

::: tip
In general, using native lazy loading will load more pictures than not using
:::

### selector
- Type: `string`
- Default: `lazy`
- Required: `false`

Default class name for image

### rootMargin
- Type: `String`
- Default: `200px`
- Required: `false`

rootMargin for IntersectionObserver

### prefix
- Type: `string` `Function`
- Default: `src => src && src.charAt(0) === '/' && !src.startsWith(ctx.base) ? ctx.base + src.slice(1) : src`
- Required: `false`

Config prefix for src in images
