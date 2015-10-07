
var chalk = require('chalk');
var shell = require('gulp-shell');
var util = require('gulp-util');

module.exports = function (gulp, settings) {
  return function () {
    if (!settings.watch) {
      util.log(chalk.yellow('Watch option (-w) not set: failing on coding style errors'));
    }

    return gulp.src('')
      .pipe(shell('semistandard --verbose | snazzy', {
        ignoreErrors: settings.watch
      }));
  };
};
