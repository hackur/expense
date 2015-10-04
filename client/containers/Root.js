import React, { Component, PropTypes} from 'react';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from 'store/configureStore';
import App from './app/App';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

const store = configureStore();

export default class Root extends Component {
  render() {
    // initialize Redux DevTools for development env
    let devTools = '';
    if (__DEVELOPMENT__) {
      devTools = (
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false} />
        </DebugPanel>
      );
    }

    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route component={App}>
                <Route path="home" component={HomePage} />
                <Route path="admin" component={AdminPage} />
                <Redirect from="/" to="/home" />
              </Route>
            </Router>
          }
        </Provider>
        {devTools}
      </div>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
};
