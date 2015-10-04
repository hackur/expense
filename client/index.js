import 'babel-core/polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Root from './containers/Root';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';

const history = __DEVELOPMENT__ ? createBrowserHistory() : createHashHistory();

React.render(
  <Root history={history} />,
  document.getElementById('root')
);
