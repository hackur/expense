import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ExpenseCreation, ExpensesList } from '../components';
import * as ExpenseActions from '../actions/ExpenseActions';

class HomePage extends Component {

  render() {
    const { expenses, dispatch } = this.props;
    const actions = bindActionCreators(ExpenseActions, dispatch);

    return (
      <div>
        <ExpenseCreation addExpense={actions.addExpense} />
        <ExpensesList expenses={expenses} actions={actions} />
      </div>
    );
  }
}

HomePage.propTypes = {
  expenses: PropTypes.array.isRequired,
  dispatch: PropTypes.object.isRequired
};

function select(state) {
  return {
    expenses: state.expenses
  };
}

export default connect(select)(HomePage);
