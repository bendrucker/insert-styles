# insert-styles [![Build Status](https://travis-ci.org/bendrucker/insert-styles.svg?branch=master)](https://travis-ci.org/bendrucker/insert-styles)

> Insert CSS styles into an HTML document


## Install

```
$ npm install --save insert-styles
```


## Usage

```js
var insertStyles = require('insert-styles')

insertStyles('h1 { font-size: 14px }')
//=> <head><style> h1 { ... }</style></head>
```


## Related

* [insert-css](https://github.com/substack/insert-css)


## License

MIT © [Ben Drucker](http://bendrucker.me)
