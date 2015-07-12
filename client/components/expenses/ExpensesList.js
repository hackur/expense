import React, { PropTypes } from 'react'
import ExpensesListItem from './ExpensesListItem'

export default class ExpensesList extends React.Component {
  static propTypes = {
    expenses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  }

  render() {
    const {expenses, actions} = this.props;

    console.log(expenses, 'list')
    return (
      <div>
        {expenses.expenses.map(expense =>
          <ExpensesListItem expense={expense}/>
        )}

        <button type="submit" onClick={actions.fetchExpenses}>Click</button>
      </div>
    );
  }
}
