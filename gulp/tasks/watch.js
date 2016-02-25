'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence'),
    bs1 = require('browser-sync').create('bs1'),
    bs2 = require('browser-sync').create('bs2'),
    paths = require('../paths-config');

//Watch develop in node
gulp.task('watch:tests', function() {
    gulp.watch(paths.watch.tests, ['exec-tests']);
    gulp.watch(paths.watch.build, function() {
        runSequence(
            'lint',
            'exec-tests'
        )
    });
});

// Watch develop with browser-sync
gulp.task('watch', function() {

    var reload = function() {
        bs1.reload();
        bs2.reload();
    };


    gulp.watch(paths.watch.tests, ['exec-tests']);
    gulp.watch(paths.watch.build, function() {
        runSequence(
            'clean',
            'lint',
            'exec-tests', ['babelify:app'],
            'copy:index-html',
            reload
        )
    });
});

gulp.task('browser-sync', function() {

    var proxy = require('proxy-middleware'),
        url = require('url'),
        proxy_options = function(value) {
            var proxyOptions = url.parse(value);
            proxyOptions.route = '/api';
            return proxyOptions;
        };

    bs1.init({
        server: {
            name: 'dev',
            baseDir: paths.browserSync.baseDir,
            middleware: [proxy(proxy_options('http://localhost:4501/api'))]
        },
        browser: "google-chrome",
        port: 3000,
        ui: {
            port: 3011
        },
        reloadDelay: 1000
    });

    bs2.init({
        server: {
            name: 'express',
            baseDir: paths.browserSync.baseDir,
            middleware: [proxy(proxy_options('http://localhost:5000/api'))]
        },
        browser: "firefox",
        port: 4000,
        ui: {
            port: 3012
        },
        reloadDelay: 1000
    });
});
