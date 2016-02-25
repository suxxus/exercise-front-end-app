var gulp = require('gulp'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    paths = require('../paths-config');

// gnerate bundle file for application platform-ui
gulp.task('babelify:app', function() {
    return browserify({
            entries: paths.babelify.app,
            debug: true
        })
        .transform(babelify, {
            presets: ['es2015']
        })
        .bundle()
        .pipe(source(paths.build.appBundleFileName))
        .pipe(gulp.dest(paths.build.scripts));
});
