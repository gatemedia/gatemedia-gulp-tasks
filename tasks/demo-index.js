
var swig = require('gulp-swig');
var connect = require('gulp-connect');
var utils = require('../utils');

module.exports = function (gulp) {
  return function () {
    return gulp.src('./demo/index.html')
      .pipe(swig({
        data: {
          projectVersion: utils.getPackage().version
        }
      }))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());
  };
};
