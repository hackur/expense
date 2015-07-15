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
  },
  [constants.ADD_EXPENSE]: (state, action) => {
    return {
      ...state,
      expenses: state.expenses.concat([action.expense])
    }
  }
}

export default createReducer(initialState, actionsMap);
