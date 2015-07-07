import 'whatwg-fetch'
import * as constants from '../constants'

export function fetchExpenses (options) {
  console.log('fetchExpenses')
  return dispatch => {
    fetch('/api/expenses')
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.FETCH_EXPENSES,
      expenses: [
        {id: 1, name: 'name 1'},
        {id: 2, name: 'name 2'},
        {id: 3, name: 'name 3'}
      ]
    }))
  }
}
