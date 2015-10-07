
var _ = require('lodash');

module.exports = function (gulp, settings) {
  return function () {
    var dependencies = {
      '{lib,tests,demo}/**/*': [
        'coding-style'
      ],
      'lib/javascripts/{.,core}/*': [
        'js-core',
        'test/unit/js'
      ],
      'lib/javascripts/{.,addons}/*': [
        'js-addons',
        'test/unit/js'
      ],
      'lib/styles/**/*': [
        'css-core'
      ],
      'lib/images/**/*': [
        'images'
      ],
      'vendor/**/*.js': [
        'js-libs'
      ],
      'vendor/**/*.css': [
        'css-libs'
      ],
      'tests/runner/unit/**/*': [
        'test/unit/assets'
      ],
      'tests/{runner/helpers.js,unit/**/*}': [
        'test/unit/js'
      ],
      'demo/index.html': [
        'demo/index'
      ],
      'demo/javascripts/**/*': [
        'demo/js'
      ],
      'demo/styles/**/*': [
        'demo/css'
      ],
      'demo/{fonts}/**/*': [
        'demo/assets'
      ]
    };

    _.keys(dependencies).forEach(function (globExpr) {
      gulp.watch(globExpr, dependencies[globExpr]);
    });
  };
};
