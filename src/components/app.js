/*eslint-disable strict */

var React = require('react');
var Header = require('./common/header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="container-fluid" >
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;