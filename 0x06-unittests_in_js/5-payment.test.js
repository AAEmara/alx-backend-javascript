const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToAPI = require('./5-payment.js');

describe('sendPaymentRequestToAPI', function () {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    sinon.restore();
  });

  it('The result for a=100 and b=10 is 120.', function () {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledOnceWithExactly(console.log, 'The total is: 120');
  });

  it('The result for a=10 and b=10 is 20.', function () {
    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledOnceWithExactly(console.log, 'The total is: 20');
  });
});
