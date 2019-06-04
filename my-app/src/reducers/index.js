import { combineReducers } from 'redux';
import locale from './localeReducer';
import courses from './coursesReducer';
import authors from './authorsReducer';
import error from './errorReducer';
import loading from './loadingReducer';

export default combineReducers({
  locale,
  courses,
  authors,
  error,
  loading,
});
