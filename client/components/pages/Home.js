import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ExpenseCreation, ExpensesList } from '../expenses';
import * as ExpenseActions from '../../actions/expense';

@connect(state => ({
  expenses: state.expenses.expenses
}))
export default class Home extends React.Component {

  render() {
    const { expenses, dispatch } = this.props;
    const actions = bindActionCreators(ExpenseActions, dispatch);

    return (
      <div>
        <ExpenseCreation actions={actions} />
        <ExpensesList actions={actions} {...this.props} />
      </div>
    );
  }
}
