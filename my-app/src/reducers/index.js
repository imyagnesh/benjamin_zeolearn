import { combineReducers } from 'redux';
import locale from './localeReducer';
import courses from './coursesReducer';
import authors from './authorsReducer';

export default combineReducers({
  locale,
  courses,
  authors,
});
