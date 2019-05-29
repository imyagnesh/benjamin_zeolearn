import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Form from '../../components/form';

const courseSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  watchHref: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  authorId: Yup.string().required('Required'),
  length: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
});

export default class index extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const {
      location: { state },
    } = props;
    let options = [];
    options =
      state.authors &&
      state.authors.map(author => ({
        value: author.id,
        text: `${author.firstName} ${author.lastName}`,
      }));
    this.state = {
      options,
    };
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  onSubmit = values => {
    console.log(values);
  };

  render() {
    const { options } = this.state;

    const form = [
      {
        name: 'title',
        label: 'Title',
        type: 'text',
      },
      {
        name: 'watchHref',
        label: 'Link',
        type: 'text',
      },
      {
        name: 'length',
        label: 'length',
        type: 'text',
      },
      {
        name: 'category',
        label: 'Category',
        type: 'text',
      },
      {
        name: 'authorId',
        label: 'Author',
        type: 'select',
        placeholder: 'Select Author',
        options,
      },
    ];
    return (
      <div>
        <h1>About Page</h1>
        <button type="button" onClick={this.goBack}>
          Go Back
        </button>
        <Form
          initialValues={{
            title: '',
            watchHref: '',
            length: '',
            category: '',
            authorId: '',
          }}
          validationSchema={courseSchema}
          onSubmit={this.onSubmit}
          formData={form}
        />
      </div>
    );
  }
}
