
var _ = require('lodash');

module.exports = function (gulp, settings) {
  return function () {
    var dependencies = {
      'lib/styles/**/*': [
        'styles'
      ],
      'demo/styles/**/*': [
        'demo-styles'
      ],
      'lib/javascripts/{.,core}/*': [
        'js-core',
        'test/unit/js'
      ],
      'lib/javascripts/{.,addons}/*': [
        'js-addons',
        'test/unit/js'
      ],
      'lib/images/**/*': [
        'images'
      ],
      'demo/{fonts}/**/*': [
        'demo-assets'
      ],
      'demo/index.html': [
        'demo-index'
      ],
      'tests/unit/**/*': [
        'test/unit/js'
      ],
      'tests/runner/*': [
        'test/helpers'
      ],
      'tests/runner/unit/**/*': [
        'test/unit/assets'
      ],
      '{lib,tests,demo}/**/*': [
        'coding-style'
      ]
    };

    _.keys(dependencies).forEach(function (globExpr) {
      gulp.watch(globExpr, dependencies[globExpr]);
    });
  };
};
