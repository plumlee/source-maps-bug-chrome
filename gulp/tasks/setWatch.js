// Flag used in the browserify/browserSync tasks to know
// if a full build is needed, or just a refresh of a
// single file.

// https://github.com/greypants/gulp-starter/
var gulp = require('gulp');

gulp.task('setWatch', function() {
    global.isWatching = true;
});
