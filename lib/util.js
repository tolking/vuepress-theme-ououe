export const checkUrl = url => /^((ht|f)tps?):\/\/?/.test(url)

export const objectDeepMerge = (obj1, obj2) => {
  let key
  for (key in obj2) {
    obj1[key] =
      obj1[key] && obj1[key].toString() === '[object Object]'
        ? objectDeepMerge(obj1[key], obj2[key])
        : (obj1[key] = obj2[key])
  }
  return obj1
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
