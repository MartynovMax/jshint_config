var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var watch   = require('gulp-watch');
var cache   = require('gulp-cached');
var csslint = require('gulp-csslint');
var gutil   = require('gulp-util');


var PATHS = {
  javascript: [
    './*.js',
    './*/*.js',
    './*/*/*.js',
    '!./node_modules/*/*.js',
    '!./public/vendor/*/*.js',
  ],
  css: [
    './public/stylesheets/*.css'
    '!./public/vendor/*/*.css'
  ]
};


gulp.task('watch', ['watch-js', 'watch-css']);



/*
* JS tasks
*/
gulp.task('watch-js', ['lint-js'], function () {
  return watch(PATHS.javascript, function () {
    return gulp.start('lint-js');
  });
});


gulp.task('lint-js', function(){
  return gulp.src(PATHS.javascript)
    .pipe(cache('linting'))
    .pipe(jshint())
    .on('error', handleError)
    .pipe(jshint.reporter('jshint-stylish'));

  function handleError(err){
    'use strict';
    console.log(err.toString());
  }
});
/*
* End JS tasks
*/





/*
* CSS tasks
*/
gulp.task('watch-css', ['lint-css'], function () {
  return watch(PATHS.css, function () {
    return gulp.start('lint-css');
  });
});


gulp.task('lint-css', function(){
  return gulp.src(PATHS.css)
    .pipe(cache('linting'))
    .pipe(csslint())
    .on('error', handleError)
    .pipe(csslint.reporter(customCSSReporter));

  function handleError(err){
    'use strict';
    console.log(err.toString());
  }

  function customCSSReporter(file) {
    var filePath = file.path.replace(file.cwd + '/', '');
    
    console.log(gutil.colors.underline(filePath));

    file.csslint.results.forEach(function(result) {
      console.log(
        gutil.colors.gray('  line ' + result.error.line + '  col ' + result.error.col) + 
        gutil.colors.blue('  ' + result.error.message)
      );
    });

    console.log('');
    console.log('  ' + gutil.colors.yellow('! ') + file.csslint.errorCount + ' warnings');
    console.log('');
  };
});
/*
* End CSS tasks
*/
