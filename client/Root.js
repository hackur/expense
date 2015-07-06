import React, { PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'redux/react'
import { createDispatcher, createRedux, composeStores } from 'redux'

import * as components from './components'
import * as stores from './stores'

const { Application,Admin, Home } = components

const dispatcher = createDispatcher(composeStores(stores))
const redux = createRedux(dispatcher)

export default class Root extends React.Component {

  static propTypes = { history: PropTypes.object.isRequired }

  render () {
    const { history } = this.props
    return (
      <Provider redux={redux}>
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
