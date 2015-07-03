var alt = require("../alt.js")
import ExpensesActions from './../actions/expenses.js'
console.log(ExpenseStore);

class ExpenseStore {
  constructor() {
    this.expenses = []

    this.bindListeners({
      handleUpdateExpenses: ExpensesActions.UPDATE_EXPENSES
    });
  }

  handleUpdateExpenses(expenses) {
    this.expenses = expenses;
  }
}

module.exports = alt.createStore(ExpenseStore, 'ExpenseStore');
