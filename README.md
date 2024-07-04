#### Node Version

`Please to use node version >=20.12.2`

#### NPM Version

`Please to use npm version >=10.5.0`

#### Getting started

Packages initialization `npm i or npm install`

#### Husky

After package initialization,
an automatic `.husky` folder is created which is not
will allow commit if there are linter errors

#### Development server

Run `npm run start` for a dev server.\
Navigate to `http://localhost:3000/` .\
The app will automatically reload if you change
any of the source files.

#### Build

Run `npm run build:dev` to build the project.\
The build artifacts will be stored in the `dist/` directory.

* Use the `npm run build:prod` command for a production build.

#### Watch

Watch is running a `development` version.
If you need a `production`, change a path in package scripts

For example

`"watch": "webpack --watch -c config/prod.js",`

Run `npm run watch` to watch the project.\
The build artifacts will be stored in the `dist/` directory.

#### Sourcemap in the build/prod or watch

Add the flag `-d source-map`

For example

`"build": "webpack -c config/build.js -d source-map"`

`"watch": "webpack --watch -c config/prod.js -d source-map"`

#### Hash for files `css/js`

Add the scripts in package  `--node-env hash`

For Example

` "prod": "webpack --node-env hash -c config/prod.js",`

#### Linters

Run `npm run lint:ts` to find problematic patterns or code\
that doesn't adhere to certain style guidelines in the\
project. You can also use `npm run lint:ts:fix` to fix them.

Run `npm run lint:scss` to find problematic styles\
that doesn't adhere to certain style guidelines in the\
project. You can also use `npm run lint:scss:fix` to fix them.

#### Jest

Run `npm run test:unit` to run jest.\

#### Storybook

Run `npm run storybook` to run storybook.\
You can also use `npm run storybook:build` to run storybook build.

#### Loki

Run `npm run test:ui` to run loki.\
You can also use `npm run test:ui:ok` to approve changes.

##### How to compress images

**Download this plugin in Webstorm IDE and registered**

```
TinyPNG Image Optimizer
```

##### How to optimize js/css on the website

https://webpack.js.org/plugins/split-chunks-plugin/


##### Metatags description and keywords are in index.html

```html

<meta name="description" content="description">
<meta name="keywords" content="keywords">
```

##### How to use some library

Use commonJs or ES module

* CommonJs
  https://requirejs.org/docs/commonjs.html
* ES module
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

For example, download *Swiper* `npm i swiper` and use them in js file.

```javascript
import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', { /* ... */});
```