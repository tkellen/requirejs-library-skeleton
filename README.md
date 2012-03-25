# RequireJS / Jasmine / r.js / almond skeleton for javascript libraries and modules.

This skeleton is a starting point for developing complex JS modules and libraries.  Dependency management is handled by the [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) loader [RequireJS](https://github.com/jrburke/requirejs).  Unit testing is implemented with the BDD framework [Jasmine](https://github.com/pivotal/jasmine).  Compilation is handled with [r.js](https://github.com/jrburke/r.js) and [almond](https://github.com/jrburke/almond)--the result is a single file with no external dependencies.

## How to build ([node.js](http://nodejs.org/) is required):

```console
node vendor/r.js -o build.js
```
This generates a minified/optimized file under build/app.js.  When included in a page, the module's
API is exposed by a single global variable (named in build.js).

## Thanks

- @jrburke for the fantastic tools RequireJS/r.js & almond.
- @pivotal for the intuitive testing framework Jasmine.