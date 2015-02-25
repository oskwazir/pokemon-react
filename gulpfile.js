'use strict';

var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plugins = require('gulp-load-plugins')();
var $ = require('gulp-load-plugins')({ pattern: ['gulp-*'] });
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var getBundleName = function () {
  var version = require('./package.json').version;
  var name = require('./package.json').name;
  return version + '.' + name + '.' + 'min';
};

gulp.task('browser-sync',  ['build'],  function() {
  browserSync({
    server: {
      baseDir: './',
      directory: false
    },
    open: false
  });
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('browserify',  ['transpile'], function() {

  var bundler = watchify(browserify({
    entries: ['./build/js/app.react.js'],
    debug: true
  }));

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source(getBundleName() + '.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
      .pipe($.uglify())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest('./js/'));
  };

  return bundle();
});

gulp.task('clean', function(cb) {
  del(['css','scripts','build'], cb);
});
 
gulp.task('styles', function () {
    return gulp.src('src/styles/*.less')
        .pipe($.less())
        .on('error', handleError)
        .pipe($.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe($.csso())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}))
        .pipe($.size());
});

gulp.task('transpile', function () {
    return gulp.src('src/js/*.react.js')
        .pipe($.babel())
        .pipe(gulp.dest('build/js'));
});

gulp.task('serve', ['build', 'browser-sync'],  function() {
});

gulp.task('build', ['styles','browserify']);

gulp.task('default', ['clean'], function () {
    gulp.start(['build', 'browser-sync']);
    gulp.watch('src/**/*.js', ['browserify', reload]);
    gulp.watch('src/**/*.less', ['styles']);
});