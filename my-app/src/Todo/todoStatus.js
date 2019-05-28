import React from 'react';
import PropTypes from 'prop-types';

const todoStatus = ({ onStatusChange }) => {
  return (
    <>
      <button style={{ flex: 1, padding: 10 }} type="button" onClick={() => onStatusChange('all')}>
        All
      </button>
      <button
        style={{ flex: 1, padding: 10 }}
        type="button"
        onClick={() => onStatusChange('pending')}
      >
        Pending
      </button>
      <button
        style={{ flex: 1, padding: 10 }}
        type="button"
        onClick={() => onStatusChange('completed')}
      >
        Completed
      </button>
    </>
  );
};

todoStatus.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
};

export default todoStatus;
