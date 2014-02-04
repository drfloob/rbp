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

require(['react', 'jsx!views/app', 'data/main', 'cortex', 'router'], function(React, App, Data, Cortex, Router) {

    var DataCortex = new Cortex(Data, function() {
        app.setState();
    });
    app = React.renderComponent(App({data: DataCortex}), document.getElementById('app'));
    Router.init();
});