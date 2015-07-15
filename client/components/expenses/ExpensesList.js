import React, { PropTypes } from 'react';
import ExpensesListItem from './ExpensesListItem';
import { fetch } from './../decorators';

@fetch(actions => actions.fetchExpenses())
export default class ExpensesList extends React.Component {
  static propTypes = {
    expenses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const {expenses, actions} = this.props;

    return (
      <div>
        {expenses.map(expense =>
          <ExpensesListItem key={expense._id} expense={expense} />
        )}
      </div>
    );
  }
}
