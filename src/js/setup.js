/* global jQuery */

var _global = _global || (function() { return this; })();

// Get our $ that we will attach to Backbone
var $ = require('jquery');
_global.$ = _global.$ || (_global.jQuery = $);

// Properly setup $ in Backbone
// bootstrap needs this as well
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = Backbone.$ || $;

// bootstrap modules
var transition = require('bootstrap/js/transition');
var collapse   = require('bootstrap/js/collapse');

// rest of infrastructure
var Marionette = require('backbone.marionette');
_global.Marionette = _global.Marionette || Backbone.Marionette;

// Return _global for use in the app
module.exports = _global;
