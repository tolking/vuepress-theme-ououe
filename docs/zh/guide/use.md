---
title: 如何使用
description: 如何使用 vuepress-theme-ououe
---

# 如何使用

## 安装

``` sh
yarn add vuepress-theme-ououe
# 或者
npm i vuepress-theme-ououe
```

## 配置

``` js
// .vuepress -> config.js
module.exports = {
  theme: 'ououe',
  themeConfig: {
    // ...
  }
}
```

## 建议目录结构

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
**你不需要在文件夹的目录下创建 `README.md(or index.md)`，因为这个页面将被自动生成用来展示当前目录下博客的分页数据**

**如果你不需要展示文件夹下的分页数据，例如 `about` 你需要配置 `layout`**

``` md
<!-- about -> index.md -->
---
layout: Page
---
```

:::

## 配置 frontmatter

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

- 类型: `string`
- 可省略

支持 `home` 或者 `none`

::: tip
使用 `display: home` 时，当前文章将会主页的列表中显示

使用 `display: none` 时，当前文章将不会显示在任何列表中，但你仍然可以通过正确的路由来访问它
:::

### image

- 类型: `string`
- 可省略

显示在列表和文章背景中的图片

## 修改样式

``` sh
+- blog
  +- .vuepress
    +- styles
      +- palette.styl
      +- index.styl
```

- 你应该将自定义样式写到 `index.styl` 里面
- 通过 `palette.styl` 文件主题的颜色参数，参考 [default preset](https://github.com/tolking/vuepress-theme-ououe/blob/master/styles/palette.styl)
- `$accentColor` 与 `$accentDarkColor` 最好一起被修改
