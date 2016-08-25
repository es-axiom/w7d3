import React from 'react';


class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const list = this.props.todos.map( item => (
      <li key={item.id}>{item.title} {item.body}</li>
    ));
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default TodoList;
