const { datatypes: { isString }} = require('@vuepress/shared-utils')

module.exports = (options, ctx) => {
  const {
    categoryIndexPageUrl = '/categorys/',
    tagIndexPageUrl = '/tags/'
  } = options

  return {
    name: 'vuepress-plugin-theme-ououe',
    /**
     * add layout
     */
    extendPageData($page) {
      if (!$page.frontmatter.layout && $page.regularPath.includes('.html')) {
        $page.frontmatter.layout = 'Page';
      } else {
        $page.frontmatter.layout = 'Layout';
      }
    },
    /**
     * Create tag page and category page.
     */
    async ready () {
      const { pages } = ctx
      const tagMap = {}
      const categoryMap = {}

      const curryHandler = (scope, map) => (key, pageKey) => {
        if (key) {
          if (!map[key]) {
            map[key] = {}
            map[key].path = `/${scope}/${key}.html`
            map[key].pageKeys = []
          }
          map[key].pageKeys.push(pageKey)
        }
      }

      const handleTag = curryHandler('tag', tagMap)
      const handleCategory = curryHandler('category', categoryMap)

      pages.forEach(({
        key,
        frontmatter: {
          tag,
          tags,
          category,
          categories
        }
      }) => {
        if (isString(tag)) {
          handleTag(tag, key)
        }
        if (Array.isArray(tags)) {
          tags.forEach(tag => handleTag(tag, key))
        }
        if (isString(category)) {
          handleCategory(category, key)
        }
        if (Array.isArray(categories)) {
          categories.forEach(category => handleCategory(category, key))
        }
      })

      ctx.tagMap = tagMap
      ctx.categoryMap = categoryMap

      const extraPages = [
        {
          permalink: tagIndexPageUrl,
          frontmatter: {
            title: `Tags`,
            layout: 'Layout',
            display: 'none'
          }
        },
        {
          permalink: categoryIndexPageUrl,
          frontmatter: {
            title: `Categories`,
            layout: 'Layout',
            display: 'none'
          }
        },
        ...Object.keys(tagMap).map(tagName => ({
          permalink: tagMap[tagName].path,
          meta: { tagName },
          frontmatter: {
            title: `${tagName} | Tag`,
            layout: 'Layout',
            display: 'none'
          }
        })),
        ...Object.keys(categoryMap).map(categoryName => ({
          permalink: categoryMap[categoryName].path,
          meta: { categoryName },
          frontmatter: {
            title: `${categoryName} | Category`,
            layout: 'Layout',
            display: 'none'
          }
        }))
      ]
      await Promise.all(extraPages.map(page => ctx.addPage(page)))
    },
     /**
     * Generate tag and category metadata.
     */
    async clientDynamicModules () {
      return [
        {
          name: 'tag.js',
          content: `export default ${JSON.stringify(ctx.tagMap, null, 2)}`
        },
        {
          name: 'category.js',
          content: `export default ${JSON.stringify(ctx.categoryMap, null, 2)}`
        }
      ]
    }
  }
}