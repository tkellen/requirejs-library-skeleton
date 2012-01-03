# RequireJS / Jasmine / r.js / Almond Boilerplate

This skeleton is a starting point for developing modules and libraries for complex JS applications.
Dependency management is handled by the [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) loader [RequireJS](http://www.grid.gs/).  Unit testing is implemented
with the BDD framework [Jasmine](https://github.com/pivotal/jasmine).  Compilation is handled with [r.js](https://github.com/jrburke/r.js/) and [almond](https://github.com/jrburke/almond), producing a single
file with no external dependencies. 

## How to build ([node.js](http://nodejs.org/) is required):

```console
node vendor/r.js -o build.js
```
This generates a minified/optimized file under build/app.js.  When included in a page, the module's
API is exposed by a single global variable (named in build.js).