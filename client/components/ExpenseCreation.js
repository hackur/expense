import React, { PropTypes, Component } from 'react';

class ExpenseCreation extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      amount: 0,
      description: ''
    };
  }

  render() {
    return (
      <div>
        <label>Amount</label>
        <input ref="amountInput" type="number" step="1" value={this.state.amount} onChange={::this.handleChange} />
        <br />
        <label>Description</label>
        <input ref="descriptionInput" type="text" value={this.state.description} onChange={::this.handleChange} />
        <br />
        <input type="button" value="Save" onClick={::this.handleClick} />
      </div>
    );
  }

  handleChange() {
    this.setState({
      amount: this.refs.amountInput.getDOMNode().value,
      description: this.refs.descriptionInput.getDOMNode().value
    });
  }

  handleClick() {
    if (this.state.amount !== '' && this.state.desciption !== '') {
      console.log(this.props);
      this.props.addExpense(this.state);
      this.setState({amount: '', description: ''});
    }
  }
}

ExpenseCreation.propTypes = {
  addExpense: PropTypes.func.isRequired
};

export default ExpenseCreation;
