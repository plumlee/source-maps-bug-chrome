var gulp = require('gulp');
var rs   = require('run-sequence');

gulp.task('default', function() {
    rs(
        'clean-dist',
        'lint',
        'preprocess-dev',
        'browserify-dev',
        'devserver',
        'watch-dev'
    );
});
