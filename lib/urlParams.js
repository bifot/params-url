module.exports = getUrlParams = (url, object) => {
  if (!url) {
    throw new Error('URL is null')
  }

  if (!object || !Object.keys(object)) {
    throw new Error('Params is null')
  }

  let req = url[--url.length] === '/' ? url.substr(0, --url.length) : url

  Object.keys(object).forEach((key, i) => {
    const symbol = i === 0 ? '?' : '&'
    req += `${symbol}${key}=${encodeURIComponent(object[Object.keys(object)[i]])}`
  })

  return req
}
