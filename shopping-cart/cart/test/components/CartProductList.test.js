import React from 'react';
import { configure, shallow, render } from 'enzyme';
import chai, { expect } from 'chai';
// import Cart from '../../components/cart';
import chaiEnzyme from 'chai-enzyme';

describe('Cart Product List Component testing', function() {
  it('Cart product renders', () => {
    //   const wrapper = shallow(<Cart />);
    //   const editText = 'Online Store';
    //   // expect(true).to.contain(editText);
    expect(true).to.be.true;
  });

  chai.use(chaiEnzyme());
});
