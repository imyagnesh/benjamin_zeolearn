import { all } from 'redux-saga/effects';
import coursesSaga from './coursesSaga';
import authorsSaga from './authorsSaga';
import loadDataSaga from './loadDataSaga';

export default function* rootSaga() {
  yield all([coursesSaga(), authorsSaga(), loadDataSaga()]);
}
