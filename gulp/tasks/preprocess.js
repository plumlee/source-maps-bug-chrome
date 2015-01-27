// Allows writing out files with environment-specific code
// depending on the target.
// Ex - when running preprocess-dev below, this chunk of HTML
//
// <!-- @ifdef DEV -->
// <link rel="stylesheet" href="css/all.css" media="screen" />
// <!-- @endif -->
// <!-- @ifdef PROD -->
// <link rel="stylesheet" href="css/all.min.css" />
// <!-- @endif -->
//
// would render as
// <link rel="stylesheet" href="css/all.css" media="screen" />


var config     = require('../config');
var gulp       = require('gulp');
var path       = require('path');
var preprocess = require('gulp-preprocess');

var context = {
    dev: {
        DEV: true
    },
    prod: {
        PROD: true
    }
};

var htmlFiles = [
    config.APP_SRC + '/*.html'
];

var task = function(target) {
    return gulp.src(htmlFiles)
               .pipe(preprocess({
                   context: context[target]
               }))
               .pipe(gulp.dest(config.APP_DIST));
};

// the actual tasks
gulp.task('preprocess-dev', function() {
    return task('dev');
});
