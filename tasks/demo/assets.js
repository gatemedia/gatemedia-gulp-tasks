
var connect = require('gulp-connect');

module.exports = function (gulp) {
  return function () {
    return gulp.src([
      './demo/fonts/**/*'
    ])
      .pipe(gulp.dest('./dist/assets/fonts'))
      .pipe(connect.reload());
  };
};
