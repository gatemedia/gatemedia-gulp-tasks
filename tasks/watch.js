
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
        'styles'
      ],
      'lib/images/**/*': [
        'images'
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
      'demo/{fonts}/**/*': [
        'demo/assets'
      ],
      'demo/styles/**/*': [
        'demo/styles'
      ]
    };

    _.keys(dependencies).forEach(function (globExpr) {
      gulp.watch(globExpr, dependencies[globExpr]);
    });
  };
};
