import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpensesList from '../expenses/ExpensesList';
import * as ExpenseActions from '../../actions/expense';

@connect(state => ({
  expenses: state.expenses
}))
export default class Home extends React.Component {

  render() {
    const { expenses, dispatch } = this.props;
    const actions = bindActionCreators(ExpenseActions, dispatch);

    return (
      <div>
        <h2>Home</h2>
        <ExpensesList actions={actions} {...this.props} />
      </div>
    );
  }
}
