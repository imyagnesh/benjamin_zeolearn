import React from 'react';
import PropTypes from 'prop-types';

const todoListItem = ({ todo, onDelete, onComplete, onUpdate }) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 10,
        padding: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
      }}
    >
      <input
        style={{ marginRight: 10 }}
        type="checkbox"
        name="todoStatus"
        onClick={() => onComplete(todo)}
      />
      <span style={{ flex: 1, textDecoration: todo.isDone ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button style={{ marginRight: 10 }} type="button" onClick={() => onUpdate(todo)}>
        Update
      </button>
      <button type="button" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
};

todoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default todoListItem;
