const urlParams = require('../lib')

const url = urlParams.delete('https://api.com?foo=bar&q=example&v=2', [
  'foo',
  'example'
])

console.log(url)
// => https://api.com?v=2
