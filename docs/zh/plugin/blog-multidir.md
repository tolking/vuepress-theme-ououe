---
title: vuepress-plugin-blog-multidir
description: 为 vuepress 提供多文件夹的博客插件
---

# vuepress-plugin-blog-multidir

::: tip
内置插件，此插件你可以直接使用或者修改插件配置
:::

[源码](https://github.com/tolking/vuepress-plugin-blog-multidir)

## 修改配置

``` js
module.exports = {
  plugins: [
    [
      'blog-multidir',
      { /* options */ }
    ]
  ]
}
```

[Vuepress documentation](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html)

## 插件配置

### aliasesRoot

- 类型: `string`
- 默认值: `:root`

**不能够有同名的文件夹**（仅供内部使用）

### categoryIndexPageUrl

- 类型: `string`
- 默认值: `/category/`

配置 `类别` 的默认路径

### tagIndexPageUrl

- 类型: `string`
- 默认值: `/tag/`

配置 `标签` 的默认路径

### categoryLayout

- 类型: `string`
- 默认值: `Tag`

配置 `类别` 页面的引用组件

### tagLayout

- 类型: `string`
- 默认值: `Tag`

配置 `标签` 页面的引用组件

### postLayout

- 类型: `string`
- 默认值: `Page`

配置 `文章` 页面的引用组件

### postsDir

- 类型: `string`, `Object`
- 默认值: `posts`

配置需要使用 `Permalink` 的文件夹，或者采用对象方式直接配置

例如:

``` js
postsDir: 'posts'
// or { path: permalink } `最佳`
postsDir: {
  posts: 'posts/:year/:month/:day/:slug',
  other: 'other/:year/:month/:day/:slug'
}
```

### permalink

- 类型: `string`, `boolean(false)`
- 默认值: `false`

配置 [Permalink](https://vuepress.vuejs.org/zh/guide/permalinks.html#template-variables)

::: tip
默认将在 `posts` 文件夹内部文件生效，如果需要多个文件夹请使用上面的配置方式
:::

### postsSorter

- 类型: `function`
- 默认值:

``` js
postsSorter: ((prev, next) => {
  const prevTime = new Date(prev.frontmatter.date).getTime()
  const nextTime = new Date(next.frontmatter.date).getTime()
  return prevTime - nextTime > 0 ? -1 : 1
})
```

文章列表的排序方式

### paginationDir

- 类型: `boolean`, `string`, `array`
- 默认值: `true`

配置需要分页的文件夹

例如:

``` js
paginationDir: true // 全部分页
// or
paginationDir: false // 取消全部分页
// or
paginationDir: 'posts' // 仅对 `posts` 文件夹分页
// or
paginationDir: ['posts1', 'posts2'] // 对多个文件夹分页
```

### paginationLimit

- 类型: `number`
- 默认值: `12`

每个分页的数据条数

### paginatioPath

- 类型: `string`
- 默认值: `page/`

分页列表需要增加的路径

::: tip
第一页不会增加这个值
:::

## 全局计算属性

::: tip
一般你不会用到这些属性，除非你需要新建一些组件

当然你也可以提 [建议](https://github.com/tolking/vuepress-theme-ououe/issues)
:::

### $pluginConfig

插件的配置信息

### $tags

按标签排序的页面信息

### $categories

按分类排序的页面信息

### $lists

按文件夹排序的页面信息

### $list

通过 `this.$list`

在列表页面，你会获取到

``` js
{
  pageKeys,
  pagination,
  path,
  posts
}
```

或者在文章页面，你会获取到

``` js
{
  index,
  total,
  dir,
  lastPost,
  nextPost
}
```
