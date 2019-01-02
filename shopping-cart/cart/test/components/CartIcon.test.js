import React from 'react'
import { configure, shallow, render, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import CartIcon from '../../src/components/common/cartIcon'
import { Badge } from 'reactstrap'

describe('Cart Icon Component testing', function() {
  it('CartIcon renders without crashing', () => {
    shallow(<CartIcon />)
  })

  it('should show badge', () => {
    const cart = {
      items: [{}, {}]
    }
    const wrapper = shallow(<CartIcon cart={cart} />)
    const badge = wrapper.find(Badge).dive()
    expect(badge).to.have.text(cart.items.length)
  })

  it('should update badge', () => {
    const cart = {
      items: [{}]
    }
    const wrapper = shallow(<CartIcon cart={cart} />)
    let badge = wrapper.find(Badge).dive()
    expect(badge).to.have.text(cart.items.length)
    cart.items.push({})
    wrapper.setProps(cart)
    badge = wrapper.find(Badge).dive()
    expect(badge).to.have.text(cart.items.length)
  })

  chai.use(chaiEnzyme())
})
