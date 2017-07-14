const urlParams = require('./index')

const url = urlParams('https://api.com/', {
  foo: 'bar',
  q: 'example with spaces',
  v: 2
})

console.log(url) // https://api.com?foo=bar&q=example%20with%20spaces&v=2
