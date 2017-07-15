# Params Url

Serialize params from object to URL.

## Install

**npm:**

```sh
$ npm i params-url && npm test
```

## Usage

```javascript
const urlParams = require('params-url')
```

## Methods

* [.add (url, params)](#add-url-params)
* [.delete (url, params)](#delete-url-params)
* [.generate (url, params)](#generate-url-params)
* [.parse (url)](#parse-url)

### .add (url, params)

| Parameter  | Type      | Requried  |
| -----------|:---------:| ---------:|
| url        | string    | yes       |
| params     | object    | yes       |

Returns a new url with new parameters.

```javascript
const url = urlParams.add('https://api.com?q=test', {
  act: 'create',
  v: 2
})

console.log(url)
// => https://api.com?q=test&act=create&v=2
```

### .delete (url, params)

Returns a new url without the specified parameters.

| Parameter  | Type      | Requried  |
| -----------|:---------:| ---------:|
| url        | string    | yes       |
| params     | array     | yes       |

```javascript
const url = urlParams.delete('https://api.com?foo=bar&q=example&v=2', [
  'foo',
  'example'
])

console.log(url)
// => https://api.com?v=2
```

### .generate (url, params)

| Parameter  | Type      | Requried  |
| -----------|:---------:| ---------:|
| url        | string    | yes       |
| params     | object    | yes       |

Returns a url with parameters.

```javascript
const url = urlParams.generate('https://api.com/', {
  foo: 'bar',
  q: 'example with spaces',
  v: 2
})

console.log(url)
// => https://api.com?foo=bar&q=example%20with%20spaces&v=2
```

### .parse (url)

| Parameter  | Type      | Requried  |
| -----------|:---------:| ---------:|
| url        | string    | yes       |

Returns object of parameters.

```javascript
const url = urlParams.parse('https://api.com?foo=bar&q=example%20with%20spaces&v=2')

console.log(url)
// {
//   foo: 'bar',
//   q: 'example with spaces',
//   v: '2'
// }
```

## License

MIT.
