
var swig = require('gulp-swig');
var connect = require('gulp-connect');
var utils = require('../../../utils');

module.exports = function (gulp) {
  return function () {
    return gulp.src([
      './tests/runner/unit/unit.html'
    ])
      .pipe(swig({
        data: {
          projectVersion: utils.getPackage().version,
          inBrowser: true
        },
        defaults: {
          cache: false
        }
      }))
      .pipe(gulp.dest('./dist/tests/'))
      .pipe(connect.reload());
  };
};
