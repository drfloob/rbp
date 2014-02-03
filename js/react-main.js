require.config({
    'paths': {
        'react': '../bower_components/react/react',
        'jsx': '../bower_components/require-jsx/jsx',
        'director': '../bower_components/director/build/director',
        'JSXTransformer': '../bower_components/react/JSXTransformer',
    },
    'shim': {
        'JSXTransformer': {exports: 'JSXTransformer'},
        'director': {exports: 'Router'}
    }
});
require(['react', 'jsx!views/app'], function(React, App) {
    React.renderComponent(App({}), document.getElementById('app'));
});