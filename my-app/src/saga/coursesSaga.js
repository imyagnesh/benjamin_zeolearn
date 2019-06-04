import { all, takeLatest, call, put } from 'redux-saga/effects';
import { API } from '../utils';

function* loadCourses() {
  try {
    const courses = yield call(API, { uri: 'http://localhost:3004/courses' });
    yield put({ type: 'LOAD_COURSES_SUCCESS', payload: courses });
  } catch (error) {
    yield put({ type: 'LOAD_COURSES_FAIL', payload: error });
  }
}

function* loadCoursesRequest() {
  yield takeLatest('LOAD_COURSES_REQUEST', loadCourses);
}

export default function* init() {
  yield all([loadCoursesRequest()]);
}
