var path = require('path'),
    root = path.resolve('./'),
    src = path.join(root, 'src'),
    dist = path.join(root, 'server/public'),
    build = path.join(root, 'build'),
    tests = path.join(root, 'tests/**/*.js'),
    scripts = path.join(src, 'scripts/**/*.js');


module.exports = {

    dist: {
        dir: dist,
        scripts: path.join(dist, 'scripts'),
        styles: path.join(dist, 'styles'),
        server: path.join(dist, 'server')
    },

    build: {
        dir: build,
        scripts: path.join(build, 'scripts'),
        appBundleFileName: 'app-bundle.js',
        tpls: build
    },

    scripts: scripts,
    index: path.join(src, 'index.html'),
    favicon: path.join(src, 'favicon.ico'),

    test: 'NODE_PATH=src babel-node tests/index.js | tap-colorize',

    babelify: {
        app: path.join(src, 'scripts/index.js')
    },

    watch: {
        tests: tests,
        build: scripts
    },

    browserSync: {
        baseDir: build
    }
};
