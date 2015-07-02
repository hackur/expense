import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import './app.scss';

import Admin from './components/layout/admin/Admin.js';
import Main from './components/layout/main/Main.js';
import Home from './components/layout/home/Home.js';

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
