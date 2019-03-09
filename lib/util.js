export const checkUrl = url => /^((ht|f)tps?):\/\/?/.test(url)

export const formatDate = time => {
  const date = new Date(time)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return y + '-' + m + '-' + d
}