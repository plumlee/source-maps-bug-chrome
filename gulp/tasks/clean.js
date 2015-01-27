var config = require('../config');
var del    = require('del');
var gulp   = require('gulp');

var glob = '/**/*';
var keep = '!.gitkeep';

gulp.task('clean-dist', function () {
    return del([
        config.APP_DIST + glob,
        keep
    ]);
});
