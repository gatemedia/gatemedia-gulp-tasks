
var rm = require('gulp-rm');

module.exports = function (gulp) {
  return function () {
    return gulp.src('dist/**/*').pipe(rm());
  };
};
