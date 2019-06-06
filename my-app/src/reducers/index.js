import { combineReducers } from 'redux';
import locale from './localeReducer';
import courses from './coursesReducer';
import authors from './authorsReducer';
import error from './errorReducer';
import loading from './loadingReducer';
import items from '../Screens/Users/itemsReducer';
import cart from '../Screens/Users/cartReducer';

export default combineReducers({
  locale,
  courses,
  authors,
  error,
  loading,
  items,
  cart,
});
