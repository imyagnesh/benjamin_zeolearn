import reducer from '../cartReducer';

describe('test items reducer', () => {
  it('test default state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('test LOAD_CART_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: 'LOAD_CART_SUCCESS',
        payload: [
          {
            id: 2,
            name: 'books',
            price: 10,
            quantity: 21,
          },
        ],
      }),
    ).toEqual([
      {
        id: 2,
        name: 'books',
        price: 10,
        quantity: 21,
      },
    ]);
  });

  it('test ADD_ITEM_TO_CART_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: 'ADD_ITEM_TO_CART_SUCCESS',
        payload: {
          id: 2,
          name: 'books',
          price: 10,
          quantity: 21,
        },
      }),
    ).toEqual([
      {
        id: 2,
        name: 'books',
        price: 10,
        quantity: 21,
      },
    ]);

    expect(
      reducer(
        [
          {
            id: 1,
            name: 'mobile',
            price: 10,
            quantity: 21,
          },
        ],
        {
          type: 'ADD_ITEM_TO_CART_SUCCESS',
          payload: {
            id: 2,
            name: 'books',
            price: 10,
            quantity: 21,
          },
        },
      ),
    ).toEqual([
      {
        id: 1,
        name: 'mobile',
        price: 10,
        quantity: 21,
      },
      {
        id: 2,
        name: 'books',
        price: 10,
        quantity: 21,
      },
    ]);
  });

  it('test UPDATE_ITEM_TO_CART_SUCCESS', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'mobile',
            price: 10,
            quantity: 21,
          },
        ],
        {
          type: 'UPDATE_ITEM_TO_CART_SUCCESS',
          payload: {
            id: 1,
            name: 'mobile',
            price: 10,
            quantity: 25,
          },
        },
      ),
    ).toEqual([
      {
        id: 1,
        name: 'mobile',
        price: 10,
        quantity: 25,
      },
    ]);
  });
});
