
var eventStream = require('event-stream');
var utils = require('../utils');
var path = require('path');

module.exports = function (gulp, settings) {
  return function () {
    if (settings.project.addonEntries.length === 0) {
      return null;
    }
    var tasks = settings.project.addonEntries.map(function (entry) {
      var addon = path.basename(entry, path.extname(entry));
      return utils.wizardify(gulp, settings, {
        label: 'Project addons JS',
        entries: [entry],
        makePublicAs: utils.buildNamespace(settings.project.addonsNamespace, addon),
        output: {
          filename: utils.getPackage().name + '-addon-' + addon + '-' + utils.getPackage().version + '.js',
          directory: './dist'
        }
      })();
    });
    return eventStream.merge(tasks);
  };
};
