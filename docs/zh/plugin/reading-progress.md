---
title: vuepress-plugin-reading-progress
description: 为 vuepress 增加阅读进度条
---

# vuepress-plugin-reading-progress <Badge text="^1.4.0"/>

::: tip
内置插件，此插件你可以直接使用或者修改插件配置，*或者禁用这个插件*

``` js
module.exports = {
  plugins: [
    ['reading-progress', false]
  ]
}
```

:::

[源码](https://github.com/tolking/vuepress-plugin-reading-progress)

## 修改配置

``` js
module.exports = {
  plugins: [
    [
      'reading-progress',
      { /* 配置 */ }
    ]
  ]
}
```

## 配置

::: tip
主题采用的默认配置为（仅在文章详情页面显示阅读进度条）

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

筛选需要显示阅读进度条的文件

例如:

``` js
{
  readingDir: null, // 将在所有页面显示阅读进度条
  // 或者
  readingDir: 'posts'
  // 或者
  readingDir: ['posts1', 'posts2', 'posts3']
  // 或者 { dir: fixed }
  readingDir: {
    posts1: 'top',
    posts2: 'bottom',
    posts3: 'left'
  }
  // 或者 RegExp
  readingDir: /[^/]+$/ // 排除以 `/` 结尾的 regularPath
  // 或者
  readingDir: new RegExp('[^/]+$')
}
```

### fixed

- Type: `string`
- Default: `top`

支持 `top`, `bottom`, `left`, `right`

设置进度条的显示位置

## Front matter

使用 `readingShow` 控制当前页面的阅读进度条显示

- Type: `string`, `boolean`
- Default: `null`
- 支持 `top`, `bottom`, `left`, `right`, `true`, `false`

``` md
---
readingShow: false
---
```

## 样式

如果希望对样式应用简单的颜色替代

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

例如:

``` styl
$readingProgressImage = linear-gradient(-120deg, #E50743 0%, #F9870F 15%, #E8ED30 30%, #3FA62E 45%, #3BB4D7 60%, #2F4D9E 75%, #71378A 80%)
```
