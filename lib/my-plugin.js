const { datatypes: { isString }} = require('@vuepress/shared-utils')

module.exports = (options, ctx) => {
  const {
    categoryIndexPageUrl = '/category/',
    tagIndexPageUrl = '/tag/',
    permalink = false,
    postsDir = 'posts',
    postLayout = 'Page',
    pagination = {
      limit: 1,
      url: '/p'
    }
  } = options

  return {
    name: 'vuepress-plugin-theme-ououe',
    /**
     * Create tag page and category page and lists data.
     */
    async ready () {
      const { pages } = ctx
      const tagMap = {}
      const categoryMap = {}
      const listMap = {}

      const curryHandler = (map, scope) => (key, pageKey, pagination) => {
        if (key) {
          if (!map[key]) {
            map[key] = {
              path: scope
                ? `/${scope}/${key}/`
                : key.startsWith('__home')
                ? key.split('__home')[1] || '/'
                : `/${key}/`,
              pageKeys: []
            }
          }
          map[key].pageKeys.push(pageKey)
          map[key].pagination = pagination
        }
      }
      const setPagination = (map, scope) => {
        const { limit, url } = pagination
        const handlePage = curryHandler(map, scope)
      
        for (const key in map) {
          if (map.hasOwnProperty(key)) {
            const item = map[key]
            const pageKeys = [...item.pageKeys]
            const page = ~~(pageKeys.length / limit)
            // all pagination link
            const pagination = Array.from(Array(page), (v, k) => {
              const link = scope
                ? `/${scope}/${key}/`
                : key.startsWith('__home')
                ? key.split('__home')[1] || ''
                : `/${key}`
              if (k) {
                return link + url + (k + 1) + '/'
              } else {
                return link + '/'
              }
            })
            if (page > 1) {
              for (let i = 1; i <= page; i++) {
                const _pageKeys = pageKeys.splice(0, limit)
                
                if (i === 1) {
                  item.pageKeys = _pageKeys
                  item.pagination = pagination
                } else {
                  _pageKeys.forEach(item => {
                    handlePage(key + url + i, item, pagination)
                  });
                }
              }
            }
          }
        }
        return map
      }

      const handleTag = curryHandler(tagMap, 'tag')
      const handleCategory = curryHandler(categoryMap, 'category')
      const handlelist = curryHandler(listMap)

      pages.sort((a, b) => {
        return new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
      }).forEach(({
        key,
        regularPath,
        frontmatter: {
          tag,
          tags,
          category,
          categories,
          display
        }
      }) => {
        const arrPath = regularPath.split('/').filter(item => item);

        isString(tag)
          && handleTag(tag, key)
        isString(category)
          && handleCategory(category, key)
        Array.isArray(tags)
          && tags.forEach(tag => handleTag(tag, key))
        Array.isArray(categories)
          && categories.forEach(category => handleCategory(category, key))
        display === 'home'
          && handlelist('__home', key)
        display !== 'none'
          && arrPath.length > 1
          && !arrPath[0].includes('.html')
          && handlelist(arrPath[0], key)
      })

      ctx.tagMap = setPagination(tagMap, 'tag')
      ctx.categoryMap = setPagination(categoryMap, 'category')
      ctx.listMap = setPagination(listMap)

      const extraPages = [
        {
          permalink: tagIndexPageUrl,
          frontmatter: { title: 'Tags', layout: 'Tag' }
        },
        {
          permalink: categoryIndexPageUrl,
          frontmatter: { title: 'Categories', layout: 'Tag' }
        },
        ...Object.keys(ctx.tagMap).map(tagName => ({
          permalink: ctx.tagMap[tagName].path,
          meta: { tagName },
          frontmatter: { title: `${tagName} | Tag` }
        })),
        ...Object.keys(ctx.categoryMap).map(categoryName => ({
          permalink: ctx.categoryMap[categoryName].path,
          meta: { categoryName },
          frontmatter: { title: `${categoryName} | Category` }
        })),
        ...Object.keys(ctx.listMap).map(listName => ({
          permalink: ctx.listMap[listName].path,
          meta: { listName },
          frontmatter: { title: listName.includes('__home') ? '' : listName }
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
        },
        {
          name: 'list.js',
          content: `export default ${JSON.stringify(ctx.listMap, null, 2)}`
        }
      ]
    },
    /**
     * add layout and set permalink
     */
    extendPageData($page) {
      const { regularPath, frontmatter: { layout }} = $page
      const setLink = (dir, link) => {
        link
          && regularPath.startsWith(`/${dir}/`)
          && regularPath.includes('.html')
          && ($page.frontmatter.permalink = link)
      }

      !layout
        && ($page.frontmatter.layout = regularPath.includes('.html') ? postLayout : 'Layout')
      if (isString(postsDir)) {
        setLink(postsDir, permalink)
      } else if (Array.isArray(postsDir)) {
        postsDir.forEach(item => {
          setLink(item, permalink)
        })
      } else {
        for (const key in postsDir) {
          if (postsDir.hasOwnProperty(key)) {
            const link = postsDir[key];
            setLink(key, link)
          }
        }
      }
    }
  }
}