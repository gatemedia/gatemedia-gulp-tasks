
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
  function ensureSetting (name, defaultValue) {
    if (settings[name] === undefined) {
      settings[name] = defaultValue;
    }
  }
  ensureSetting('port', util.env.p || 2000);
  ensureSetting('production', !!util.env.production);
  ensureSetting('watch', !!(util.env.w || util.env.watch));

  var runSequence = require('run-sequence').use(gulp);

  defineTasks(gulp, settings, requireDir('./tasks', { recurse: true }));

  gulp.task('code-assets', ['images', 'styles', 'js-core', 'js-addons']);
  gulp.task('unit-test-assets', ['test/unit/js', 'test/unit/assets']);

  gulp.task('default', function () {
    runSequence('clean', 'code-assets');
  });
  gulp.task('demo', function () {
    runSequence('clean',
      [ 'code-assets',
        'coding-style',
        'unit-test-assets',
        'demo/js', 'demo/styles', 'demo/assets', 'demo/index'
      ],
      ['serve', 'watch']);
  });

  gulp.task('test', function () {
    runSequence('clean',
      [ 'code-assets',
        'coding-style',
        'unit-test-assets',
        'test/unit/assets-cli'
      ],
      'test/unit/run');
  });

  if (settings.production) {
    util.log(chalk.bold.blue('=== PRODUCTION BUILD ==='));
  } else {
    util.log(chalk.bold.red('--- DEV BUILD ---'));
  }
};
