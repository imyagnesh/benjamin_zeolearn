import { combineReducers } from 'redux';
import locale from './localeReducer';
import courses from './coursesReducer';

export default combineReducers({
  locale,
  courses,
});
