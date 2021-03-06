
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var utils = require('../utils');

module.exports = function (gulp, settings) {
  return function () {
    return gulp.src(settings.project.libsStyles || [])
      .pipe(concat(utils.getPackage().name + '-libs-' + utils.getPackage().version + '.css'))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());
  };
};
