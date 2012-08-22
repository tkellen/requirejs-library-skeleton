# RequireJS skeleton for modern JS libraries.
[![Build Status](https://secure.travis-ci.org/tkellen/requirejs-library-skeleton.png)](http://travis-ci.org/[tkellen]/[requirejs-library-skeleton])

This template is a starting point for developing modern javascript modules and libraries.  Dependency management is handled by the [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) loader [RequireJS](https://github.com/jrburke/requirejs).  Unit testing is implemented with the BDD framework [Jasmine](https://github.com/pivotal/jasmine).  Compilation is handled with [r.js](https://github.com/jrburke/r.js) and [almond](https://github.com/jrburke/almond) via node, or using the javascript build tool [grunt](https://github.com/cowboy/grunt)

Whichever method you use, the result is a single file with no external dependencies that runs in Node or the browser (with AMD, or as an inline script).


## Building / Testing with Node

Kick off the requirejs optimizer by hand:
```console
node vendor/r.js -o build.js
```

If your project does not require a browser environment, run Jasmine tests with node.
```console
node test/runner-node
```

If your project does require a browser, start a webserver in the root directry.
```console
servedir
```
...and browse to [http://localhost:8000/test/runner.html](http://localhost:8000/test/runner.html)


## Building / Testing / Minifying with Grunt

Start by installing grunt and a few required tasks:
```console
npm install -g grunt
npm install
```

Then, use grunt to run your tests in a headless browser ([PhantomJS](http://www.phantomjs.org/)), or kick off the RequireJS optimizer from any path inside the root of your project using these commands:
```console
grunt test
grunt requirejs
```

To run tests, optimize and minify your library with a single command, call grunt with no arguments.
```console
grunt
```

### Headless Browser Testing w/ PhantomJS

In order for the jasmine task to work properly, [PhantomJS](http://www.phantomjs.org/) must be installed.  Unfortunately, PhantomJS cannot be installed automatically via npm or grunt, so you need to install it yourself. There are a number of ways to install PhantomJS.

* [PhantomJS and Mac OS X](http://ariya.ofilabs.com/2012/02/phantomjs-and-mac-os-x.html)
* [PhantomJS Installation](http://code.google.com/p/phantomjs/wiki/Installation) (PhantomJS wiki)

Note that the `phantomjs` executable needs to be in the system `PATH` for grunt to see it (if you can run "phantomjs" at the command line, this task should work).

* [How to set the path and environment variables in Windows](http://www.computerhope.com/issues/ch000549.htm)
* [Where does $PATH get set in OS X 10.6 Snow Leopard?](http://superuser.com/questions/69130/where-does-path-get-set-in-os-x-10-6-snow-leopard)
* [How do I change the PATH variable in Linux](https://www.google.com/search?q=How+do+I+change+the+PATH+variable+in+Linux)


## Thanks to

- @jrburke for the fantastic tools RequireJS/r.js & almond.
- @cowboy for all of his hard work on Grunt.
- @pivotal for the intuitive testing framework Jasmine.
