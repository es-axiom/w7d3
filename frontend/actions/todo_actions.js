export const ACTION_TYPES = {
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS"
};

export const requestTodos = () => ({
  type: ACTION_TYPES.REQUEST_TODOS
});

export const receiveTodos = (todos) => ({
  type: ACTION_TYPES.RECEIVE_TODOS,
  todos
});

export const createTodo = (todo) => ({
  type: ACTION_TYPES.CREATE_TODO,
  todo
});

export const receiveTodo = (todo) => ({
  type: ACTION_TYPES.RECEIVE_TODO,
  todo
});
