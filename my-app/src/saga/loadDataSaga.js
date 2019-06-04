import { all, takeLatest, call, put } from 'redux-saga/effects';
import { API } from '../utils';
// import history from '../history';

function* loadData() {
  try {
    yield put({ type: 'LOADING' });
    const courses = call(API, { uri: 'http://localhost:3004/courses' });
    const authors = call(API, { uri: 'http://localhost:3004/authors' });
    const res = yield all([courses, authors]);

    yield put({ type: 'LOAD_COURSES_SUCCESS', payload: res[0] });
    yield put({ type: 'LOAD_AUTHORS_SUCCESS', payload: res[1] });
  } catch (error) {
    yield put({ type: 'ERROR', payload: error });
  }
}

function* addCourse({ payload, actions }) {
  try {
    yield put({ type: 'LOADING' });
    let uri = 'http://localhost:3004/courses';
    if (payload.id) {
      uri = `http://localhost:3004/courses/${payload.id}`;
    }
    const course = yield call(API, {
      uri,
      method: payload.id ? 'PUT' : 'POST',
      header: {},
      body: payload,
    });
    if (payload.id) {
      yield put({ type: 'EDIT_COURSE_SUCCESS', payload: course });
    } else {
      yield put({ type: 'ADD_COURSE_SUCCESS', payload: course });
    }
    // yield call(history.goBack);
    actions.setSubmitting(false);
    actions.resetForm();
  } catch (error) {
    console.warn(error);
    yield put({ type: 'ERROR', payload: error });
    // actions.setErrors({ general: 'Oops Something went wrong!!' });
    // actions.setSubmitting(false);
  }
}

function* deleteCourse({ payload }) {
  try {
    yield put({ type: 'LOADING' });
    yield call(API, { uri: `http://localhost:3004/courses/${payload.id}`, method: 'DELETE' });
    yield put({ type: 'DELETE_COURSES_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'ERROR', payload: error });
  }
}

function* loadDataRequest() {
  yield takeLatest('LOAD_DATA_REQUEST', loadData);
}

function* addCourseRequest() {
  yield takeLatest('ADD_COURSE_REQUEST', addCourse);
}

function* deleteCourseRequest() {
  yield takeLatest('DELETE_COURSE_REQUEST', deleteCourse);
}

export default function* init() {
  yield all([loadDataRequest(), addCourseRequest(), deleteCourseRequest()]);
}
