require.config({
    'paths': {
        'react': '../bower_components/react/react',
        'jsx': '../bower_components/require-jsx/jsx',
        'director': '../bower_components/director/build/director',
        'JSXTransformer': '../bower_components/react/JSXTransformer',
        'chinchilla': '../bower_components/chinchilla/dist/chinchilla.min',
        'underscore': '../bower_components/underscore/underscore',
        '_tree': '../bower_components/_tree/dist/_tree.min',
    },
    'shim': {
        'JSXTransformer': {exports: 'JSXTransformer'},
        'director': {exports: 'Router'},
        'underscore': {exports: '_'}
    }
});

require(['react', 'jsx!views/app', 'data/main', 'router'], function(React, App, Data, Router) {

    var app = React.renderComponent(App({model: Data.latest}), document.getElementById('app'));

    Data.latest.on('afterUpdate', function(newModel) {
        app.setProps({'model':  Data.latest});
    });

    Router.init();
});