module.exports = (url, params) => {
  if (!url || !params || !params.length || url.split('?').length < 2) {
    return undefined
  }

  const { parse, generate } = require('../index')
  const options = {}
  const link = url.split('?')[0]

  Object.entries(parse(url))
    .filter((item) => {
      return params.indexOf(item[0]) === -1
    })
    .forEach((item) => {
      options[item[0]] = item[1]
    })

  return generate(link, options)
}
