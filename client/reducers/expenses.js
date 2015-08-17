import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, FETCH_EXPENSES } from '../constants/ActionTypes';

const initialState = [{ amount: '', description: '' }];

export default function expenses(state = initialState, action) {
  switch (action.type) {

    case ADD_EXPENSE:
      return [action.expense, ...state];

    case DELETE_EXPENSE:
      return state.filter(todo =>
        todo.id !== action.id
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
