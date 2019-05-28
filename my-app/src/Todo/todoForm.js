import React from 'react';
import PropTypes from 'prop-types';

const todoForm = ({ value, onChange, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Write your todo here"
        value={value}
        onChange={onChange}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

todoForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

todoForm.defaultProps = {};

export default todoForm;
