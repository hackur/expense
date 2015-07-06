import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Header from './Header'

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Application"
    }
  }

  render() {
    return (
      <div className="main">
        <Header></Header>
        <div className="container">
          <RouteHandler/>
        </div>
      </div>
    );
  }
}
