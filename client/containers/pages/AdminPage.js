import React from 'react';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Admin'
    };
  }

  render() {
    return (<div>Admin</div>);
  }
}
