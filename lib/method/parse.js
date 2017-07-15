module.exports = (url) => {
  if (!url || url.split('?').length < 2 || !url.split('&').length) {
    return undefined
  }

  const req = url.split('?')[1].split('&')
  const params = {}

  req.forEach((item) => {
    params[item.split('=')[0]] = decodeURIComponent(item.split('=')[1])
  })

  return params
}
