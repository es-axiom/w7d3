import { ACTION_TYPES } from '../actions/todo_actions';


const todosReducer = (state = { bru: 'yeee' }, action) => {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_TODOS:
      return action.todos.reduce( (obj, todo) => {
        obj[todo.id] = todo;
        return obj;
      }, {});
    default:
      return state;
  }
};

export default todosReducer;
