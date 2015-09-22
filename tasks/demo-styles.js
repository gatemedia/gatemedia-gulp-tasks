
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

module.exports = function (gulp, settings) {
  return function () {
    return gulp.src('./demo/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename(settings.project.name + '-demo.css'))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());
  };
};
