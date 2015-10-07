# gatemedia-gulp-tasks

Set of generic gulp tasks used in GateMedia projects.


# Usage

Project's sample `gulpfile.js`:

```js

var gulp = require('gulp');

require('gatemedia-gulp-tasks')(gulp, {
  project: {
    coreNamespace: 'GM.MyProject',
    coreEntry: './lib/javascripts/core/component.jsx',

    addonsNamespace: 'GM.MyProjectAddons',
    addonEntries: [
      './lib/javascripts/addons/addon1.jsx'
    ],

    libs: [
      './vendor/some-lib.js'
    ],
    externalLibs: [ // not packaged
      'react',
      'reflux',
      'sinon-es6'
    ]
  }
});
````


# Available tasks

  * `coding-style`: check code against coding style rules. See [semistandard](https://github.com/Flet/semistandard)
  * `js-core`: package core project sources in `./dist/<PACKAGE.NAME>-<PACKAGE.VERSION>.js`
  * `js-libs`: package project libraries sources in `./dist/<PACKAGE.NAME>-libs-<PACKAGE.VERSION>.js`
  * `js-addons`: package project addons sources in `./dist/<PACKAGE.NAME>-addons-<PACKAGE.VERSION>.js`
  * `styles`: package project stylesheet in `./dist/<PACKAGE.NAME>-<PACKAGE.VERSION>.css`
  * `images`: copy project images from `lib/images/**/*` to `./dist/assets/images`
  * `clean`: delete `./dist` folder
  * `code-assets`: depends on `images` / `styles` / `js-core` / `js-addons`

  * `default`: runs sequence:
    * `clean`
    * `code-assets`

  * `demo-assets`: 
  * `demo-index`: 
  * `demo-styles`: 
  * `serve`: 
  * `watch`: 
  * `demo`: runs sequence:
    * `clean`
    * `code-assets` / `coding-style` / `unit-test-assets` / `demo-styles` / `demo-assets` / `demo-index`
    * `serve` / `watch`

  * `test/unit/js`: package unit tests sources in `./dist/tests/<PACKAGE.NAME>-unit-tests-<PACKAGE.VERSION>.js`
  * `test/unit/assets`: generate browser unit tests runner in `./dist/tests/unit.html`
  * `test/unit/assets-cli`: generate CLI unit tests runner in `./dist/tests/unit-cli.html`
  * `unit-test-assets`: depends on `test/unit/js` / `test/unit/assets`
  * `test/unit/run`: run CLI unit tests runner in `phantomjs`
  * `test`: runs sequence:
    * `clean`
    * `code-assets` / `coding-style` / `unit-test-assets` / `test/unit/assets-cli`
    * `test/unit/run`
