import { all, takeLatest, call, put } from 'redux-saga/effects';
import { API } from '../../utils';

function* loadItems() {
  try {
    const items = yield call(API, { uri: 'http://localhost:3004/items' });
    yield put({ type: 'LOAD_ITEMS_SUCCESS', payload: items });
  } catch (error) {
    yield put({ type: 'LOAD_ITEMS_ERROR', payload: error });
  }
}

function* loadItemsRequest() {
  yield takeLatest('LOAD_ITEMS_REQUEST', loadItems);
}

export default function* init() {
  yield all([loadItemsRequest()]);
}
