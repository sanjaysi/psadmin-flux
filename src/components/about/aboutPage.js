"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
/* // Uncomment to test these 2 functions
        willTransitionTo: function(transition) {
            if (!confirm('Are you sure you read a page that\'s this boring')) {
                transition.about();
            }
        },
        willTransitionFrom: function(transition) {
            if (!confirm('Are you sure you leave a page that\'s this exciting')) {
                transition.about();
            }
        }
*/    },

    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application  uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Browserify</li>
                        <li>ESLint</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;