import React from 'react';
import PropTypes from 'prop-types';

const todoForm = ({ text }) => {
  return (
    <div>
      <h1>Todo Form</h1>
      <h2>{text}</h2>
    </div>
  );
};

todoForm.propTypes = {
  text: PropTypes.string,
};

todoForm.defaultProps = {
  text: '',
};

export default todoForm;
