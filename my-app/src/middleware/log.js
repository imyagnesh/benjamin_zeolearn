/* eslint-disable no-unused-vars */

const log = ({ dispatch, getState }) => next => action => {
  console.log(`Action: ${action.type}`, action);

  if (action.type === 'ADD_ITEM_TO_CART_SUCCESS') {
    console.log('I have added item in cart....');
    next(action);
  }

  if (action.type === 'LOAD_ITEMS_SUCCESS') {
    next({ ...action, payload: [...action.payload, { id: 3, name: 'laptop', price: 100 }] });
  } else {
    next(action);
  }
};

export default log;
