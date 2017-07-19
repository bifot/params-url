const urlParams = require('../lib')

const url = urlParams.generate('https://api.com/', {
  q: 'dogs',
  act: 'find',
  type: [ 'good', 'beautiful', 'husky' ],
  v: 2
})

console.log(url)
// => https://api.com?foo=bar&q=example%20with%20spaces&arr=1&arr=2&arr=3&v=2
