/* global err */
var _            = require('underscore');
var browserify   = require('browserify');
var bundleLogger = require('../util/bundleLogger');
var config       = require('../config');
var foreach      = require('gulp-foreach');
var fs           = require('fs');
var gulp         = require('gulp');
var hbsfy        = require('hbsfy');
var istanbul     = require('browserify-istanbul');
var handleErrors = require('../util/handleErrors');
// needed for firefox
// https://github.com/substack/node-browserify/issues/681
var mold         = require('mold-source-map');
var path         = require('path');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');

var appConfigFile = config.JS_SETUP_FILE.split('.')[0];

var baseConfig = {
    input      : [ config.APP_START ],
    outputName : config.APP_START_FILENAME,
    sourcemaps : true
};

var moduleSuffixes = [
    './'
];

var modulePaths = (function() {
    return moduleSuffixes.map(function(suffix) {
        return path.join(config.APP_SRC_JS, suffix);
    });
})();

var baseTask = function(taskConfig) {

    var bundle;
    var bundler;
    var bundleMethod = global.isWatching ? watchify : browserify;

    bundler = bundleMethod({
        debug: taskConfig.sourcemaps,
        entries: taskConfig.input,
        extensions: ['.hbs'],
        paths: modulePaths
    });

    // bundle templates
    bundler.transform(hbsfy);

    bundle = function() {

        bundleLogger.start();

        return bundler.bundle()
                      .on('error', handleErrors)
                      .pipe(mold.transformSourcesRelativeTo(path.join(config.APP_SRC_JS)))
                      .pipe(source(taskConfig.outputName))
                      .pipe(gulp.dest(config.APP_DIST_JS))
                      .on('end', bundleLogger.end);

    };

    if (global.isWatching) {
        // Rebundle with watchify on changes.
        bundler.on('update', bundle);
    }

    return bundle();
};

gulp.task('browserify-dev', function() {
    return baseTask(baseConfig);
});
