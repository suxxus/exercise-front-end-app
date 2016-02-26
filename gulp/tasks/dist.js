'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
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

gulp.task('copy:favicon', function() {
    return gulp.src(paths.favicon)
        .pipe(gulp.dest(paths.dist.dir));
});

gulp.task('minify:html', function() {
    return gulp.src(paths.index)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.dist.dir))
});

gulp.task('dist', function() {
    runSequence(
        ['clean:dist', 'clean'], ['lint', 'babelify:app'],
        'compress:scripts',
        'minify:html',
        'copy:favicon'
    );
});
