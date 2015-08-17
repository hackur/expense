import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ExpenseCreation, ExpensesList } from '../components';
import * as ExpenseActions from '../actions/expenses';

class Home extends Component {

  render() {
    const { expenses, dispatch } = this.props;
    const actions = bindActionCreators(ExpenseActions, dispatch);

    console.log(actions);

    return (
      <div>
        <ExpenseCreation addExpense={actions.addExpense} />
        <ExpensesList expenses={expenses} actions={actions} />
      </div>
    );
  }
}

Home.propTypes = {
  expenses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.object.isRequired
};

function select(state) {
  return {
    expenses: state.expenses
  };
}

export default connect(select)(Home);
