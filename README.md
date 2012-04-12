# RequireJS skeleton for modern JS libraries.
[![Build Status](https://secure.travis-ci.org/tkellen/requirejs-library-skeleton.png)](http://travis-ci.org/[tkellen]/[requirejs-library-skeleton])

This template is a starting point for developing modern javascript modules and libraries.  Dependency management is handled by the [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) loader [RequireJS](https://github.com/jrburke/requirejs).  Unit testing is implemented with the BDD framework [Jasmine](https://github.com/pivotal/jasmine).  Compilation is handled with [r.js](https://github.com/jrburke/r.js) and [almond](https://github.com/jrburke/almond)--the result is a single file with no external dependencies that runs in Node or the browser (with AMD, or as an inline script).

### How to build ([node.js](http://nodejs.org/) is required):

```console
node vendor/r.js -o build.js
```
This generates a minified/optimized file under build/app.js.

## Thanks to

- @jrburke for the fantastic tools RequireJS/r.js & almond.
- @pivotal for the intuitive testing framework Jasmine.
