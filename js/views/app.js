/** @jsx React.DOM */

define(['react', 'router', 'data/main'], function(React, router, data) {
    'use strict';

    var DELAY = 2000;

    function changeItem(comp) {
        var node = comp.props.model;
        console.log('adding 3 to ', node.data());
        node.data(node.data() + 3);
    };

    function removeItem(comp) {
        var node = comp.props.model;
        console.log('$ triggered removal', node.data());
        node.remove();
    };

    var Item = React.createClass({
        componentWillMount: function() {
            console.log('^ mounting', this.props.model.data());
            var model = this.props.model,
            f = _.partial(model.data() < 4 ? changeItem : removeItem, this);
            setTimeout(f, DELAY * Math.random());
        },
        componentWillUnmount: function() {
            console.log('$ unmounting', this.props.model.data());
        },
        componentWillUpdate:function () {
            console.log('  updating', this.props.model.data());
        },
        render: function() {
            return <li>{this.props.model.data()}</li>;
        }
    });

    var App = React.createClass({
        componentWillMount: function() {
            router.on(router.ON.ALL, function(){console.log('app found /');});
        },
        render: function() {
            return <ul>
                {this.props.model.root().children().map(function(t) {
                    return <Item key={t.data()} model={t} />;
                })}
            </ul>;
        }
    });

    return App;
});