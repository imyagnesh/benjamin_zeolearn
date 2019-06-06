import { all, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { API } from '../../utils';

function* loadCart() {
  try {
    const cart = yield call(API, { uri: 'http://localhost:3004/cart' });
    yield put({ type: 'LOAD_CART_SUCCESS', payload: cart });
  } catch (error) {
    yield put({ type: 'LOAD_CART_ERROR', payload: error });
  }
}

function* addItemToCart({ payload }) {
  try {
    const cartItem = yield call(API, {
      uri: 'http://localhost:3004/cart',
      method: 'POST',
      header: {},
      body: payload,
    });
    yield put({ type: 'ADD_ITEM_TO_CART_SUCCESS', payload: cartItem });
  } catch (error) {
    yield put({ type: 'ADD_ITEM_TO_CART_ERROR', payload: error });
  }
}

function* updateItemToCart({ payload }) {
  try {
    const cartItem = yield call(API, {
      uri: `http://localhost:3004/cart/${payload.id}`,
      method: 'PUT',
      header: {},
      body: payload,
    });
    yield put({ type: 'UPDATE_ITEM_TO_CART_SUCCESS', payload: cartItem });
  } catch (error) {
    yield put({ type: 'UPDATE_ITEM_TO_CART_ERROR', payload: error });
  }
}

function* deleteItemFromCart({ payload }) {
  try {
    yield call(API, {
      uri: `http://localhost:3004/cart/${payload.id}`,
      method: 'DELETE',
    });
    yield put({ type: 'DELETE_ITEM_FROM_CART_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'DELETE_ITEM_FROM_CART_ERROR', payload: error });
  }
}

function* loadCartRequest() {
  yield takeLatest('LOAD_CART_REQUEST', loadCart);
}

function* addItemToCartRequest() {
  yield takeEvery('ADD_ITEM_TO_CART_REQUEST', addItemToCart);
}

function* updateItemToCartRequest() {
  yield takeEvery('UPDATE_ITEM_TO_CART_REQUEST', updateItemToCart);
}

function* deleteItemFromCartRequest() {
  yield takeEvery('DELETE_ITEM_FROM_CART_REQUEST', deleteItemFromCart);
}

export default function* init() {
  yield all([
    loadCartRequest(),
    addItemToCartRequest(),
    updateItemToCartRequest(),
    deleteItemFromCartRequest(),
  ]);
}
