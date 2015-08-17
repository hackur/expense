import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function fetchExpenses() {
  return dispatch => {
    axios.get('/expenses')
      .then((response) => {
        dispatch({
          type: types.FETCH_EXPENSES,
          expenses: response.data
        });
      })
      .catch(() => {
        dispatch({
          type: types.FETCH_EXPENSES,
          expenses: []
        });
      });
  };
}

export function addExpense(expense) {
  return dispatch => {
    axios.post('/expenses', expense)
      .then((response) => {
        dispatch({
          type: types.ADD_EXPENSE,
          expense: response.data
        });
      })
      .catch(() => {
        dispatch({
          type: types.ADD_EXPENSE,
          expense: {}
        });
      });
  };
}
