define(['chinchilla'], function(chinchilla) {
    // TODO: Put your main data structures here as static data. 
    var data, latest;
    data = ['todomvc', [1,2,3]];
    chinch = chinchilla.load(data);

    var retObj = {latest: chinch};
    chinch.on('afterUpdate', function(newModel) {
        retObj.latest = newModel;
    });

    return retObj;
});