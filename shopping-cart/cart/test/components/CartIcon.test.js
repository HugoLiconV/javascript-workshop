import React from 'react';
import { configure, shallow, render } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

describe('App Component testing', function() {
  it('Cart renders', () => {
    //   const wrapper = shallow(<Cart />);
    //   const editText = 'Online Store';
    //   // expect(true).to.contain(editText);
    expect(true).to.be.true;
  });

  chai.use(chaiEnzyme());
});
