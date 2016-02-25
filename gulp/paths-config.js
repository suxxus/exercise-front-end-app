var path = require('path'),
    root = path.resolve('./'),
    src = path.join(root, 'src'),
    dist = path.join(root, 'server/public'),
    build = path.join(root, 'build'),
    tests = path.join(root, 'tests/**/*.js'),
    scripts = path.join(src, 'scripts/**/*.js'),
    styles = path.join(src, 'styles/**/*.scss'),
    jadeTpls = path.join(src, 'layout/**/*.jade'),
    jadeIndex = path.join(src, 'index.jade');


module.exports = {

    dist: {
        dir: dist,
        scripts: path.join(dist, '/scripts'),
        styles: path.join(dist, '/styles'),
        server: path.join(dist, '/server')
    },

    build: {
        dir: build,
        scripts: path.join(build, '/scripts'),
        styles: path.join(build, '/styles'),
        compsFileName: 'components-bundle.js',
        appBundleFileName: 'app-bundle.js',
        tpls: build
    },

    scripts: scripts,
    styles: styles,
    index: path.join(src, '/index.html'),

    test: 'NODE_PATH=src babel-node tests/index.js | tap-colorize',

    babelify: {
        app: path.join(src, 'scripts/index.js'),
        components: path.join(src, 'scripts/containers/react-comps-catalog.js')
    },

    watch: {
        tests: tests,
        build: [scripts, styles, jadeTpls, jadeIndex]
    },

    browserSync: {
        baseDir: build
    }
};
