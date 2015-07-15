import * as constants from '../constants';

var axios = require('axios');

export function fetchExpenses () {
  return dispatch => {
    axios.get('/expenses')
      .then((response) => {
        dispatch({
          type: constants.FETCH_EXPENSES,
          expenses: response.data
        });
      });
  };
}

export function addExpense (expense) {
  return dispatch => {
    axios.post('/expenses', expense)
      .then((response) => {
        dispatch({
          type: constants.ADD_EXPENSE,
          expense: response.data
        });
      });
  };
}
