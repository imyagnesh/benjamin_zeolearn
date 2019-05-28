import React from 'react';
import PropTypes from 'prop-types';

const todoForm = ({ value, onChange, addTodo }) => {
  return (
    <div>
      <input type="text" placeholder="Write your todo here" value={value} onChange={onChange} />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

todoForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

todoForm.defaultProps = {};

export default todoForm;
