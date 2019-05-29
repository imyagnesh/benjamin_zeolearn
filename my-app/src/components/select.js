/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const select = ({
  label,
  placeholder,
  options,
  field, // { name, value, onChange, onBlur }
  ...props
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
      <label>{label}</label>
      <select {...field} {...props}>
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <ErrorMessage render={msg => <span style={{ color: 'red' }}>{msg}</span>} name={field.name} />
    </div>
  );
};

select.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default select;
