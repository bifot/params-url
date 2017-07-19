module.exports = (url) => {
  if (!url || url.split('?').length < 2 || !url.split('&').length) {
    return undefined
  }

  const parameters = url.split('?')[1].split('&')
  const query = {}

  parameters.forEach((item) => {
    const key = item.split('=')[0]
    const param = decodeURI(item.split('=')[1])

    if (Object.keys(query).indexOf(key) > -1 && typeof query[key] === 'string') {
      const arr = [ query[key], param ]
      query[key] = arr
    } else if (typeof query[key] === 'object') {
      query[key].push(param)
    } else {
      query[key] = param
    }
  })

  return query
}
