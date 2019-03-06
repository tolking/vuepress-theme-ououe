import { splitUrl, sortPosts } from './lib/util'
import { findPageByKey } from '@app/util'
import themeConfig from './lib/themeConfig'
import tagMeta from '@dynamic/tag'
import categoryMeta from '@dynamic/category'
import listMeta from '@dynamic/list'

class Classifiable {
  constructor (metaMap, pages) {
    this._metaMap = Object.assign({}, metaMap)
    Object.keys(this._metaMap).forEach(name => {
      const { pageKeys } = this._metaMap[name]
      this._metaMap[name].posts = pageKeys.map(key => findPageByKey(pages, key))
    })
  }

  get length () {
    return Object.keys(this._metaMap).length
  }

  get map () {
    return this._metaMap
  }

  get list () {
    return this.toArray()
  }

  toArray () {
    const tags = []
    Object.keys(this._metaMap).forEach(name => {
      const { posts, path } = this._metaMap[name]
      tags.push({ name, posts, path })
    })
    return tags
  }

  getItemByName (name) {
    return this._metaMap[name]
  }
}

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.mixin({
    computed: {
      $themeConfig() {
        return Object.assign(themeConfig, this.$site.themeConfig)
      },
      $tags() {
        const { pages } = this.$site
        const tags = new Classifiable(tagMeta, pages)
        return tags
      },
      $categories() {
        const { pages } = this.$site
        const categories = new Classifiable(categoryMeta, pages)
        return categories
      },
      $lists() {
        const { pages } = this.$site
        const lists = new Classifiable(listMeta, pages)
        return lists
      },
      $list() {
        const tagName = this.$route.meta.tagName
        const categoryName = this.$route.meta.categoryName
        const listName = splitUrl(this.$route.fullPath)[0] || '__home'
        let _list
        if (tagName) {
          _list = this.$tags.getItemByName(tagName)
        } else if (categoryName) {
          _list = this.$categories.getItemByName(categoryName)
        } else {
          _list = this.$lists.getItemByName(listName)
        }
        // return _list
        return sortPosts(_list.posts)
      }
    }
  })
}