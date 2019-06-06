import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class itemsPage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired,
    loadItems: PropTypes.func.isRequired,
    loadCart: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    updateToCart: PropTypes.func.isRequired,
    deleteFromCart: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: '',
  };

  state = {
    open: false,
  };

  constructor(props) {
    super(props);
    props.loadItems();
    props.loadCart();
  }

  render() {
    const { items, loading, error, cart, addToCart, updateToCart, deleteFromCart } = this.props;
    const { open } = this.state;

    console.log(cart.length);
    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>Items</h1>
        {!!error && <span style={{ color: 'red' }}>{error}</span>}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          const isItemExist = cart.find(x => x.id === item.id);
                          if (isItemExist) {
                            updateToCart({ ...item, quantity: isItemExist.quantity + 1 });
                          }
                          addToCart({
                            ...item,
                            quantity: 1,
                          });
                        }}
                      >
                        Add To cart
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {cart.length > 0 && (
          <div>
            <span>{`${cart.length} item(S) in your cart`}</span>
            <button type="button" onClick={() => this.setState({ open: true })}>
              View
            </button>
          </div>
        )}

        <dialog open={open}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            deleteFromCart(item);
                          }}
                        >
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </dialog>
      </div>
    );
  }
}
