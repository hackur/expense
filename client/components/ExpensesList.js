import React, {PropTypes} from 'react';
import ExpensesListItem from './ExpensesListItem';
import { fetch } from './decorators';
import { ListGroup } from 'react-bootstrap';

@fetch(actions => actions.fetchExpenses())
export default class ExpensesList extends React.Component {

  render() {
    const {expenses} = this.props;

    return (
      <ListGroup>
        {expenses.map(expense =>
          <ExpensesListItem key={expense.id} expense={expense} />
        )}
      </ListGroup>
    );
  }
}

ExpensesList.propTypes = {
  expenses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
