---
title: vuepress-plugin-img-lazy
lang: en-US
description: a markdown-it plugin to better supporting image lazy loading
image: https://picsum.photos/536/354?random&date=2019-09-21
date: 2019-09-21
vssue-title: vuepress-plugin-img-lazy
tags:
  - vue
  - vuepress
categories:
  - documentation
---

> a vuepress plugin to better supporting image lazy loading

<!-- more -->

base on [markdown-it-img-lazy](https://github.com/tolking/markdown-it-img-lazy) and [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize) and [lozad](https://github.com/ApoorvSaxena/lozad.js)

[Live Demo](https://tolking.github.io/vuepress-plugin-img-lazy/preview.html)

## Installation

``` sh
yarn add vuepress-plugin-img-lazy
# or
npm i vuepress-plugin-img-lazy
```

## Usage

``` js
module.exports = {
  plugins: [
    'img-lazy'
  ]
}
```

``` md
![img](img.jpg)
<!-- or -->
![img](img.jpg =500x300) <!-- better -->
<!-- or -->
<img loading="lazy" data-src="img.jpg" class="lazy">
```

## Options

### useLoading
- Type: `Boolben`
- Default: `true`

Use the native image [lazy-loading](https://caniuse.com/#feat=loading-lazy-attr) for the web

### selector
- Type: `string`
- Default: `lazy`

Default class name for image
