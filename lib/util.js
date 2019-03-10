export const checkUrl = url => /^((ht|f)tps?):\/\/?/.test(url)

export const formatDate = time => {
  const date = new Date(time)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return y + '-' + m + '-' + d
}

export const getCategories = item => {
  if (item.categories) {
    return item.categories
  } else if (item.category) {
    return [item.category]
  } else {
    return []
  }
}

export const getTags = item => {
  if (item.tags) {
    return item.tags
  } else if (item.tag) {
    return [item.tags]
  } else {
    return []
  }
}
