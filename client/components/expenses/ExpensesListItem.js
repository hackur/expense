import React, { PropTypes } from 'react';

export default class ExpensesListItem {
  static propTypes = {
    expense: PropTypes.object.isRequired
  };

  render() {
    const { expense } = this.props;
    return (
      <div>{expense.amount} - {expense.description}</div>
    );
  }
}
