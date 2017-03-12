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

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'html');

```

Now use it in a `route`:

```js
router.get('/', function(req, res, next) {
  res.render('index.html');
});
```

That will look up `templates/index.html` and call all plugins referenced in it.
In this example, plugins will be loaded from `plugins/data` and `plugins/render`.
The resulting HTML will be written to the HTTP response.

[npm-image]: https://img.shields.io/npm/v/temply-express.svg
[npm-url]: https://npmjs.org/package/temply-express
[travis-image]: https://img.shields.io/travis/mefernandez/temply-express/master.svg
[travis-url]: https://travis-ci.org/mefernandez/temply-express
[downloads-image]: https://img.shields.io/npm/dm/temply-express.svg
[downloads-url]: https://npmjs.org/package/temply-express
