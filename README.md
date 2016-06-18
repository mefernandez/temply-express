# temply-express
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Travis Build][travis-image]][travis-url]

[Temply's](https://github.com/mefernandez/temply) HTML template engine for Express.js

## How to use it

Easy peasy.

Configure `temply-express` as a view engine in your [Express.js]() `app.js` file:

```js
var templyEngineFactory = require('temply-express');
var pluginsRepository = [path.join(__dirname, 'plugins/data'), path.join(__dirname, 'plugins/render')];

var templyEngine = templyEngineFactory(pluginsRepository);
app.engine('html', templyEngine);
```

Now use it in a `route`:



[npm-image]: https://img.shields.io/npm/v/temply-express.svg
[npm-url]: https://npmjs.org/package/temply-express
[travis-image]: https://img.shields.io/travis/mefernandez/temply-express/master.svg
[travis-url]: https://travis-ci.org/mefernandez/temply-express
[downloads-image]: https://img.shields.io/npm/dm/temply-express.svg
[downloads-url]: https://npmjs.org/package/temply-express
