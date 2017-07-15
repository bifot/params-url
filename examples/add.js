const urlParams = require('../lib')

const url = urlParams.add('https://api.com?q=test', {
  act: 'create',
  v: 2
})

const url2 = urlParams.add('https://api.com/', {
  foo: 'bar'
})

console.log(url, url2)
// => https://api.com?q=test&act=create&v=2
// => https://api.com?foo=bar
