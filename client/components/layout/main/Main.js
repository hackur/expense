import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Header from './../header/Header.js'
import './main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Main"
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

export default Main;
