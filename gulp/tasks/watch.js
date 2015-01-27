// Watches for file changes and triggers other gulp tasks
// as needed.

// https://github.com/greypants/gulp-starter/
var config = require('../config');
var gulp   = require('gulp');
var rs     = require('run-sequence');

// files we always watch
var commonWatch = [
     config.APP_SRC      + '/**/*.html',
     config.APP_SRC_IMG  + '/**/*',
     config.APP_SRC_JS   + '/**/*.js',
     config.APP_SRC_LESS + '/**/*.less'
];

// Normal development, look for files changes.
// Then places built files in the right places.
gulp.task('watch-dev', [
    'setWatch',
    'browserSync'
], function() {
    gulp.watch(commonWatch, [
        'lint',
        [ 'less', 'images', 'preprocess-dev' ],
        'browserify-dev',
        'bs-reload'
    ]);
});
