import React, { Component, PropTypes } from 'react';
import { PageHeader } from 'components';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    const { children } = this.props;

    return (
      <div className="main">
        <PageHeader />
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
