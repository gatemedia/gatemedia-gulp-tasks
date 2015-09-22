
var utils = require('../utils');

module.exports = function (gulp, settings) {
  return utils.wizardify(gulp, settings, {
    label: 'Project addons JS',
    entries: [settings.project.addonEntries],
    namespace: settings.project.addonsNamespace,
    output: {
      filename: settings.project.name + '-addons-' + settings.project.version + '.js',
      directory: './dist'
    }
  });
};
