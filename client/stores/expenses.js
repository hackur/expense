import * as constants from '../constants'
import createStore from './create.store'

const initialState = {
  expenses: []
}

const actionsMap = {
  [constants.FETCH_EXPENSES]: (state, action) => {
      return {
        ...state,
        expenses: action.expenses
      }
    }
}

export default createStore(initialState, actionsMap);
