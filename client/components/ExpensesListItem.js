import React, {PropTypes} from 'react';
import { ListGroupItem, Badge } from 'react-bootstrap';

export default class ExpensesListItem {
  render() {
    const { expense } = this.props;

    return (
      <ListGroupItem>
        <span>{expense.description}</span>
        <span onClick={::this.handleDelete} className="pull-right glyphicon glyphicon-remove-circle"></span>
        <Badge>{expense.amount}</Badge>
      </ListGroupItem>
    );
  }

  handleDelete() {
    this.props.deleteExpense(this.props.expense);
  }
}

ExpensesListItem.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired
};
