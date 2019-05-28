import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todoListItem';

const todoList = ({ todos, ...props }) => {
  return (
    <>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} {...props} />
      ))}
    </>
  );
};

todoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default todoList;
