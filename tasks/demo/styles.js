
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var utils = require('../../utils');

module.exports = function (gulp, settings) {
  return function () {
    return gulp.src('./demo/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename(utils.getPackage().name + '-demo-' + utils.getPackage().version + '.css'))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());
  };
};
