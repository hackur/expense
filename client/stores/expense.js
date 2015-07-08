import * as constants from '../constants'

const initialState = {
  expenses: []
}

const actionsMap = {
  [constants.FETCH_EXPENSES]: (state, action) => {
      return {
        expenses: action.expenses,
        ...state
      }
    }
}
