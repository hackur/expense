import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';

export default class ExpenseCreation extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  state = {amount: '', description: ''};
  render() {
    const {actions} = this.props;

    return (
      <div>
        <label>Amount</label>
        <input ref="amountInput" type='number' step='1' value={this.state.amount} onChange={::this.handleChange} />
        <br />
        <label>Description</label>
        <input ref="descriptionInput" type='text' value={this.state.description} onChange={::this.handleChange} />
        <br />
        <input type='button' value='Save' onClick={::this.handleClick} />
      </div>
    );
  }

  handleChange() {
    this.setState({
      amount:  this.refs.amountInput.getDOMNode().value,
      description:  this.refs.descriptionInput.getDOMNode().value
    });
  }

  handleClick() {
    if(this.state.amount != '' && this.state.desciption != '') {
      this.props.actions.addExpense(this.state);
      this.setState({amount: '', description: ''})
    }
  }
}
