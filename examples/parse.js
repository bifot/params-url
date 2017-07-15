const urlParams = require('../lib')

const url = urlParams.parse('https://api.com?foo=bar&q=example%20with%20spaces&v=2')

console.log(url)
// {
//   foo: 'bar',
//   q: 'example with spaces',
//   v: '2'
// }
