import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import TodosAsArray from './reducers/selector';
import { requestTodos } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  window.store = configureStore();
  window.requestTodos = requestTodos;
  ReactDOM.render(<h1>It Worked</h1>, content);
});
