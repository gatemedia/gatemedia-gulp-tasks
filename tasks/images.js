
var connect = require('gulp-connect');

module.exports = function (gulp) {
  return function () {
    return gulp.src('./lib/images/**/*')
      .pipe(gulp.dest('./dist/assets/images'))
      .pipe(connect.reload());
  };
};
