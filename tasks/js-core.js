
var utils = require('../utils');

module.exports = function (gulp, settings) {
  return utils.wizardify(gulp, settings, {
    label: 'Project JS',
    entries: [settings.project.coreEntry],
    makePublicAs: utils.buildNamespace(settings.project.coreNamespace, settings.project.coreEntry),
    output: {
      filename: utils.getPackage().name + '-' + utils.getPackage().version + '.js',
      directory: './dist'
    }
  });
};
