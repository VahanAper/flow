import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {
      todos.map(
        (todo, index) => (
          <Todo
            key={index}
            {...todo}
            onClick={() => onTodoClick(index)}
          />
        ),
      )
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

const TodoListHOC = connect(
  state => ({ todos: state }),
  dispatch => ({
    onTodoClick: (index) => {
      dispatch({ type: 'TOGGLE_TODO', index });
    },
  }),
)(TodoList);

export default TodoListHOC;
