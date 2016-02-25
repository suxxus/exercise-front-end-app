'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    paths = require('../paths-config');


gulp.task('dev', function() {
    runSequence(
        'lint',
        'exec-tests',
        'watch:tests');
});
