---
title: options
description: options of the vuepress-theme-ououe
--- 

# Options

### defaultTheme <Badge text="^1.3.6"/>

- Type: `string`, `object`
- Required: `false`

::: tip
By default, light or dark themes are displayed by [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), You can change it by `defaultTheme`
:::

support `light`, `dark` or `{ theme: [begin hours, end hours] }`

``` js {4,6,8,13}
module.exports = {
  theme: 'ououe',
  themeConfig: {
    defaultTheme: 'dark',
    // or
    defaultTheme: { dark: [18, 6] },
    // or
    defaultTheme: { light: [6, 18], dark: [18, 6] },
  },
  // When using `defaultTheme`, you need to add a postcss plugins to your config.js
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
```

### showThemeButton <Badge text="^1.3.6"/>

- Type: `boolean`
- Default: `true`

`showThemeButton` to control the chose theme button display

::: tip
The display of the theme is determined by 

**`botton chose theme` -> `defaultTheme` -> `prefers-color-scheme`**
:::

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

### backgroundImage <Badge text="^1.3.4"/>

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
postTime: {
  createTime: 'Create Time',
  lastUpdated: 'Last Updated',
  options: { dateStyle: 'medium' }
}
```

Time displayed at the bottom of the posts pages

::: tip
#### createTime / lastUpdated

- Type: `string`, `boolean(false)`
- Default: `Create Time / Last Updated`

using `false` will not display time

#### options <Badge text="^1.4.1"/>

- Type: `object`
- Default: `{ dateStyle: 'medium' }`

Config of format time [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
:::

### nav

- Type: `array`
- Default: `[]`

``` js
nav: [
  { text: 'Home', link: '/' },
  { text: 'Posts', link: '/posts/' },
  { text: 'Tags', link: '/tag/' },
  { text: 'Categories', link: '/category/' },
  { text: 'About', link: '/about/' }
  // ...
]
```

### footer

- Type: `array`
- Default: `[]`

``` js
footer: [
  { text: 'link', link: '/' }
  // ...
]
```

### useVssue <Badge text="^1.4.1"/>

- Type: `boolean`
- Default: `false`

Use `vssue` for comment system

::: tip
**You must install it before using it**

How to use [vssue](https://vssue.js.org/guide/vuepress.html)

then, in frontmatter

``` md
---
vssue-title: vssue-title
vssue-id: vssue-id
---
```

#### vssue-title

- Type: `string`
- Default: as same as title
- Required: `false`

#### vssue-id

- Type: `string`
- Required: `false`
:::

## Other

[plugin](../plugin/blog-multidir)
