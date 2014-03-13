# grunt-stylestats

Analyze your CSS using [stylestats](https://github.com/t32k/stylestats).

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

The options are exactly the same as in the [stylestats library](https://github.com/t32k/stylestats/blob/master/lib/defaultOptions.js). Those are the defaults:

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

#### Basic example
The most basic example of using grunt-stylestats. Just pass the configuration object a `src` property with an array of files to analyze ([globbing](http://gruntjs.com/configuring-tasks#globbing-patterns) allowed).

```js
grunt.initConfig({
  stylestats: {
    src: ['path/to/style.css']
  }
});
```

#### Multiple targets
If you need to configure multiple targets, you can do it this way:

```js
grunt.initConfig({
  stylestats: {
    dev: {
      src: ['src/style.css']
    },
    dist: {
      src: ['dist/style.css']
    }
  }
});
```

#### Custom options
Custom options, as [shown above](#options), are simply passed to the options object (either task-specific or target-specific).

```js
grunt.initConfig({
  stylestats: {
    options: {
      propertiesCount: 3,
      mediaQueries: false,
      size: false,
      totalUniqueColors: false,
      totalUniqueFontSizes: false
    },
    src: ['path/to/style.css']
  }
});
```

## Contributing
1. Fork
2. Clone
3. Fix / Enhance
4. Commit
5. Pull Request
6. Smile :)
