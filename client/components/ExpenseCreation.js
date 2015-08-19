import React, { PropTypes, Component } from 'react';
import { Input, Button } from 'react-bootstrap';

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
        <Input ref="amountInput" type="number" label="Amount" value={this.state.amount} onChange={::this.handleChange} />
        <Input ref="descriptionInput" type="text" label="Description" value={this.state.description} onChange={::this.handleChange} />
        <Button bsStyle="success" onClick={::this.handleClick}>Create</Button>
      </div>
    );
  }

  handleChange() {
    this.setState({
      amount: this.refs.amountInput.refs.input.getDOMNode().value,
      description: this.refs.descriptionInput.refs.input.getDOMNode().value
    });
  }

  handleClick() {
    if (this.state.amount !== '' && this.state.desciption !== '') {
      this.props.addExpense(this.state);
      this.setState({amount: '', description: ''});
    }
  }
}

ExpenseCreation.propTypes = {
  addExpense: PropTypes.func.isRequired
};

export default ExpenseCreation;
