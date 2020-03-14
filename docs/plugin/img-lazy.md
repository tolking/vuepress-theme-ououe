---
title: vuepress-plugin-img-lazy
description: a vuepress plugin to better supporting image lazy loading
---

# vuepress-plugin-img-lazy <Badge text="^1.3.7"/>

::: tip
You can modify the plugin options, or just use

[Base URL](https://vuepress.vuejs.org/guide/assets.html#rBase%20URL) already included by default
:::

> base on [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy) and [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize) and [lozad](https://github.com/ApoorvSaxena/lozad.js)

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

### useLoading

- Type: `Boolben`
- Default: `true`

Use the native image lazy-loading for the web

::: tip
In general, using native lazy loading will load more pictures than not using
:::

### selector

- Type: `string`
- Default: `lazy`

Default class name for image
