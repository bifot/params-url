const urlParams = require('../lib')

const url = urlParams.parse('https://api.com?q=dogs&act=find&type=good&type=beautiful&type=husky&v=2')

console.log(url)
// {
//   q: 'dogs',
//   act: 'find',
//   type: [ 'good', 'beautiful', 'husky' ],
//   v: '2'
// }
