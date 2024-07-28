const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('...', function () {
    const utilsStub = sinon.stub(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    utilsStub.returns(10);

    utilsStub.withArgs('SUM', 100, 20).onFirstCall().returns(10);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(utilsStub, 'SUM', 100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 10');

    utilsStub.restore();
    consoleSpy.restore();
  });
});
