import React, { Component, PropTypes} from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route } from 'react-router';
import configureStore from '../store/configureStore';
import App from './App';
import HomePage from './HomePage';
import AdminPage from './AdminPage';

const store = configureStore();

export default class Root extends Component {
  render() {
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
      </div>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
};
