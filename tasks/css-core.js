
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var utils = require('../utils');

module.exports = function (gulp, settings) {
  return function () {
    var stream = gulp.src('./lib/styles/**/*.scss')
      .pipe(sass({
        outputStyle: settings.production ? 'compressed' : null
      }).on('error', sass.logError))
      .pipe(rename(utils.getPackage().name + '-' + utils.getPackage().version + '.css'))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());

    if (settings.production) {
      stream = stream
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist'));
    }

    return stream;
  };
};
