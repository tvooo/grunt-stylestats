/*
 * grunt-stylestats
 * https://github.com/tvooo/grunt-stylestats
 *
 * Copyright (c) 2014 Tim von Oldenburg
 * Licensed under the MIT license.
 */

'use strict';

var stylestats = require('stylestats');
var test = require('stylestats/lib/defaultOptions')

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('stylestats', 'Analyze your CSS using stylestats.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});// require('./node_modules/stylestats/lib/defaultOptions'));

    // Iterate over all specified file groups.
    //console.log( this.files );
    this.files.forEach(function(f) {
      f.src.forEach( function( file ) {
        var stats = new stylestats(file);
        console.log( stats );
      });

    });
  });

};
