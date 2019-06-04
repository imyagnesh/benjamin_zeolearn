import { connect } from 'react-redux';
import about from './about';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addCoursesRequest: (payload, actions) =>
      dispatch({ type: 'ADD_COURSE_REQUEST', payload, actions }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(about);
