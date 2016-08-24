import { ACTION_TYPES } from '../actions/todo_actions';


const todosReducer = (state = { bru: 'yeee' }, action) => {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todosReducer;
