import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import Cart from '../../src/components/cart';
import 'jsdom-global/register';

describe('Cart Component testing', function() {
  let items;
  beforeEach(() => {
    items = [
      {
        item: {
          id: 1,
          description: 'lorem',
          imageUrl: 'image.png',
          price: '3170.64',
          title: 'Porsche'
        },
        qty: 1
      },
      {
        item: {
          id: 2,
          description: 'lorem',
          imageUrl: 'image.png',
          price: '3170.64',
          title: 'Ferrari'
        },
        qty: 1
      },
      {
        item: {
          id: 3,
          description: 'lorem',
          imageUrl: 'image.png',
          price: '317.64',
          title: 'Audi'
        },
        qty: 1
      }
    ];
  });

  afterEach(() => {
    // Cart.prototype.onClearCart.restore
  });

  const setup = newContext => {
    const updateCart = sinon.spy();
    const getCart = sinon.spy();
    const context = {
      total: 0,
      subtotal: 0,
      items: [],
      getCart,
      updateCart,
      ...newContext
    };
    // const context = { name: 'foo' };
    const wrapper = shallow(<Cart />, { context });
    return { wrapper, context };
  };

  it('Shows No items in your cart when cart is empty', () => {
    const { wrapper } = setup();
    expect(
      wrapper
        .find('CardBody')
        .first()
        .dive()
    ).to.include.text('No items in your cart!');
  });

  it('shows items in the cart', () => {
    const { wrapper } = setup({ items });
    expect(wrapper.find('CartProductList')).to.be.present();
  });

  // it('should clean cart with button', () => {
  //   const spy = sinon.spy(Cart.prototype, 'onClearCart');
  //   const { wrapper } = setup({ items });
  //   const deleteButton = wrapper.find('#clear-cart');
  //   // sinon.replace(Cart, 'onClearCart', mock);
  //   deleteButton.simulate('click');
  //   wrapper.setContext()
  //   expect(spy.calledOnce).to.be.true;
  //   // expect(
  //   //   wrapper
  //   //     .find('CardBody')
  //   //     .first()
  //   //     .dive()
  //   // ).to.include.text('No items in your cart!');
  // });

  chai.use(chaiEnzyme());
});
