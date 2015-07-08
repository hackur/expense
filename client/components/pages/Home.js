import React, { PropTypes } from 'react'
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux'
import ExpensesList from '../expenses/ExpensesList'
import * as expenseActions from '../../actions/expense'


@connect(state => ({
  expenses: state.expenses
}))
export default class Home extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { expenses, dispatch } = this.props
    //const actions = bindActionCreators(expenseActions, dispatch)

    console.log(expenses);

    return (
      <div>
        <h2>Home</h2>
        <ExpensesList info={expenses} {...bindActionCreators(expenseActions, dispatch)}/>
      </div>
    );
  }
}
