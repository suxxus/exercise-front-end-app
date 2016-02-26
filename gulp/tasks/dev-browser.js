'use strict';
var paths = require('../paths-config');

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('copy:index-html', function() {
    return gulp.src(paths.index)
        .pipe(gulp.dest(paths.build.dir));
})

gulp.task('dev-browser', function() {
    runSequence(['clean', 'clean:dist'],
        'lint',
        'exec-tests', ['babelify:app'],
        'copy:index-html',
        'browser-sync',
        'watch');
});
