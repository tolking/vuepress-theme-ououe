# vuepress-theme-ououe

> A blog theme for VuePress

Live Demo: [My Blog](https://ououe.com)

[Documentation](https://ououe.com/lib/vuepress-theme-ououe.html)

Uses [vuepress-theme-ououe-template](https://github.com/tolking/vuepress-theme-ououe-template) to starter

Take [TryGhost/Casper](https://github.com/TryGhost/Casper) as a reference

---

![preview](https://ououe.com/img/vuepress-theme-ououe.jpg)

---

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

## Options

### defaultTheme
- Type: `string`, `object`
- Default: `undefined`

By default, light or dark themes are displayed by [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), You can change it by `defaultTheme`

support `light`, `dark` or `{ theme: [begin hours, end hours] }`

``` js
module.exports = {
  theme: 'ououe',
  themeConfig: {
    defaultTheme: 'dark',
    // or
    defaultTheme: { dark: [18, 6] },
    // or
    defaultTheme: { light: [6, 18], dark: [18, 6] },
  },
  // When using `light theme` or `dark theme`, you need to add a postcss plugins to your config.js
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
```

### showThemeButton
- Type: `boolean`
- Default: `true`

`showThemeButton` to control the chose theme button display

The display of the theme is determined by 
**`botton chose theme` -> `defaultTheme` -> `prefers-color-scheme`**

### cover
- Type: `string`, `object`
- Default: `''`

``` js
cover: '/cover.jpg'
// or { base: img, path: img }
cover: {
  base: '/cover.jpg',
  '/posts/': '/posts.jpg'
  // ...
}
```

Show in the header of the index page

### logo
- Type: `string`
- Default: `''`

### search
- Type: `boolean`
- Default: `true`

### backgroundImage
- Type: `boolean`
- Default: `true`

background image on posts pages

### pageGroup
- Type: `number`
- Default: `5`

Number of pages Pagination

### postTime
- Type: `object`
- Default:

``` js
{
  createTime: 'Create Time',
  lastUpdated: 'Last Updated'
}
```

### nav
- Type: `array`
- Default: `[]`

``` js
{
  text: 'Home',
  link: '/'
},
{
  text: 'Posts',
  link: '/posts/'
},
{
  text: 'About',
  link: '/about/'
}
// ...
```

### footer
- Type: `array`
- Default: `[]`

``` js
{
  text: 'link',
  link: '/'
}
// ...
```

### useVssue
- Type: `boolean`
- Default: `false`

Use [vssue](https://vssue.js.org/guide/vuepress.html) for comment system

**You must install it before using it**

## Structure directores
```
+- blog
  +- .vuepress
    +- config.js
  +- posts
    +- test.md
    ...
  +- about
    +- index.md
  ...
```

**You don't need to create a `index.md(or README.md)` file in a folder that needs Pagination**

or set `layout`

``` md
// about -> index.md

---
layout: Page
---
```

## frontmatter

``` md
// posts -> test.md

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
--- 
```

You need to use `display` to control where the current article is displayed

``` md
// posts -> test.md

---
display: home
---
```

A list of home pages will displayed.

``` md
// posts -> test.md

---
display: none
---
```

It will not be displayed.

However, you can still access it through the right path.

## Other

###Partitioning some function into [vuepress-plugin-blog-multidir](https://github.com/tolking/vuepress-plugin-blog-multidir)

You can change the default options.

``` js
// .vuepress -> config.js
module.exports = {
  theme: 'ououe',
  themeConfig: {
    // ...
  },
  plugins: [
    ['blog-multidir', {
      // ...
    }]
  ]
}
```

[default options](https://github.com/tolking/vuepress-plugin-blog-multidir)

### Change theme

```
+- blog
  +- .vuepress
    +- styles
      +- palette.styl
      +- index.styl
```

#### palette.styl

If you wish to apply simple color overrides to the styling of the [default preset](https://github.com/tolking/vuepress-theme-ououe/blob/master/styles/palette.styl) or define some color variables for using later.

#### index.styl

add styles

[Theme Inheritance](https://v1.vuepress.vuejs.org/theme/inheritance.html)

## License

[MIT](http://opensource.org/licenses/MIT)

## Keywords

vue vuepress blog blog-theme vuepress-theme light-theme dark-theme
