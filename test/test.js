const { expect } = require('chai')
const urlParams = require('../')

it('add', () => {
  expect(urlParams.add('https://google.com?age=10', {
    foo: 'bar',
    bar: 'foo'
  })).eq('https://google.com?age=10&foo=bar&bar=foo')
})

it('delete', () => {
  expect(urlParams.delete('https://google.com?foo=bar&bar=foo', [ 'foo' ])).eq('https://google.com?bar=foo')
})

it('generate', () => {
  expect(urlParams.generate('https://google.com', {
    age: 10,
    fields: 'photo'
  })).eq('https://google.com?age=10&fields=photo')
})

it('parse', () => {
  expect(urlParams.parse('https://google.com?array=0&array=1&age=20')).to.deep.equal({
    array: [ '0', '1' ],
    age: '20'
  })
})
