# vuepress-theme-ououe

A blog theme for VuePress by tolking

> This theme is for Vuepress 1.x which is currently in alpha

Live Demo: [My Blog](https://ououe.com)

[Documentation](https://ououe.com/lib/vuepress-theme-ououe.html)

Uses [vuepress-theme-ououe-template](https://github.com/tolking/vuepress-theme-ououe-template) to starter

Take [TryGhost/Casper](https://github.com/TryGhost/Casper) as a reference

## Installation

``` sh
npm install -d vuepress-theme-ououe
```

# Structure directores

```
+- blog
  +- .vuepress
    +- config.js
  +- posts
    +- index.md
    +- XXX.md
    ...
  +- about.md
  +- index.md
  ...
```


## Configuration

.vuepress/config.js
``` js
module.exports = {
  title: 'blog',
  description: 'Vuepress-theme-ououe',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  theme: 'ououe',
  themeConfig: {
    cover: '/cover.jpg',
    logo: '/logo.png',
    search: true,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated'
    },
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts/'
    }, {
      text: 'About',
      link: '/about.html'
    }],
    footer: [{
      text: 'Github',
      link: 'https://github.com/tolking'
    }]
  }
}
```

## Parameters

```
---
title: blog
lang: en-US
layout: Page
display: home
image: ...
date: 2019-02-22
meta:
  - name: description
    content: description
--- 
```

The post intro uses the `<!-- more -->` tag

The post uses `display: home` to show in the home page

**Default layout**

index.md -- layout: Layout

XXX.md -- layout: Page

Use layout to change default

## License

[MIT](http://opensource.org/licenses/MIT)

## Keywords

vue vuepress theme ououe blog Ghost Casper
