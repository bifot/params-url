# Params Url

Serialize params from object to URL.

## Install

**npm:**

```sh
$ npm i params-url
```

**web:**

Minified and polyfied script in the `lib` folder.

```sh
<script src="/path/to/urlParams.build.min.js"></script>
```

Also you can add the latest version of script by CDN:

```sh
<script src="https://cdn.jsdelivr.net/npm/params-url@latest/lib/urlParams.build.min.js"></script>
```

## Usage

| Parameter  | Type      | Requried  |
| -----------|:---------:| ---------:|
| url        | string    | yes       |
| params     | object    | yes       |

```javascript
const urlParams = require('params-url')

const url = urlParams('https://api.com/', {
  foo: 'bar',
  q: 'example with spaces',
  v: 2
})

console.log(url) // https://api.com?foo=bar&q=example%20with%20spaces&v=2
```

## License

MIT.
