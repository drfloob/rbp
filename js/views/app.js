/** @jsx React.DOM */

define(['react', 'cortex'], function(React) {

    var Item = React.createClass({

        componentWillMount: function(){
            console.log('mounting', this.props.val.getValue());

            //--------------------------------------------------------------------------------
            // EXAMPLE of Cortex Usage
            var self = this;

            // modify an entry at a random time btw seconds 1 and 4
            if (self.props.val.getValue() < 4) {
                setTimeout(function() {
                    self.props.val.set(self.props.val.getValue() + 3);
                }, 4000 * Math.random());
            }

            // delete an entry at a random time btw seconds 5 and 8
            setTimeout(function() {
                console.log('timeout from', self.props.val.getValue());
                self.props.val.delete();
            }, 4000 + 4000 * Math.random())

            //--------------------------------------------------------------------------------
        },
        componentWillUpdate: function(nextProps) {
            console.log('updating', this.props.val.getValue(), 'to', nextProps.val.getValue());
        },
        componentWillUnmount: function() {
            console.log('unmounting', this.props.val.getValue());
        },

        render: function() {
            return <li>{this.props.val.getValue()}</li>;
        }
    });

    var App = React.createClass({
        render: function() {
            return <ul>
                {this.props.data.map(function(t) {
                    return <Item key={t.getValue()} val={t} />; 
                })}
            </ul>;
        }
    });

    return App;
});