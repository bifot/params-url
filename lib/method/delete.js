const parse = require('./parse')
const generate = require('./generate')

module.exports = (url, params) => {
  if (!url || !params || !params.length || url.split('?').length < 2) {
    return undefined
  }

  const options = {}
  const [ link ] = url.split('?')

  Object.entries(parse(url))
    .filter(([ item ]) => {
      return params.indexOf(item) === -1
    })
    .forEach(([ key, value ]) => {
      options[key] = value
    })

  return generate(link, options)
}
