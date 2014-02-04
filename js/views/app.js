/** @jsx React.DOM */

define(['react', 'cortex'], function(React) {

    var Item = React.createClass({
        //--------------------------------------------------------------------------------
        // Logging stuff
        componentWillMount: function(){
            var self = this;
            console.log('mounting', this.props.val.getValue());
            setTimeout(function() {
                console.log('timeout from', self.props.val.getValue());
                self.props.val.delete();
            }, 4000 * Math.random())
        },
        componentWillUpdate: function(nextProps) {
            console.log('updating', this.props.val.getValue(), 'to', nextProps.val.getValue());
        },
        componentWillUnmount: function() {
            console.log('unmounting', this.props.val.getValue());
        },
        //--------------------------------------------------------------------------------

        render: function() {
            return <li>{this.props.val.getValue()}</li>;
        }
    });

    var App = React.createClass({
        render: function() {
            return <ul>
                {this.props.todos.map(function(t) {
                    return <Item key={t.getValue()} val={t} />; 
                })}
            </ul>;
        }
    });

    return App;
});