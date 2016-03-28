'use strict'
// Require Node modules in the browser thanks to Browserify: http://browserify.org
const bespoke = require('bespoke')
const cube = require('bespoke-theme-cube')
const keys = require('bespoke-keys')
const touch = require('bespoke-touch')
const bullets = require('bespoke-bullets')
const scale = require('bespoke-scale')
const run = require('bespoke-run')
const hash = require('bespoke-hash')
const progress = require('bespoke-progress')

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  run(),
  bullets('li, .bullet'),
  scale(),
  hash(),
  progress()
])

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism')
