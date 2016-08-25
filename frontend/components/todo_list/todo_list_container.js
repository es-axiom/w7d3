import { connect } from 'react-redux';
import TodoList from './todo_list';
import TodosAsArray from '../../reducers/selector';
import { requestTodos } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: TodosAsArray(state)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
