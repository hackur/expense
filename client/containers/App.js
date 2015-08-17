import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    const { children } = this.props;

    return (
      <div className="main">
        <Header />
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
