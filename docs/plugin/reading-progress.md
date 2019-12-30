---
title: vuepress-plugin-reading-progress
description: add reading progress bar for vuepress
---

# vuepress-plugin-reading-progress <Badge text="^1.4.0"/>

::: tip
You can modify the plugin options, or just use, *or disable the plugin*

``` js
module.exports = {
  plugins: [
    ['reading-progress', false]
  ]
}
```

:::

[Source code](https://github.com/tolking/vuepress-plugin-reading-progress)

## Modify

``` js
module.exports = {
  plugins: [
    [
      'reading-progress',
      { /* options */ }
    ]
  ]
}
```

## Options

::: tip
The default options of the theme is (display the reading progress bar only on the posts page)

``` js
module.exports = {
  plugins: [
    ['reading-progress', { readingDir: /[^/]+$/ }]
  ]
}
```

:::

### readingDir

- Type: `null`, `string`, `array`, `object`, `RegExp`
- Default: `null`

Specify regularPath that display reading progress bar

example

``` js
{
  readingDir: null, // Display reading progress bar on all pages
  // or
  readingDir: 'posts'
  // or
  readingDir: ['posts1', 'posts2', 'posts3']
  // or { dir: fixed }
  readingDir: {
    posts1: 'top',
    posts2: 'bottom',
    posts3: 'left'
  }
  // or RegExp
  readingDir: /[^/]+$/ // exclude regularPath end with `/`
  // or
  readingDir: new RegExp('[^/]+$')
}
```

### fixed

- Type: `string`
- Default: `top`

support `top`, `bottom`, `left`, `right`

set position for reading progress bar

## Front matter

Change the reading progress bar display of the current page by use `readingShow`

- Type: `string`, `boolean`
- Default: `null`
- one of `top`, `bottom`, `left`, `right`, `true`, `false`

``` md
---
readingShow: false
---
```

## Style

If you wish to apply simple color overrides to the styling

``` sh
+- .vuepress
  +- styles
    +- palette.styl
```

``` styl
$readingBgColor = transparent
$readingZIndex = 1000
$readingSize = 3px
$readingProgressColor = $accentColor
$readingProgressImage = none
```

example

``` styl
$readingProgressImage = linear-gradient(-120deg, #E50743 0%, #F9870F 15%, #E8ED30 30%, #3FA62E 45%, #3BB4D7 60%, #2F4D9E 75%, #71378A 80%)
```
