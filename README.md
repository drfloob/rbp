A React-based boilerplate, under development. Opinions include:

 * Livereload setup on default port. run via `./dev.sh`; stop via `./dev.sh -k`
 * RequireJS configured for react, director, require-jsx and more (via `define(['react', 'director', 'jsx!file'], ...);`)
 * index.html pre-rigged with an `#app` section and a required data-main. You may never have to touch it.
 * [chinchilla](http://github.com/drfloob/chinchilla) for data management. Immutable tree structure, `O(1)` subtree modification check.
