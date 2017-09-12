# gulp-test
How to install yarn, gulp, and laravel-elixir

## Getting Started
Welcome start by installing node_modules and creating a package.json inside your project.
```bash
$ yarn install
$ yarn init
````

Learn more about [Yarn](https://yarnpkg.com/en/docs/getting-started)

## devDependencies
```bash
$ yarn add laravel-elixir
$ yarn add gulp
````

## Files
Here are some files that need to be created
```bash
$ touch gulpfile.js
````

With in the gulpfile.js write the path to your js and css file.
```bash
//Example:
'use strict';

var elixir = require('laravel-elixir');

elixir(function(mix) {

  mix.sass('app.scss', 'dist/css', 'src/sass');
  mix.scripts('app.js', 'dist/css', 'src/js')
});
````
# Gulp Commands
By adding the devDependencies to your package.json you are now able to use the gulp commands. 

## One-Time Compile Files
```bash
$ gulp
````
## Watching Assets For Changes
```bash
$ gulp watch
````
