import React, { PropTypes } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { logger } from './middleware';
import * as components from './components';
import * as reducers from './reducers';

const { Application, Admin, Home } = components

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider store={store}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

function renderRoutes (history) {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path="home" component={Home} />
        <Route path="admin" component={Admin} />
        <Redirect from="/" to="/home" />
      </Route>
    </Router>
  )
}
