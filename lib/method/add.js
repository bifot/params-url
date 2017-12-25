const parse = require('./parse')
const generate = require('./generate')

module.exports = (url, params) => {
  if (!url || !params || !Object.keys(params)) {
    return undefined
  }

  const link = url[--url.length] === '/' ? url.substr(0, --url.length) : url
  const [ domain ] = link.split('?')
  const settings = {
    ...parse(link),
    ...params
  }

  return generate(domain, settings)
}
