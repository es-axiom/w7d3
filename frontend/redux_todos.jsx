import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import TodosAsArray from './reducers/selector';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  window.store = configureStore();
  ReactDOM.render(<h1>It Worked</h1>, content);
});
