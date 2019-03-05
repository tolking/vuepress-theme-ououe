export const checkUrl = url => {
  return /^((ht|f)tps?):\/\/?/.test(url)
}

export const splitUrl = url => url.split('/').filter(item => item)

export const splitPages = allPages => {
  let pages = {};
  allPages.forEach(item => {
    const { path, frontmatter: { tags, categorys } } = item
    const arrPath = splitUrl(path);
    if (arrPath.length > 1 && !arrPath[0].includes('.html')) {
      const key = arrPath[0];
      if (pages[key]) {
        const element = pages[key]
        element.push(item)
      } else {
        pages[key] = [item]
      }
    }
    if (tags) {
      if (pages.tags) {
        const element = pages.tags
        element.push(item)
      } else {
        pages.tags = [item]
      }
    }
    if (categorys) {
      if (pages.categorys) {
        const element = pages.categorys
        element.push(item)
      } else {
        pages.categorys = [item]
      }
    }
  })
  return pages
}

export const sortPosts = posts => {
  return posts.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  })
}

export const formatDate = time => {
  const date = new Date(time)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return y + '/' + m + '/' + d
}