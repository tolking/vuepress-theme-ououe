# Change Log

[README](README.md) | [CHANGELOG](CHANGELOG.md)

## 1.3.0
- add dark theme (change theme using switch button on the left)
- you need to add a postcss plugins to your config file

``` js
// .vuepress -> config.js
module.exports = {
  theme: 'ououe',
  themeConfig: {
    // ...
  },

  // add
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
```

## 1.2.3
- fix error styles on 1.0
- optimizing styles

## 1.2.2
- change styles

## 1.2.1
- add 404 page
- change styles

## 1.2.0
- optimizing html
- change styles
- fix bug

## 1.1.2
- change styles

## 1.1.1
- add last and next link for post
- change styles
- add [vssue](https://vssue.js.org/guide/vuepress.html) for comment system

  **You must install it before using it**

## 1.1.0
- add tags and categories
- add pagination
- **You don't need to create a `index.md(or README.md)` file in a folder that needs Pagination**

## 1.0.1
- add time info in the post page
- fix styles

## 1.0.0
- Initial version
- [Documentation](https://ououe.com/lib/vuepress-theme-ououe.html)
