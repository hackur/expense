import React, { PropTypes } from 'react'
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux'
import * as expenseActions from '../../actions/expense';

@connect(state => ({
  expenses: state.expenses
}))
export default class Home extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch } = this.props
    const actions = bindActionCreators(expenseActions, dispatch)

    return (
      <div>
        <h2>Home</h2>
        <div actions={actions} {...this.props}></div>
          {this.props.children &&
            React.cloneElement(this.props.children, { actions, ...this.props })}
      </div>
    );
  }
}
