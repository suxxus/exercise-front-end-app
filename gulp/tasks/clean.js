'use strict';

var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    paths = require('../paths-config');

// Clean
gulp.task('clean', function() {
    return gulp.src(paths.build.dir, {
        read: false
    }).pipe(rimraf());
});

gulp.task('clean:dist', function() {
    return gulp.src(paths.dist.dir, {
        read: false
    }).pipe(rimraf());
});
