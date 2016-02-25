
var gulp = require('gulp'),
    shell = require('gulp-shell'),
    paths = require('../paths-config');

gulp.task('exec-tests', shell.task([paths.test]));
