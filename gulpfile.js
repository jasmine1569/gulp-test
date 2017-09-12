'use strict';

var elixir = require('laravel-elixir');

elixir(function(mix) {

  mix.sass('app.scss', 'dist/css', 'src/sass');
  mix.scripts('app.js', 'dist/css', 'src/js')
});