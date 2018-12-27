import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import Cart from '../../src/components/cart';
import 'jsdom-global/register';

describe('Cart Component testing', function() {
  const setup = () => {
    const updateCart = sinon.spy();
    const getCart = sinon.spy();
    const context = {
      total: 0,
      subtotal: 0,
      items: [],
      getCart,
      updateCart
    };
    // const context = { name: 'foo' };
    const wrapper = shallow(<Cart />, { context });
    return { wrapper, context };
  };

  it('Cart renders', () => {
    const { wrapper, context } = setup();
    expect(
      wrapper
        .find('CardBody')
        .first()
        .dive()
    ).to.include.text('No items in your cart!');
  });

  chai.use(chaiEnzyme());
});
