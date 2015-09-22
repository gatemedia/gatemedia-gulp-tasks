
var glob = require('glob');
var utils = require('../../../utils');

module.exports = function (gulp, settings) {
  return utils.wizardify(gulp, settings, {
    label: 'Test JS',
    entries: glob.sync('./tests/unit/**/*.js'),
    namespace: 'GM.UnitTests',
    output: {
      filename: utils.getPackage().name + '-unit-tests-' + utils.getPackage().version + '.js',
      directory: './dist/tests'
    }
  });
};
