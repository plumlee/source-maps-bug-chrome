// https://github.com/greypants/gulp-starter/
// This file exports an global CONFIG object.
// Any properties added below dealing with
// paths are relative to THIS file location.
// ALL configuration for gulp tasks should live
// in this file.
var path = require('path');

var _CONFIG    = 'config';
var _CSS       = 'css';
var _DIST      = 'dist';
var _IMG       = 'images';
var _JS        = 'js';
var _LESS      = 'less';
var _REPORT    = 'html-report';
var _TEMPLATES = 'templates';
var _TEST      = 'test';

var JS_SETUP_FILE = 'setup.js';
var JS_CONFIG_FILE = 'config.js';

// these get reused in the export
var APP_ROOT                = path.join(__dirname, '../../');

var APP_GULP                = path.join(APP_ROOT, 'gulp');
var APP_SRC                 = path.join(APP_ROOT, 'src');
var APP_DIST                = path.join(APP_ROOT, _DIST);
var APP_RELEASE             = path.join(APP_ROOT, 'release');

var APP_SRC_CSS             = path.join(APP_SRC,  _CSS);
var APP_SRC_IMG             = path.join(APP_SRC,  _IMG);
var APP_SRC_JS              = path.join(APP_SRC,  _JS);
var APP_SRC_JS_TEMPLATES    = path.join(APP_SRC_JS,  _TEMPLATES);
var APP_SRC_LESS            = path.join(APP_SRC_CSS, _LESS);
var APP_SRC_CONFIG          = path.join(APP_SRC_JS, _CONFIG);
var APP_SRC_CONFIG_FILE     = path.join(APP_SRC_CONFIG, JS_CONFIG_FILE);
var APP_SRC_SETUP_FILE      = path.join(APP_SRC_JS, JS_SETUP_FILE);

var APP_DIST_CSS            = path.join(APP_DIST, _CSS);
var APP_DIST_IMG            = path.join(APP_DIST, _IMG);
var APP_DIST_JS             = path.join(APP_DIST, _JS);
var APP_DIST_LESS           = path.join(APP_DIST_CSS, _LESS);
var APP_DIST_CONFIG         = path.join(APP_DIST_JS, _CONFIG);
var APP_DIST_CONFIG_FILE    = path.join(APP_DIST_CONFIG, JS_CONFIG_FILE);

var APP_RELEASE_CSS         = path.join(APP_RELEASE, _CSS);
var APP_RELEASE_IMG         = path.join(APP_RELEASE, _IMG);
var APP_RELEASE_JS          = path.join(APP_RELEASE, _JS);
var APP_RELEASE_LESS        = path.join(APP_RELEASE_CSS, _LESS);
var APP_RELEASE_CONFIG      = path.join(APP_RELEASE_JS, _CONFIG);
var APP_RELEASE_CONFIG_FILE = path.join(APP_RELEASE_CONFIG, JS_CONFIG_FILE);

var APP_REPORT              = path.join(APP_ROOT, _REPORT);

var APP_START_FILENAME      = 'app.js';
var APP_START               = path.join(APP_SRC_JS, APP_START_FILENAME);
var APP_DIST_START          = path.join(APP_DIST_JS, APP_START_FILENAME);

var APP_TEST                = path.join(APP_ROOT, _TEST);
var APP_TEST_DIST           = path.join(APP_TEST, _DIST);
var APP_TEST_DIST_EXTERNAL  = path.join(APP_TEST, _DIST + '-external');

module.exports = {

    _CONFIG                 : 'config',
    _CSS                    : 'css',
    _DIST                   : 'dist',
    _IMG                    : 'images',
    _JS                     : 'js',
    _LESS                   : 'less',
    _REPORT                 : 'html-report',
    _TEMPLATES              : 'templates',
    _TEST                   : 'test',

    APP_DIST                : APP_DIST,

    APP_DIST_CONFIG_FILE    : APP_DIST_CONFIG_FILE,
    APP_DIST_CSS            : APP_DIST_CSS,
    APP_DIST_IMG            : APP_DIST_IMG,
    APP_DIST_JS             : APP_DIST_JS,
    APP_DIST_LESS           : APP_DIST_LESS,

    APP_GULP                : APP_GULP,

    APP_RELEASE             : APP_RELEASE,
    APP_RELEASE_CONFIG_FILE : APP_RELEASE_CONFIG_FILE,
    APP_RELEASE_CSS         : APP_RELEASE_CSS,
    APP_RELEASE_IMG         : APP_RELEASE_IMG,
    APP_RELEASE_JS          : APP_RELEASE_JS,
    APP_RELEASE_LESS        : APP_RELEASE_LESS,

    APP_REPORT              : APP_REPORT,

    APP_ROOT                : APP_ROOT,

    APP_SRC                 : APP_SRC,
    APP_SRC_CSS             : APP_SRC_CSS,
    APP_SRC_CONFIG_FILE     : APP_SRC_CONFIG_FILE,
    APP_SRC_IMG             : APP_SRC_IMG,
    APP_SRC_JS              : APP_SRC_JS,
    APP_SRC_LESS            : APP_SRC_LESS,
    APP_SRC_SETUP_FILE      : APP_SRC_SETUP_FILE,
    APP_SRC_JS_TEMPLATES    : APP_SRC_JS_TEMPLATES,

    APP_START               : APP_START,
    APP_START_FILENAME      : APP_START_FILENAME,

    APP_TEST                : APP_TEST,
    APP_TEST_DIST           : APP_TEST_DIST,
    APP_TEST_DIST_EXTERNAL  : APP_TEST_DIST_EXTERNAL,

    DEV_HOST                : 'localhost',
    DEV_PORT_START          : 3000,
    DEV_PORT_END            : 3005,

    EXPRESS_PORT            : 3010,

    JS_SETUP_FILE           : JS_SETUP_FILE

};
