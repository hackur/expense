import React, {PropTypes} from 'react';

export default class ExpensesListItem {
  render() {
    const {expense} = this.props;

    return (
      <div>{expense.amount} - {expense.description}</div>
    );
  }
}

ExpensesListItem.propTypes = {
  expense: PropTypes.object.isRequired
};
