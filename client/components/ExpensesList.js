import React, {PropTypes} from 'react';
import ExpensesListItem from './ExpensesListItem';
import { fetch } from './decorators';

@fetch(actions => actions.fetchExpenses())
export default class ExpensesList extends React.Component {

  render() {
    const {expenses} = this.props;

    return (
      <div>
        {expenses.map(expense =>
          <ExpensesListItem key={expense.id} expense={expense} />
        )}
      </div>
    );
  }
}

ExpensesList.propTypes = {
  expenses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
