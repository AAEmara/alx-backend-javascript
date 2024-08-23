const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');


describe('AsyncTest', function() {
  it('should return `Successful response from the API` if `true` is passed in.',
  function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      expect(response).to.deep.equal({data: 'Successful response from the API'});
      done();
    }).catch(done);
  });

  it('should return `undefined` if `true` is passed in.', function(done) {
    expect(getPaymentTokenFromAPI(false)).to.equal(undefined);
    done();
  });
});
