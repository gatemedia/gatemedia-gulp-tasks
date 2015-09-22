
var utils = require('../utils');

module.exports = function (gulp, settings) {
  return utils.wizardify(gulp, settings, {
    label: 'Project JS',
    entries: [settings.project.coreEntry],
    namespace: settings.project.coreNamespace,
    output: {
      filename: settings.project.name + '-' + settings.project.version + '.js',
      directory: './dist'
    }
  });
};
