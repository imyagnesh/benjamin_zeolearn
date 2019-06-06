const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_CART_SUCCESS':
      return payload;

    case 'ADD_ITEM_TO_CART_SUCCESS':
      return [...state, payload];

    case 'UPDATE_ITEM_TO_CART_SUCCESS': {
      const index = state.findIndex(x => x.id === payload.id);
      const updatedState = [...state.slice(0, index), payload, ...state.slice(index + 1)];
      return updatedState;
    }

    default:
      return state;
  }
};
