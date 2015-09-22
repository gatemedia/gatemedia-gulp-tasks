
var swig = require('gulp-swig');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var utils = require('../../../utils');

module.exports = function (gulp) {
  return function () {
    return gulp.src([
      './tests/runner/unit/unit.html'
    ])
      .pipe(rename({ suffix: '-cli' }))
      .pipe(swig({
        data: {
          projectVersion: utils.getPackage().version,
          inBrowser: false
        }
      }))
      .pipe(gulp.dest('./dist/tests/'))
      .pipe(connect.reload());
  };
};
