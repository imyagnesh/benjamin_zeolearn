/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const inputText = ({
  label,
  field, // { name, value, onChange, onBlur }
  ...props
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
      <label>{label}</label>
      <input type="text" {...field} {...props} />
      <ErrorMessage render={msg => <span style={{ color: 'red' }}>{msg}</span>} name={field.name} />
    </div>
  );
};

inputText.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default inputText;
