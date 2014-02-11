define(['chinchilla'], function(chinchilla) {
    'use strict';
    // TODO: Put your main data structures here as static data. 
    var data, chinch;
    data = ['todomvc', [1,2,3]];

    chinch = chinchilla.load(data);
    return chinch;
});