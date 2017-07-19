const urlParams = require('../lib')

const url = urlParams.delete('https://api.com?q=dogs&act=find&type=good&type=beautiful', [
  'q',
  'type'
])

console.log(url)
// => https://api.com?v=2
