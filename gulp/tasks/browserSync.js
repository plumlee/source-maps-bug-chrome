// https://github.com/greypants/gulp-starter/

// Automatically keeps any browsers that are open to the
// local development environement in sync using socket.io.
// The task of `bs-reload` is triggered as needed in other
// tasks.

var browserSync = require('browser-sync');
var config      = require('../config');
var gulp        = require('gulp');

gulp.task('browserSync', function() {
    return browserSync({
        port: config.DEV_PORT_START,
        // the proxy handles the static files in the APP_DIST
        // directory - they are bundled by gulp
        // also handles proxying REST data against apiary.io
        // proxying into the various environments for real data
        // could also handle serving locally but this is not
        // set up yet
        proxy: config.DEV_HOST + ':' + config.EXPRESS_PORT
    });
});

// Reload all Browsers
gulp.task('bs-reload', function(){
    browserSync.reload();
});
