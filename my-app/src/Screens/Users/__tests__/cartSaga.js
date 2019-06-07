import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { loadCart } from '../cartSaga';
import { API } from '../../../utils';

describe('test cart saga', () => {
  it('test success', () => {
    const generator = cloneableGenerator(loadCart)();
    expect(generator.next().value).toEqual(call(API, { uri: 'http://localhost:3004/cart' }));
    expect(generator.next().value).toEqual(put({ type: 'LOAD_CART_SUCCESS', payload: undefined }));
  });

  it('test failed', () => {
    const generator = cloneableGenerator(loadCart)();
    // const error = {};
    expect(generator.next().value).toEqual(call(API, { uri: 'http://localhost:3004/cart' }));

    // expect(generator.next(generator.throw(error).value).value).toEqual(
    //   put({ type: 'LOAD_CART_ERROR', payload: error }),
    // );
  });
});
