
var connect = require('gulp-connect');

module.exports = function (gulp, settings) {
  return function () {
    return connect.server({
      root: ['./dist'],
      port: settings.port,
      livereload: true
    });
  };
};
