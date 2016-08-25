import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import TodosAsArray from './reducers/selector';
import { requestTodos } from './actions/todo_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  window.store = configureStore();
  const store = configureStore();
  window.requestTodos = requestTodos;
  ReactDOM.render(<Root store={ store }/>, content);
});
