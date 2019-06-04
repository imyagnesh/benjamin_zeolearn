import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { API } from '../utils';
// import history from '../history';

function* loadData() {
  try {
    yield put({ type: `${types.LOAD}_${types.COURSES}_${types.REQUEST}` });
    yield put({ type: `${types.LOAD}_${types.AUTHORS}_${types.REQUEST}` });

    const courses = call(API, { uri: 'http://localhost:3004/courses' });
    const authors = call(API, { uri: 'http://localhost:3004/authors' });
    const res = yield all([courses, authors]);

    yield put({ type: `${types.LOAD}_${types.COURSES}_${types.SUCCESS}`, payload: res[0] });
    yield put({ type: `${types.LOAD}_${types.AUTHORS}_${types.SUCCESS}`, payload: res[1] });
  } catch (error) {
    yield put({ type: `${types.LOAD}_${types.COURSES}_${types.ERROR}`, payload: error });
    yield put({ type: `${types.LOAD}_${types.AUTHORS}_${types.ERROR}`, payload: error });
  }
}

function* addCourse({ payload, actions }) {
  try {
    yield put({ type: 'LOADING' });
    const uri = 'http://localhost:3004/courses';

    const course = yield call(API, {
      uri,
      method: 'POST',
      header: {},
      body: payload,
    });

    yield put({ type: `${types.SAVE}_${types.COURSES}_${types.SUCCESS}`, payload: course });
    actions.setSubmitting(false);
    actions.resetForm();
  } catch (error) {
    yield put({ type: `${types.SAVE}_${types.COURSES}_${types.ERROR}`, payload: error });
    // actions.setErrors({ general: 'Oops Something went wrong!!' });
    // actions.setSubmitting(false);
  }
}

function* editCourse({ payload }) {
  try {
    const uri = `http://localhost:3004/courses/${payload.id}`;

    const course = yield call(API, {
      uri,
      method: 'PUT',
      header: {},
      body: payload,
    });
    yield put({ type: `${types.EDIT}_${types.COURSES}_${types.SUCCESS}`, payload: course });
    // actions.setSubmitting(false);
    // actions.resetForm();
  } catch (error) {
    yield put({ type: `${types.EDIT}_${types.COURSES}_${types.ERROR}`, payload: error });
  }
}

function* deleteCourse({ payload }) {
  try {
    yield call(API, { uri: `http://localhost:3004/courses/${payload.id}`, method: 'DELETE' });
    yield put({ type: `${types.DELETE}_${types.COURSES}_${types.SUCCESS}`, payload });
  } catch (error) {
    yield put({ type: `${types.DELETE}_${types.COURSES}_${types.ERROR}`, payload: error });
  }
}

function* loadDataRequest() {
  yield takeLatest('LOAD_DATA_REQUEST', loadData);
}

function* addCourseRequest() {
  yield takeLatest(`${types.SAVE}_${types.COURSES}_${types.REQUEST}`, addCourse);
}

function* editCourseRequest() {
  yield takeLatest(`${types.EDIT}_${types.COURSES}_${types.REQUEST}`, editCourse);
}

function* deleteCourseRequest() {
  yield takeLatest(`${types.DELETE}_${types.COURSES}_${types.REQUEST}`, deleteCourse);
}

export default function* init() {
  yield all([loadDataRequest(), addCourseRequest(), editCourseRequest(), deleteCourseRequest()]);
}
