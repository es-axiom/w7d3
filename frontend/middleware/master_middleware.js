import { applyMiddleware } from 'redux';
import todoMiddleware from './todo_middleware';

const MasterMiddleware = applyMiddleware(
  todoMiddleware
);

export default MasterMiddleware;
