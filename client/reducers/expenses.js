import * as constants from '../constants'
import createReducer from './create.reducer'

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

export default createReducer(initialState, actionsMap);
