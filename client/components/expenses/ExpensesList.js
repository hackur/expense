import React, { PropTypes } from 'react'

export default class ExpensesList extends React.Component {
  static propTypes = {
    expenses: PropTypes.object
  }

  render() {
    const {expenses} = this.props;
    return (
      <div>
        <strong>{expenses}</strong>
        <span className="time">{expenses}</span>
      </div>
    );
  }
}
