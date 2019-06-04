import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Form from '../../components/form';
// import { API } from '../../utils';

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

const about = ({ addCoursesRequest, initialValues, options }) => {
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
    <Form
      initialValues={initialValues}
      validationSchema={courseSchema}
      onSubmit={addCoursesRequest}
      buttonText={initialValues.id ? 'Edit Course' : 'Add Course'}
      formData={form}
    />
  );
};

about.propTypes = {
  addCoursesRequest: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

export default about;

// export default class index extends Component {
//   static propTypes = {
//     location: PropTypes.object.isRequired,
//     addCoursesRequest: PropTypes.func.isRequired,
//   };

//   // constructor(props) {
//   //   super(props);
//   //   const {
//   //     location: { state },
//   //   } = props;
//   //   let options = [];
//   //   options =
//   //     state.authors &&
//   //     state.authors.map(author => ({
//   //       value: author.id,
//   //       text: `${author.firstName} ${author.lastName}`,
//   //     }));
//   //   this.state = {
//   //     options,
//   //     initialValues: state.course,
//   //   };
//   // }

//   render() {
//     // const { options, initialValues } = this.state;
//     const { addCoursesRequest, initialValues, options } = this.props;

//     return (

//     );
//   }
// }
