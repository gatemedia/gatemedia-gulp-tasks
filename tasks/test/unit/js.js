
var glob = require('glob');
var utils = require('../../../utils');

module.exports = function (gulp, settings) {
  return utils.wizardify(gulp, settings, {
    label: 'Test JS',
    entries: glob.sync('./tests/unit/**/*.js'),
    namespace: 'GM.UnitTests',
    output: {
      filename: settings.project.name + '-unit-tests-' + settings.project.version + '.js',
      directory: './dist/tests'
    }
  });
};
