'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    rimraf = require('gulp-rimraf'),
    paths = require('../paths-config');

/*
|-------------------------------------------
| TASKS
|-------------------------------------------
*/
gulp.task('compress:scripts', function() {
    return gulp.src(paths.build.scripts + '/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.scripts));
});

gulp.task('copy:html', function() {
    return gulp.src(paths.index)
        .pipe(gulp.dest(paths.dist.dir));
});

gulp.task('dist', function() {
    runSequence(
        ['clean:dist', 'clean'],
        'lint', ['babelify:app'],
        'compress:scripts',
        'copy:html'

    );
});
