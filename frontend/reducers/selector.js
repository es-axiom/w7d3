import React from 'react';

const TodosAsArray = (state) => {
  const keys = Object.keys(state.todos);
  return keys.map ( key => {
    return state.todos[key];
  });
};

window.TodosAsArray = TodosAsArray;

export default TodosAsArray;
