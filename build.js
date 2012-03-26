// see a complete list of options here:
// https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
  // all modules loaded are relative to this path
  // e.g. require(['grid/core']) would grab /lib/grid/core.js
  baseUrl: './lib',

  // target amd loader shim as the main module, path is relative to baseUrl.
  name: '../vendor/almond',

  optimize: 'none',

  // files to include along with almond.  only lib/skeleton.js is defined, as
  // it pulls in the rest of the dependencies automatically.
  include: ['skeleton'],

  // code to wrap around the start / end of the resulting build file
  // the global variable used to expose the API is defined here
  wrap: {
    start: "(function(global) {",
    end:   "  if(typeof module !== 'undefined' && module.exports) {"+
           "     module.exports = requirejs('skeleton');"+ // for node
           "  } else {"+
           "    global['skeleton'] = requirejs('skeleton');"+ // for browsers w/o amd
           "  }"+
           "}(this));"
  },

  // build file destination, relative to the build file itself
  out: './build/skeleton.js'
})