import React, {PropTypes} from 'react';
import { ListGroupItem, Badge } from 'react-bootstrap';

export default class ExpensesListItem {
  render() {
    const {expense} = this.props;

    return (
      <ListGroupItem>{expense.description}<Badge>{expense.amount}</Badge></ListGroupItem>
    );
  }
}

ExpensesListItem.propTypes = {
  expense: PropTypes.object.isRequired
};
