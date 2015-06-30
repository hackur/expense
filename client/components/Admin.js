import React from 'react';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Admin"
    }
  }

  render() {
    return (<div>Admin</div>);
  }
}

export default Admin;
