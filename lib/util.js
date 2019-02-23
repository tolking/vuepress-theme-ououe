export const checkUrl = url => {
  return /^((ht|f)tps?):\/\/?/.test(url);
}

export const splitUrl = url => url.split('/').filter(item => item);

export const splitPages = allPages => {
  let pages = {};
  allPages.forEach(item => {
    const path = item.path;
    const arrPath = splitUrl(path);
    if (arrPath.length > 1 && !arrPath[0].includes('.html')) {
      const key = arrPath[0];
      if (pages[key]) {
        const element = pages[key];
        element.push(item);
      } else {
        pages[key] = [item]
      }
    }
  });
  return pages
}
