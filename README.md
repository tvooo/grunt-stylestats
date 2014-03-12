# grunt-stylestats

> Analyze your CSS using stylestats.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stylestats --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stylestats');
```

## The "stylestats" task

### Overview
In your project's Gruntfile, add a section named `stylestats` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  stylestats: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

The options are exactly the same as in the [stylestats library](https://github.com/t32k/stylestats/blob/master/lib/defaultOptions.js).

```json
{
  "size": true,
  "gzippedSize": false,
  "simplicity": true,
  "rules": true,
  "selectors": true,
  "lowestCohesion": true,
  "lowestCohesionSelector": true,
  "totalUniqueFontSizes": true,
  "uniqueFontSize": true,
  "totalUniqueColors": true,
  "uniqueColor": true,
  "idSelectors": true,
  "universalSelectors": true,
  "importantKeywords": true,
  "mediaQueries": true,
  "propertiesCount": 10
}
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  stylestats: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  stylestats: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
