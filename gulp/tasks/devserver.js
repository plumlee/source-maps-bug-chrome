var config  = require('../config');
var express = require('express');
var gulp    = require('gulp');

gulp.task('devserver', function() {
    var app	= module.exports = express();
    app.use(express.static(config.APP_DIST));
    app.listen(config.EXPRESS_PORT);
});
