import 'babel-core/polyfill';
import './assets/styles/index.scss';
import React from 'react';
import Root from './containers/Root';
import BrowserHistory from 'react-router/lib/BrowserHistory';

React.render(
  <Root history={new BrowserHistory()} />,
  document.getElementById('root')
);
