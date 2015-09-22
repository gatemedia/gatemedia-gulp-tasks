
var fs = require('fs');
var assign = require('lodash.assign');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var connect = require('gulp-connect');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var watchify = require('watchify');

module.exports = {

  getPackage: function () {
    return JSON.parse(fs.readFileSync('./package.json'));
  },

  wizardify: function (gulp, settings, options) {
    var customOpts = {
      entries: options.entries,
      extensions: ['.js', '.jsx'],
      standalone: options.namespace,
      debug: !settings.production,
      cache: {}, // required for watchify
      packageCache: {}, // required for watchify
      fullPaths: !settings.production // required to be true only for watchify
    };
    var opts = assign({}, watchify.args, customOpts);
    var bundler = browserify(opts);
    if (settings.watch) {
      bundler = watchify(bundler);
    }
    bundler.transform(babelify);

    function rebundle () {
      var stream = bundler
        .external(settings.project.libs)
        .bundle()
        .on('error', notify.onError({
          title: settings.project.name,
          message: 'Assets: ' + options.label + ' compilation failed. <%= error.message %>'
        }))
        .pipe(source(options.output.filename))
        .pipe(buffer())
        .pipe(gulp.dest(options.output.directory))
        .pipe(connect.reload());

      if (settings.production) {
        stream
          .pipe(rename({ suffix: '.min' }))
          .pipe(sourcemaps.init({loadMaps: true}))
          .pipe(uglify())
          .pipe(sourcemaps.write('./dist'))
          .pipe(gulp.dest('./dist'));
      }
      return stream;
    }

    bundler.on('update', rebundle);
    bundler.on('log', util.log);

    return rebundle;
  }
};
