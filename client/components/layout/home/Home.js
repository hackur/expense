import React from 'react';
import ExpenseStore from './../../../stores/expenses.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return ExpenseStore.getState();
  }

  componentDidMount() {
    ExpenseStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ExpenseStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (<div>Home</div>);
  }
}

export default Home;
