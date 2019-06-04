import { all, takeLatest, call, put } from 'redux-saga/effects';
import { API } from '../utils';

function* loadAuthors() {
  try {
    const authors = yield call(API, { uri: 'http://localhost:3004/authors' });
    yield put({ type: 'LOAD_AUTHORS_SUCCESS', payload: authors });
  } catch (error) {
    yield put({ type: 'LOAD_AUTHORS_FAIL', payload: error });
  }
}

function* loadAuthorsRequest() {
  yield takeLatest('LOAD_AUTHORS_REQUEST', loadAuthors);
}

export default function* init() {
  yield all([loadAuthorsRequest()]);
}
