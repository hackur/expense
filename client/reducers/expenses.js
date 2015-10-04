import Immutable from 'immutable';
import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, FETCH_EXPENSES } from 'constants/ActionTypes';

const initialState = Immutable.List([]);

export default function expenses(state = initialState, action) {
  switch (action.type) {

    case ADD_EXPENSE:
      return state.push(action.expense);

    case DELETE_EXPENSE:
      return state.filter(expense =>
        expense._id !== action._id
      );

    case EDIT_EXPENSE:
      return state.map(expense =>
        expense.id === action.id ?
          Object.assign({}, expense, { amount: action.amount, description: action.description }) :
          expense
      );

    case FETCH_EXPENSES:
      return state.concat(action.expenses);

    default:
      return state;
  }
}
