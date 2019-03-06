export const checkUrl = url => /^((ht|f)tps?):\/\/?/.test(url)

export const splitUrl = url => url.split('/').filter(item => item)

export const pagination = posts => {
  return sortPosts(posts)
}

export const sortPosts = posts => {
  if (posts) {
    return posts.sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    })
  }
}

export const formatDate = time => {
  const date = new Date(time)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return y + '/' + m + '/' + d
}