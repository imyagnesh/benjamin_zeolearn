import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import InputText from './inputText';
import Select from './select';

const form = ({ formData, ...props }) => {
  return (
    <Formik {...props}>
      {({ handleSubmit, isSubmitting, errors }) => (
        <form onSubmit={handleSubmit}>
          {errors && errors.general && <span style={{ color: 'red' }}>{errors.general}</span>}
          {formData.map(item => (
            <Field
              key={item.name}
              component={item.type === 'text' ? InputText : Select}
              {...item}
            />
          ))}

          <button type="submit" disabled={isSubmitting}>
            Add Todo
          </button>
        </form>
      )}
    </Formik>
  );
};

form.propTypes = {
  formData: PropTypes.array.isRequired,
};

export default form;
