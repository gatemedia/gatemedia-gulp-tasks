# gatemedia-gulp-tasks

Set of generic gulp tasks used in GateMedia projects.


# Usage

Project's sample `gulpfile.js`:

```js
'use strict';

var packageInfo = require('./package.json');

var gulp = require('gulp');
var util = require('gulp-util');

require('gatemedia-gulp-tasks')(gulp, {
  project: {
    coreNamespace: 'GM.MyProject',
    coreEntry: './lib/javascripts/core/component.jsx',

    addonsNamespace: 'GM.MyProjectAddons',
    addonEntries: [
      './lib/javascripts/addons/addon1.jsx'
    ],

    libs: [ // not packaged
      'react',
      'reflux',
      'sinon-es6'
    ]
  }
});
````
