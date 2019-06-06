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
});
