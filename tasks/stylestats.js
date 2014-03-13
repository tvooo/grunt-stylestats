/*
 * grunt-stylestats
 * https://github.com/tvooo/grunt-stylestats
 *
 * Copyright (c) 2014 Tim von Oldenburg
 * Licensed under the MIT license.
 */

'use strict';

var stylestats = require('stylestats');
var test = require('stylestats/lib/defaultOptions');
var Table = require('cli-table');
var _ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string');
var numeral = require('numeral');

module.exports = function(grunt) {
  grunt.registerMultiTask('stylestats', 'Analyze your CSS using stylestats.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options( require('stylestats/lib/defaultOptions'));
    this.files.forEach(function(f) {
      f.src.forEach( function( file ) {
        var result = new stylestats(file, options).parse();
        var table = new Table({
          style: {
            head: ['cyan'],
            compact: true
          },
          chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': '',
            'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': '',
            'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': '',
            'right': '' , 'right-mid': '' , 'middle': ' '
          }
        });
        Object.keys(result).forEach(function(key) {
          var stats = {};
          var prop = _(_(key).humanize()).titleize();
          if (key === 'propertiesCount') {
            var array = [];
            result[key].forEach(function(item) {
                array.push([item.property, item.count]);
            });
            stats[prop] = array.join('\n').replace(/\,/g, ': ');
          } else if (key === 'size' || key === 'gzippedSize') {
            stats[prop] = numeral(result[key]).format('0.0b');
          } else if (key === 'simplicity') {
            stats[prop] = numeral(result[key]).format('0.00%');
          } else {
            stats[prop] = _.isArray(result[key]) ? result[key].join('\n') : result[key];
            if (stats[prop] === '') {
                stats[prop] = 'N/A';
            }
          }
          table.push(stats);
        });
        grunt.log.subhead( file );
        grunt.log.write( table.toString() );
      });
    });
  });
};
