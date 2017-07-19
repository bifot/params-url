const urlParams = require('../lib')

const url = urlParams.add('https://api.com?q=dogs', {
  act: 'find',
  type: [ 'good', 'beautiful' ],
  v: 2
})

console.log(url)
// => https://api.com?q=test&act=create&v=2
