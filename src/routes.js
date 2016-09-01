"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = React.Route;

var routes = (
    <Route name="app" path="/" handler={require('./componenets/app')}>
        <DefaultRoute handler={require('./componenets/homePage')} />
        <Route name="authors" handler={require('./componenets/authors/authorsPage')} />
        <Route name="about" handler={require('./componenets/about/aboutPge')} />
    </Route>
);

module.exports = routes;