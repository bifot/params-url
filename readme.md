[![params-url](https://img.shields.io/npm/v/params-url.svg?style=flat-square)](https://www.npmjs.com/package/params-url/)
[![params-url](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

# Params Url

Serialize params from object to URL.

## Install

```sh
$ npm i params-url -S
```

or use CDN:

```sh
<script src="https://cdn.jsdelivr.net/npm/params-url@latest/build/urlparams.build.js"></script>
```

## Tests

```sh
$ npm test
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
const url = urlParams.add('https://api.com?q=dogs', {
  act: 'find',
  type: [ 'good', 'beautiful' ],
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
const url = urlParams.delete('https://api.com?q=dogs&act=find&type=good&type=beautiful', [
  'q',
  'type'
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
  q: 'dogs',
  act: 'find',
  type: [ 'good', 'beautiful', 'husky' ],
  v: 2
})

console.log(url)
// => https://api.com?foo=bar&q=example%20with%20spaces&arr=1&arr=2&arr=3&v=2
```

### .parse (url)

| Parameter  | Type      | Requried  |
| -----------|:---------:| ---------:|
| url        | string    | yes       |

Returns object of parameters.

```javascript
const url = urlParams.parse('https://api.com?q=dogs&act=find&type=good&type=beautiful&type=husky&v=2')

console.log(url)
// {
//   q: 'dogs',
//   act: 'find',
//   type: [ 'good', 'beautiful', 'husky' ],
//   v: '2'
// }
```

## License

MIT.
