var alt = require("../alt.js")

class ExpensesActions {
  updateExpenses(expenses) {
    this.dispatch(expenses);
  }
}

module.exports = alt.createActions(ExpensesActions);
