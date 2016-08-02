'use strict';

var gulp   = require('gulp');

var jshint = require('gulp-jshint');
var watch  = require('gulp-watch');


var PATHS = {
  javascript: [
    './*.js',
    './*/*/*.js',
    '!./node_modules/*/*.js',
    '!./public/vendor/*.js',
  ]
};


gulp.task('watch', ['lint'], function () {
  return watch(PATHS.javascript, function () {
    return gulp.start('lint');
  });
});


gulp.task('lint', function () {
  return gulp.src(PATHS.javascript)
    .pipe(jshint())
    .on('error', handleError)
    .pipe(jshint.reporter('jshint-stylish'));

  function handleError(err){
    'use strict';
    console.log(err.toString());
  }

});
