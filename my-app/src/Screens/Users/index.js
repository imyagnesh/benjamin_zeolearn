import { connect } from 'react-redux';
import items from './items';
import { loadItems } from '../../actions/itemsActions';

const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart,
  loading: !!state.loading.LOAD_ITEMS || !!state.loading.LOAD_CART,
  error: state.error.LOAD_ITEMS || state.error.LOAD_CART,
});

const mapDispatchToProps = dispatch => ({
  loadItems: () => loadItems()(dispatch),
  loadCart: () => dispatch({ type: 'LOAD_CART_REQUEST' }),
  addToCart: item => dispatch({ type: 'ADD_ITEM_TO_CART_REQUEST', payload: item }),
  updateToCart: item => dispatch({ type: 'UPDATE_ITEM_TO_CART_REQUEST', payload: item }),
  deleteFromCart: item => dispatch({ type: 'DELETE_ITEM_FROM_CART_REQUEST', payload: item }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(items);
