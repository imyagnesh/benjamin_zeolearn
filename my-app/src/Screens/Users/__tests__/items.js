import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Items from '../items';

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    items: [
      {
        id: 1,
        name: 'mobile',
        price: 10,
      },
    ],
    cart: [],
    loadItems: jest.fn(),
    loadCart: jest.fn(),
    addToCart: jest.fn(),
    updateToCart: jest.fn(),
    deleteFromCart: jest.fn(),
    loading: false,
    error: '',
  };

  const Wrapper = shallow(<Items {...props} />);

  return {
    props,
    Wrapper,
  };
}

describe('snapshot', () => {
  it('snapshot of items', () => {
    const { Wrapper } = setup();
    expect(Wrapper).toMatchSnapshot();
  });
});

describe('test items component', () => {
  it('check h1 exist', () => {
    const { Wrapper } = setup();
    expect(Wrapper.find('h1').exists()).toBe(true);
    expect(Wrapper.find('h1').text()).toEqual('Items');
  });

  it('check dialog exist', () => {
    const { Wrapper } = setup();
    const dialog = Wrapper.find('dialog');
    expect(dialog.exists()).toBe(true);
    expect(Wrapper.state('open')).toBe(false);
  });

  it('add item in cart', () => {
    const { Wrapper } = setup();
    Wrapper.setProps({
      cart: [
        {
          id: 1,
          name: 'mobile',
          price: 10,
        },
      ],
    });
    const viewButton = Wrapper.find('button#viewButton');
    expect(viewButton.length).toEqual(1);
    viewButton.simulate('click');
    expect(Wrapper.state('open')).toBe(true);
    const dialog = Wrapper.find('dialog');
    expect(dialog.prop('open')).toEqual(true);
  });

  it('check add to card button click is working or not', () => {
    const { Wrapper, props } = setup();
    const btnAddToCart = Wrapper.find('button[name="btnAddToCart0"]');
    btnAddToCart.simulate('click');
    btnAddToCart.simulate('click');
    expect(props.addToCart.mock.calls.length).toBe(2);
  });

  it('check loading functionality working', () => {
    const { Wrapper } = setup();
    Wrapper.setProps({ loading: true });
    expect(Wrapper.find('h1').text()).toEqual('Loading...');
  });

  it('check updateToCart is working or not', () => {
    const { Wrapper, props } = setup();
    Wrapper.setProps({
      cart: [
        {
          id: 1,
          name: 'books',
          price: 10,
          quantity: 21,
        },
      ],
      items: [
        {
          id: 1,
          name: 'mobile',
          price: 10,
        },
      ],
    });
    const btnAddToCart = Wrapper.find('button[name="btnAddToCart0"]');
    btnAddToCart.simulate('click');
    btnAddToCart.simulate('click');
    expect(props.updateToCart.mock.calls.length).toBe(2);
  });
  it('check delete item from card working or not', () => {
    const { Wrapper, props } = setup();
    Wrapper.setProps({
      cart: [
        {
          id: 1,
          name: 'mobile',
          price: 10,
        },
      ],
    });
    const viewButton = Wrapper.find('button#viewButton');
    expect(viewButton.length).toEqual(1);
    viewButton.simulate('click');
    expect(Wrapper.state('open')).toBe(true);
    const btnDeleteFromCart = Wrapper.find('button[name="btnDeleteFromCart"]');
    btnDeleteFromCart.simulate('click');
    expect(props.deleteFromCart.mock.calls.length).toBe(1);
  });
  it('check error displays', () => {
    const { Wrapper } = setup();
    Wrapper.setProps({ error: 'Error' });
    const error = Wrapper.find('span.error');
    expect(error.text()).toEqual('Error');
  });
});
