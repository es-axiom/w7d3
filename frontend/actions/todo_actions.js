export const ACTION_TYPES = {REQUEST_TODOS: "REQUEST_TODOS", RECEIVE_TODOS: "RECEIVE_TODOS"};

export const requestTodos = () => ({
  type: ACTION_TYPES.REQUEST_TODOS
});

export const receiveTodos = (todos) => ({
  type: ACTION_TYPES.RECEIVE_TODOS,
  todos
});
