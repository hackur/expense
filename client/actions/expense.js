import 'whatwg-fetch'
import * as constants from '../constants'

export function fetchExpenses () {
  console.log('fetchExpenses')
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: constants.FETCH_EXPENSES,
        expenses: [
          {id: 1, name: 'name 1'},
          {id: 2, name: 'name 2'},
          {id: 3, name: 'name 3'}
        ]
      });
    }, 1000);
  };
}
