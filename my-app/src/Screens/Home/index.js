import { connect } from 'react-redux';
import home from './home';
import * as types from '../../constants/actionTypes';

function mapStateToProps(state) {
  return {
    locale: state.locale,
    courses: state.courses,
    authors: state.authors,
    loading:
      !!state.loading[`${types.LOAD}_${types.COURSES}`] ||
      !!state.loading[`${types.LOAD}_${types.AUTHORS}`] ||
      !!state.loading[`${types.DELETE}_${types.COURSES}`] ||
      !!state.loading[`${types.SAVE}_${types.COURSES}`] ||
      !!state.loading[`${types.EDIT}_${types.COURSES}`],
    error:
      state.error[`${types.LOAD}_${types.COURSES}`] ||
      state.error[`${types.LOAD}_${types.AUTHORS}`] ||
      state.error[`${types.DELETE}_${types.COURSES}`] ||
      state.error[`${types.SAVE}_${types.COURSES}`] ||
      state.error[`${types.EDIT}_${types.COURSES}`],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCourseRequest: payload =>
      dispatch({ type: `${types.DELETE}_${types.COURSES}_${types.REQUEST}`, payload }),
    loadDataRequest: () => dispatch({ type: 'LOAD_DATA_REQUEST' }),
    addCoursesRequest: (payload, actions) =>
      dispatch({ type: `${types.SAVE}_${types.COURSES}_${types.REQUEST}`, payload, actions }),
    editCoursesRequest: (payload, actions) =>
      dispatch({ type: `${types.EDIT}_${types.COURSES}_${types.REQUEST}`, payload, actions }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
