---
title: vuepress-plugin-img-lazy
description: 一个为了更好地支持图片懒加载的 vuepress 插件
---

# vuepress-plugin-img-lazy <Badge text="^1.3.7"/>

::: tip
内置插件，此插件你可以直接使用或者修改插件配置

已经默认包含 [基础路径](https://vuepress.vuejs.org/zh/guide/assets.html#%E5%9F%BA%E7%A1%80%E8%B7%AF%E5%BE%84)
:::

[演示](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

[源码](https://github.com/tolking/vuepress-plugin-img-lazy)

::: tip
一般情况下，你只需要了解如何在 markdown 文档下使用即可
:::

``` md
![img](/img.jpg)
<!-- 或者 -->
![img](/img.jpg =500x300) <!-- 最佳 -->
<!-- 或者 -->
<img-lazy src="/img.jpg" />
```

## 修改配置

::: tip
在 `1.4.0` 以上的版本时，你可以同时控制 markdown 文档与主题的图片
:::

``` js
module.exports = {
  plugins: [
    [
      'img-lazy',
      { /* 配置 */ }
    ]
  ]
}
```

## 配置

### useNative
- Type: `Boolean`
- Default: `true`
- Required: `false`

是否使用基于原生的懒加载

::: tip
一般情况下使用原生的懒加载会比不使用加载更多的图片
:::

### selector
- Type: `string`
- Default: `lazy`
- Required: `false`

默认的懒加载类名

### rootMargin
- Type: `String`
- Default: `200px`
- Required: `false`

IntersectionObserver 的 rootMargin 配置，useNative: false 时可用

### prefix
- Type: `string` `Function`
- Default: `src => src && src.charAt(0) === '/' && !src.startsWith(ctx.base) ? ctx.base + src.slice(1) : src`
- Required: `false`

配置图片src的前缀
