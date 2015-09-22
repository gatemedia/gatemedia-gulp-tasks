
var shell = require('gulp-shell');

module.exports = function (gulp, settings) {
  return function () {
    if (!settings.watch) {
      console.warn('Watch option (-w) not set: failing on coding style errors');
    }

    return gulp.src('')
      .pipe(shell('semistandard --verbose | snazzy', {
        ignoreErrors: settings.watch
      }));
  };
};
