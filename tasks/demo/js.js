
var utils = require('../../utils');

module.exports = function (gulp, settings) {
  return utils.wizardify(gulp, settings, {
    label: 'Project demo JS',
    entries: settings.project.demoEntry,
    namespace: settings.project.demoNamespace,
    output: {
      filename: utils.getPackage().name + '-demo-' + utils.getPackage().version + '.js',
      directory: './dist'
    }
  });
};
