import {ACTION_TYPES, receiveTodo, receiveTodos } from "../actions/todo_actions";
import {fetchTodos, createTodo} from '../util/todo_api_util';

const todoMiddleware = store => next => action =>{
  switch (action.type) {
    case ACTION_TYPES.REQUEST_TODOS:
      let success = data => store.dispatch(receiveTodos(data));
      let error = e => console.log(e.msg);
      fetchTodos(success, error);
      break;
    case ACTION_TYPES.CREATE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      createTodo(data, success, error);
      break;
    default:
      next(action);
  }
};

export default todoMiddleware;
