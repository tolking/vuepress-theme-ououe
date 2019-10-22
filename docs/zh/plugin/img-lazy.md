---
title: vuepress-plugin-img-lazy
description: 一个为了更好地支持图片懒加载的 vuepress 插件
---

# vuepress-plugin-img-lazy <Badge text="^1.3.7"/>

::: tip
内置插件，此插件无需你做任何配置，你只需了解使用即可
:::

> base on [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy) and [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize) and [lozad](https://github.com/ApoorvSaxena/lozad.js)

[演示](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

[源码](https://github.com/tolking/vuepress-plugin-img-lazy)

## 使用

``` md
![img](img.jpg)
<!-- 或者 -->
![img](img.jpg =500x300) <!-- 最佳 -->
<!-- 或者 -->
<img data-src="img.jpg" loading="lazy" class="lazy">
```
