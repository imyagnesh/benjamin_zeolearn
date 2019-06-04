import { connect } from 'react-redux';
import home from './home';

function mapStateToProps(state) {
  return {
    locale: state.locale,
    courses: state.courses,
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: locale => dispatch({ type: 'CHANGE_LOCALE', payload: locale }),
    deleteCourseRequest: payload => dispatch({ type: 'DELETE_COURSE_REQUEST', payload }),
    loadDataRequest: () => dispatch({ type: 'LOAD_DATA_REQUEST' }),
    addCoursesRequest: (payload, actions) =>
      dispatch({ type: 'ADD_COURSE_REQUEST', payload, actions }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
