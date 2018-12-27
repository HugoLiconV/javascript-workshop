import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import CartProduct from '../../src/components/common/cartProduct';

describe('Cart Product Component ', function() {
  const setup = () => {
    const onDelete = sinon.spy();
    const onChangeQty = sinon.spy();
    const item = {
      item: {
        id: 1,
        description: 'lorem',
        imageUrl: 'dumy.jpg',
        price: '3170.64',
        title: 'Porche'
      },
      qty: 2
    };
    const props = { onDelete, onChangeQty, item };
    const wrapper = shallow(
      <CartProduct item={item} onDelete={onDelete} onChangeQty={onChangeQty} />
    );
    return { props, wrapper };
  };

  it('Cart product renders item info', () => {
    const { props, wrapper } = setup();
    const titleComp = wrapper.find('.title').dive();
    const itemDescription = wrapper.find('#description');

    const { title, description } = props.item.item;
    expect(titleComp).to.include.text(title);
    expect(itemDescription).to.include.text(description);
  });

  it('should remove product', () => {
    // How to check if this affected other components?
    const { props, wrapper } = setup();
    const removeBtn = wrapper.find('.removeBtn').dive();
    removeBtn.simulate('click');
    expect(props.onDelete.called).to.be.true;
  });

  it('should call onChange function on update', () => {
    const { props, wrapper } = setup();
    const input = wrapper.find('#qtyInput').dive();
    expect(input).to.have.props({ value: props.item.qty });
    input.simulate('change', { target: { value: 3 } });
    input.setProps({ value: props.item.qty + 1 });
    expect(props.onChangeQty.called).to.be.true;
    expect(input).to.have.props({ value: props.item.qty + 1 });
  });

  it('should render correct qty', () => {
    const { props, wrapper } = setup();
    const input = wrapper.find('#qtyInput');
    expect(input).to.have.props({ value: props.item.qty });
  });

  chai.use(chaiEnzyme());
});
