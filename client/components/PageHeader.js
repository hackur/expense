import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Blog'
    };
  }

  render() {
    return (
      <Navbar brand="Expenses Tracker">
        <Nav>
          <NavItem href="#"><Link to="home">Home</Link></NavItem>
          <NavItem href="#"><Link to="admin">Admin</Link></NavItem>
        </Nav>
      </Navbar>
    );
  }
}
