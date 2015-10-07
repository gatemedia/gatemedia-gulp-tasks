
var qunit = require('node-qunit-phantomjs');

module.exports = function (gulp) {
  return function (callback) {
    return qunit('./dist/tests/unit-cli.html', {
      'phantomjs-options': ['--ssl-protocol=any'],
      'timeout': 5,
      'verbose': true
    }, callback);
  };
};
