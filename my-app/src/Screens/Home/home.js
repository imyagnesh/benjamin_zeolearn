import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseList from './courseList';
import { LocaleConsumer } from '../../context/localeContext';
import About from '../About/about';

export default class index extends Component {
  static propTypes = {
    // history: PropTypes.object.isRequired,
    loadDataRequest: PropTypes.func.isRequired,
    deleteCourseRequest: PropTypes.func.isRequired,
    courses: PropTypes.object.isRequired,
    authors: PropTypes.object.isRequired,
    addCoursesRequest: PropTypes.func.isRequired,
  };

  state = {
    open: false,
    formData: null,
  };

  constructor(props) {
    super(props);
    props.loadDataRequest();
  }

  componentWillReceiveProps(nextProps) {
    const { courses } = this.props;
    if (nextProps.courses.loading !== courses.loading && nextProps.courses.loading === false) {
      this.setState({ open: false });
    }
  }

  renderAuthor = id => {
    const {
      authors: { data },
    } = this.props;
    const author = data.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const { courses } = this.props;
  //   if (prevProps.courses.loading !== courses.loading && courses.loading === false) {
  //     this.setState({ open: false });
  //   }
  // }

  addTodo = () => {
    this.setState({
      open: true,
      formData: {
        title: '',
        watchHref: '',
        length: '',
        category: '',
        authorId: '',
      },
    });
    // const {
    //   authors: { data },
    //   history,
    // } = this.props;
    // history.push({
    //   pathname: '/about',
    //   state: {
    //     authors: data,
    //     course: {
    //       title: '',
    //       watchHref: '',
    //       length: '',
    //       category: '',
    //       authorId: '',
    //     },
    //   },
    // });
  };

  editRecord = course => {
    this.setState({ open: true, formData: course });

    // const {
    //   history,
    //   authors: { data },
    // } = this.props;
    // history.push({
    //   pathname: '/about',
    //   state: {
    //     authors: data,
    //     course,
    //   },
    // });
  };

  render() {
    const {
      courses: { loading, data, error },
      authors: { data: authorData },
      deleteCourseRequest,
      addCoursesRequest,
    } = this.props;
    const { open, formData } = this.state;

    let options = [];
    options =
      authorData &&
      authorData.map(author => ({
        value: author.id,
        text: `${author.firstName} ${author.lastName}`,
      }));

    if (loading) {
      return <h1>Loading...</h1>;
    }

    // if (error) {
    //   return <h1>{error}</h1>;
    // }

    return (
      <div>
        <h1>Home Page</h1>
        {/* <button type="button" onClick={() => changeLocale('spanish')}>
          Change Locale
        </button> */}
        {error && <h1 style={{ color: 'red' }}>{error}</h1>}
        <LocaleConsumer>
          {value => (
            <button type="button" onClick={this.addTodo}>
              {`Add Todo ${value.locale}`}
            </button>
          )}
        </LocaleConsumer>

        <CourseList
          courses={data}
          renderAuthor={this.renderAuthor}
          editRecord={this.editRecord}
          deleteRecord={deleteCourseRequest}
        />
        <dialog open={open}>
          {formData && (
            <About
              addCoursesRequest={addCoursesRequest}
              initialValues={formData}
              options={options}
            />
          )}
        </dialog>
      </div>
    );
  }
}
