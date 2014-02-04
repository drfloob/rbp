require.config({
    'paths': {
        'react': '../bower_components/react/react',
        'jsx': '../bower_components/require-jsx/jsx',
        'director': '../bower_components/director/build/director',
        'JSXTransformer': '../bower_components/react/JSXTransformer',
        'cortex': '../bower_components/cortex/build/cortex'
    },
    'shim': {
        'JSXTransformer': {exports: 'JSXTransformer'},
        'director': {exports: 'Router'},
        'cortex': {exports: 'Cortex'}
    }
});

require(['react', 'jsx!views/app'], function(React, App) {
    //--------------------------------------------------------------------------------
    // Cortex Demo Code
    var app;
    var todos = [1,2,3];
    var todosTex = new Cortex(todos, function() {
        app.setState();
    });
    //--------------------------------------------------------------------------------

    app = React.renderComponent(App({todos: todosTex}), document.getElementById('app'));
});