---
title: vuepress-plugin-blog-multidir
description: Build your blog through multiple folders for vuepress
---

# vuepress-plugin-blog-multidir

::: tip
You can modify the plugin options, or just use
:::

[Source code](https://github.com/tolking/vuepress-plugin-blog-multidir)

## Modify

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

## Options

### aliasesRoot

- Type: `string`
- default: `:root`

**Can't have the same name as your folder**  (For internal use only).

### categoryIndexPageUrl

- Type: `string`
- Default: `/category/`

### tagIndexPageUrl

- Type: `string`
- Default: `/tag/`

### categoryLayout

- Type: `string`
- Default: `Tag`

### tagLayout

- Type: `string`
- Default: `Tag`

### postLayout

- Type: `string`
- Default: `Page`

### postsDir

- Type: `string`, `array`, `Object`
- Default: `posts`

**Configures the permalink generated for you folder.**

example

``` js
postsDir: 'posts'
// or { path: permalink } `better`
postsDir: {
  posts: 'posts/:year/:month/:day/:slug',
  other: 'other/:year/:month/:day/:slug'
}
```

### permalink

- Type: `string`, `boolean(false)`
- Default: `false`

See [Permalinks](https://vuepress.vuejs.org/guide/permalinks.html#template-variables) for a list of valid variables.

### postsSorter

- Type: `function`
- Default:

``` js
postsSorter: ((prev, next) => {
  const prevTime = new Date(prev.frontmatter.date).getTime()
  const nextTime = new Date(next.frontmatter.date).getTime()
  return prevTime - nextTime > 0 ? -1 : 1
})
```

### paginationDir

- Type: `boolean`, `string`, `array`
- Default: `true`

example

``` js
paginationDir: true // Enable all paging
// or
paginationDir: false // Cancel all pages
// or
paginationDir: 'posts' // Enable single paging for `posts` folder
// or
paginationDir: ['posts1', 'posts2'] // Enable multiple paging
```

### paginationLimit

- Type: `number`
- Default: `12`

### paginatioPath

- Type: `string`
- Default: `page/`

  Path to be added for paging list

::: tip
The first page will not use it
:::

## computed

::: tip
In general, you will not use these properties unless you need to create some new components.

you can create a [issues](https://github.com/tolking/vuepress-theme-ououe/issues)
:::

### $pluginConfig

Plugin config information

### $tags

Page information sorted by tags

### $categories

Page information sorted by categories

### $lists

Page information sorted by folders

### $list

If you are in the pagination page. you can get

``` js
{
  pageKeys,
  pagination,
  path,
  posts
}
```

or If you are in the post page. you can get

``` js
{
  index,
  total,
  dir,
  lastPost,
  nextPost
}
```

from `this.$list`
