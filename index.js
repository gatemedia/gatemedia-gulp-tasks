
var _ = require('lodash');
var util = require('gulp-util');
var requireDir = require('require-dir');
var chalk = require('chalk');

function defineTasks (gulp, settings, obj, prefix) {
  _.keys(obj).forEach(function (key) {
    var name = prefix ? [prefix, key].join('/') : key;
    var task = obj[key];
    if (typeof task === 'object') {
      defineTasks(gulp, settings, task, name);
    } else {
      gulp.task(name, task(gulp, settings));
      util.log(chalk.gray('Loaded task:', name));
    }
  });
}

module.exports = function (gulp, settings) {
  var runSequence = require('run-sequence').use(gulp);

  defineTasks(gulp, settings, requireDir('./tasks', { recurse: true }));

  gulp.task('code-assets', ['images', 'styles', 'js-core', 'js-addons']);
  gulp.task('unit-test-assets', ['test/unit/js', 'test/unit/assets']);

  gulp.task('default', function () {
    runSequence('clean', 'code-assets');
  });
  gulp.task('demo', function () {
    runSequence('clean',
      ['code-assets',
        'unit-test-assets',
        'demo-styles', 'demo-assets', 'demo-index',
        'coding-style'
      ],
      ['serve', 'watch']);
  });

  gulp.task('unit-test', function () {
    runSequence('clean',
      ['images', 'styles', 'js-core', 'js-addons',
        'unit-test-assets', 'test/unit/assets-cli',
        'coding-style'
      ],
      'test/unit/run');
  });
  gulp.task('test', ['unit-test']);

  if (settings.production) {
    util.log(chalk.bold.blue('=== PRODUCTION BUILD ==='));
  } else {
    util.log(chalk.bold.red('--- DEV BUILD ---'));
  }
};
