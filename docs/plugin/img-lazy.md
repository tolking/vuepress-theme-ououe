---
title: vuepress-plugin-img-lazy
description: a vuepress plugin to better supporting image lazy loading
---

# vuepress-plugin-img-lazy <Badge text="^1.3.7"/>

::: tip
 You don't need to make any options for this plugin. You just need to know how to use it.
:::

> base on [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy) and [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize) and [lozad](https://github.com/ApoorvSaxena/lozad.js)

[Live Demo](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

[Source code](https://github.com/tolking/vuepress-plugin-img-lazy)

## Usage

``` md
![img](img.jpg)
<!-- or -->
![img](img.jpg =500x300) <!-- better -->
<!-- or -->
<img loading="lazy" data-src="img.jpg" class="lazy">
```
