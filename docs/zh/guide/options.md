---
title: 主题配置
description: vuepress-theme-ououe 的主题配置
---

# 主题配置

### defaultTheme <Badge text="^1.3.6"/>
- 类型: `string`, `object`
- 可省略

::: tip
默认情况下，显示 `浅色` 或者 `深色` 主题由 [prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) 决定。通过使用 `defaultTheme` 可以设置一个默认值
:::

支持 `light`, `dark` 或者 `{ theme: [begin hours, end hours] }`

``` js {4,6,8,13}
module.exports = {
  theme: 'ououe',
  themeConfig: {
    defaultTheme: 'dark',
    // 或者
    defaultTheme: { dark: [18, 6] },
    // 或者
    defaultTheme: { light: [6, 18], dark: [18, 6] },
  },
  // 当你使用 defaultTheme 时，你需要增加一个如下的 postcss 插件
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
```

### showThemeButton <Badge text="^1.3.6"/>
- 类型: `boolean`
- 默认值: `true`

用来控制是否显示切换浅色与深色主题的按钮，需要指定 `defaultTheme`

::: tip
显示浅色或者深色主题又下面几项决定

**`botton chose theme` -> `defaultTheme` -> `prefers-color-scheme`**
:::

### cover
- 类型: `string`, `object`
- 默认值: `''`

在列表页面头部显示的图片

``` js
cover: '/cover.jpg'
// or { base: img, path: img }
cover: {
  base: '/cover.jpg',
  '/posts/': '/posts.jpg'
  // ...
}
```

### logo
- 类型: `string`
- 默认值: `''`

显示在列表页面 `cover` 上的图片

### search
- 类型: `boolean`
- 默认值: `true`

是否显示搜索框

### backgroundImage <Badge text="^1.3.4"/>
- 类型: `boolean`
- 默认值: `true`

是否显示文章页面的背景图片

### pageGroup
- 类型: `number`
- 默认值: `5`

分页组件显示的分页数

### postTime
- 类型: `object`
- 默认值:

``` js
postTime: {
  createTime: '创建时间',
  lastUpdated: '更新时间'
}
```

### nav
- 类型: `array`
- 默认值: `[]`

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
- 类型: `array`
- 默认值: `[]`

``` js
footer: [
  { text: 'link', link: '/' }
  // ...
]
```

### useVssue <Badge text="^1.1.1"/>
- 类型: `boolean`
- 默认值: `false`

使用 `vssue` 做为评论系统

::: tip
**在使用之前你需要安装它**

前往 [vssue](https://vssue.js.org/guide/vuepress.html) 了解如何使用
:::

## 其它配置

请参考 [plugin](../plugin/blog-multidir)
