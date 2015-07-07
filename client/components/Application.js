import React, { PropTypes } from 'react'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router'
import Header from './Header'

export default class Application extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor (props, context) {
    super(props, context)
    
    this.state = {
      name: "Application"
    }
  }

  render() {
    return (
      <div className="main">
        <Header></Header>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
