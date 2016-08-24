import { combineReducers } from 'redux';
import TodosReducer from './todos_reducer';
import React from 'react';

const reducer = combineReducers({
  todos: TodosReducer
});

export default reducer;
