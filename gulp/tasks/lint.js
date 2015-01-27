/* jshint node: true */
var config = require('../config'),
    gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    map    = require('map-stream');

// https://github.com/spenceralger/gulp-jshint
var msg;

// https://github.com/spenceralger/gulp-jshint/issues/50
var customReporter = function(file, cb) {
    return map(function (file, cb) {
        if (!file.jshint.success) {
            file.jshint.results.forEach(function (err) {
                if (err) {
                    msg = [
                        'JSHINT fail: ',
                        file.path,
                        ', line ',
                        err.error.line,
                        ', col ',
                        err.error.character,
                        ', code ',
                        err.error.code,
                        ', ',
                        err.error.reason
                    ];
                    console.log(msg.join(''));
                }
            });
        }
        return cb(null, file);
    });
};

gulp.task('lint', function() {
    // do not pipe to a reporter here with a fail
    // because that breaks the running gulp watch task
    return gulp.src(config.APP_SRC + '/js/**/*.js')
        .pipe(jshint())
        .pipe(customReporter());
});
