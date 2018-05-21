require('babel-register')(); //Register babel to transpile before our tests run

require.extensions['.css'] = function() {}; //disabling webpack featurees that mocha does not understand
