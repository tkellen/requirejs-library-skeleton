// see a complete list of options here:
// https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
  // all modules loaded are relative to this path
  // e.g. require(['grid/core']) would grab /lib/grid/core.js
  baseUrl: './lib',

  // target amd loader shim as the main module, path is relative to baseUrl.
  name: '../vendor/almond',

  // files to include along with almond.  in this case, only lib/app.js is
  // defined, as it pulls in the rest of the dependencies automatically.
  include: ['app'],

  // code to wrap around the start / end of the resulting build file
  // the global variable used to expose the API is defined here
  wrap: {
    start: '(function(){',
    end: 'window.app = require("app");}());'
  },

  // build file destination, relative to the build file itself
  out: './build/app.js'
})