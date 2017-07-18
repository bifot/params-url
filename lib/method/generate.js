module.exports = (url, params) => {
  if (!url || !params || !Object.keys(params)) {
    return undefined
  }

  let link = url[--url.length] === '/' ? url.substr(0, --url.length) : url

  Object.keys(params).forEach((key, i) => {
    const symbol = i === 0 ? '?' : '&'

    if (typeof params[key] === 'object') {
      const query = params[key].map(item => `${key}=${item}`).join('&')
      link += `${symbol}${encodeURI(query)}`
    } else {
      const query = params[key]
      link += `${symbol}${key}=${encodeURI(query)}`
    }
  })

  return link
}
