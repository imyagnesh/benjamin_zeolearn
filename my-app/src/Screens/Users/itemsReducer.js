// import * as types from '../../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `LOAD_ITEMS_SUCCESS`:
      return payload;

    default:
      return state;
  }
};
