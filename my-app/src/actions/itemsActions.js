import { API } from '../utils';

export const data = '';

export const loadItems = () => {
  return async dispatch => {
    dispatch({ type: 'LOAD_ITEMS_REQUEST' });
    try {
      const items = await API({ uri: 'http://localhost:3004/items' });
      dispatch({ type: 'LOAD_ITEMS_SUCCESS', payload: items });
    } catch (error) {
      dispatch({ type: 'LOAD_ITEMS_ERROR', payload: error });
    }
  };
};
