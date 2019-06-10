import { all } from 'redux-saga/effects';
import coursesSaga from './coursesSaga';
import authorsSaga from './authorsSaga';
import loadDataSaga from './loadDataSaga';
// import itemsSaga from '../Screens/Users/itemsSaga';
import cartSaga from '../Screens/Users/cartSaga';

export default function* rootSaga() {
  yield all([coursesSaga(), authorsSaga(), loadDataSaga(), cartSaga()]);
}
