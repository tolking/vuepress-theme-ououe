---
title: how to use
description: how to used vuepress-theme-ououe
---

# How to use

## Installation

``` sh
yarn add vuepress-theme-ououe
# or
npm i vuepress-theme-ououe
```

## Usage

``` js
// .vuepress -> config.js
module.exports = {
  theme: 'ououe',
  themeConfig: {
    // ...
  }
}
```

## Structure directores

``` sh
+- blog
  +- .vuepress
    +- config.js
  +- posts
    +- test.md
    ...
  +- about
    +- index.md #(or README.md)
  ...
```

::: tip
**You don't need to create a `README.md(or index.md)` file in a folder that needs Pagination**

**or set `layout` like `about`**

``` md
<!-- about -> index.md -->
---
layout: Page
---
```

:::

## frontmatter

``` md
<!-- posts -> XXX.md -->
---
title: How to use
display: home
image: ...
date: 2019-02-22
tags:
  - vuepress
  - vuepress-themt-ououe
categories:
  - blog
  - theme
<!-- or -->
tag: vuepress
category: blog
---
```

### display

- type: `string`
- Required: `false`

support `home` or `none`

::: tip
use `display: home`, The current article will be displayed in the list on the home page.

use `display: none`, It will not be displayed. However, you can still access it through the right path.
:::

### image

- type: `string`
- Required: `false`

Pictures displayed in list and article backgrounds

### Change theme

``` sh
+- blog
  +- .vuepress
    +- styles
      +- palette.styl
      +- index.styl
```

- You should write custom styles in `index.styl`
- If you wish to apply simple color overrides to the styling of the [default preset](https://github.com/tolking/vuepress-theme-ououe/blob/master/styles/palette.styl) or define some color variables for using later.
- `$accentColor` and `$accentDarkColor` are best changed together
