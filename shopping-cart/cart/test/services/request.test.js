import { expect } from 'chai';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
// This sets the mock adapter on the default instance
describe('request Service', () => {
  const mock = new MockAdapter(axios);

  it('should ', () => {
    mock.onGet('/').reply(200, {
      users: [{ id: 1, name: 'John Smith' }]
    });
    expect(true).to.be.true;
  });
});
