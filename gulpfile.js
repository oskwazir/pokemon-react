var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plugins = require('gulp-load-plugins')();
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*'],
  rename: {'gulp-6to5':'sixTofive'}
});

gulp.task('browser-sync',  ['build'],  function() {
  browserSync({
    server: {
      baseDir: './',
      directory: false,
    },
    open: false
  });
});

gulp.task('clean', function(cb) {
  del(['css','scripts'], cb);
});
 
gulp.task('styles', function () {
    return gulp.src('src/css/*.css')
        .pipe($.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe($.csso())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}))
        .pipe($.size());
});

gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe($.react())
        .pipe($.sixTofive())
        .pipe($.concat('app.js'))
        // .pipe($.uglify())
        .pipe(gulp.dest('scripts'))
        .pipe($.size());;
});

gulp.task('serve', ['build', 'browser-sync'],  function() {
});

gulp.task('build', ['styles','scripts']);

gulp.task('default', ['clean'], function () {
    gulp.start(['build', 'browser-sync']);
    gulp.watch('src/**/*.js', ['scripts', reload]);
    gulp.watch('src/**/*.css', ['styles']);
});