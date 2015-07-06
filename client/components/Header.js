import React from 'react';
import {Link} from 'react-router';

export default  class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Blog"
    }
  }

  render() {
    return (<div className="header">
      <ul className="header-tabs">
        <li><Link to="home">Home</Link></li>
        <li><Link to="admin">Admin</Link></li>
      </ul>
    </div>);
  }
}
