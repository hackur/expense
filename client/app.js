import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Admin from './components/Admin.js';
import Main from './components/Main.js';
import Home from './components/Home.js';

console.log('app');

let routes = (
  <Route name="main" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
    <Route name="home" path="/home" handler={Home}/>
    <Route name="admin" path="/admin" handler={Admin}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
