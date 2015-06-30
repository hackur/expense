import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Header from './header/Header.js'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Main"
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div class="contaiter">
          <RouteHandler/>
        </div>
      </div>
    );
  }
}

export default Main;
