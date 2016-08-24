import {ACTION_TYPES, receiveTodos } from "../actions/todo_actions";
import {fetchTodos} from '../util/todo_api_util';

const todoMiddleware = store => next => action =>{
  switch (action.type) {
    case ACTION_TYPES.REQUEST_TODOS:
      const success = data => store.dispatch(receiveTodos(data));
      fetchTodos(success);
      break;
    default:
      next(action);
  }
};

export default todoMiddleware;
