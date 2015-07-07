import * as constants from '../constants'

const initialState = {
  expenses: {}
}

const actionsMap = {
  [constants.FETCH_EXPENSES]: (state, action) => ({ expenses: action.expenses }),
}

export default function expense (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state

  return Object.assign({}, state, reduceFn(state, action))
}
