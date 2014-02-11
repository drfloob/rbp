/** @jsx React.DOM */

define(['react', 'router', 'data/main'], function(React, router, data) {

    var DELAY = 5000;

    function changeItem() {
        var node = data.latest.findNode(this);
        console.log('adding 3 to ', node.data());
        node.data(node.data() + 3);
    };

    function removeItem() {
        var node = data.latest.findNode(this);
        console.log('triggered removal', node.data());
        node.remove();
    };

    var Item = React.createClass({
        shouldComponentUpdate: function(newProps) {
            console.log('Item', this.props.model.data(), 
                        'shouldComponentUpdate', newProps.model.modified);
            return newProps.model.modified;
        },
        componentWillMount: function() {
            console.log('mounting item', this.props.model.data());

            var model = this.props.model,
            f = (model.data() < 4 ? changeItem : removeItem).bind(model);

            setTimeout(f, DELAY * Math.random());
        },
        render: function() {
            return <li>{this.props.model.data()}</li>;
        }
    });

    var App = React.createClass({
        shouldComponentUpdate: function(newProps) {
            console.log('app should update', newProps.model.modified);
            return newProps.model.modified;
        },
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