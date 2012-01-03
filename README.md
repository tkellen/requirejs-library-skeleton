# RequireJS / Jasmine / r.js / Almond Boilerplate

This skeleton is a starting point for developing modules and libraries
for complex JS applications.  Dependency management is handled by the
AMD loader RequireJS.  Unit testing has been implemented with the BDD
framework Jasmine.  Building managed by r.js / almond to package the
code into a single file with no external dependencies.  The resulting
API is exposed by a single global variable.

How to build:
```console
node vendor/r.js -o build.js
```

The result is a single, minified/optimized file under build/app.js