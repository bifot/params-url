module.exports = (url, params) => {
  if (!url || !params || !Object.keys(params)) {
    return undefined
  }

  const { parse, generate } = require('../index')

  const link = url[--url.length] === '/' ? url.substr(0, --url.length) : url
  const domain = link.split('?')[0]
  const settings = Object.assign({}, parse(link), params)

  return generate(domain, settings)
}
