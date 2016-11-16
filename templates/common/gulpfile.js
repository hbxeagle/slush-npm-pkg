'use strict';

var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();

gulp.task('clean', require('del').bind(null, ['dist']));

/* es6 */
gulp.task('es6', function() {
  return gulp.src(['src/entry.js'])
    .pipe($.plumber())
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe($.rename('<%= name %>.js'))
    .pipe(gulp.dest('./dist'))
    .pipe($.rename('<%= name %>.min.js'))
    .pipe($.uglify())
    .on('error', $.util.log)
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['es6'], function() {
  gulp.watch(['src/**/*.*'], ['es6']);
});

gulp.task('build',['es6']);

gulp.task('default',['clean'], function() {
  gulp.start('watch');
});
