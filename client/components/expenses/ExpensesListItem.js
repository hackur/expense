import React, { PropTypes } from 'react';

export default class ExpensesListItem {
  static propTypes = {
    expense: PropTypes.number.isRequired
  };

  render() {
    const { expense } = this.props;
    return (
      <div>{expense.id} - {expense.name}</div>
    );
  }
}
