import React, { PropTypes } from 'react';

const Todo = ({ text, completed, onClick }) => (
  <li onClick={onClick}>
    {text}
  </li>
);

Todo.propType = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
