const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('IntegrationTest', function() {
// Testing route '/'.
  it('should return `200` if the route is available', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return `Welcome to the payment system` if the route is available',
  function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return `text/html; charset=utf-8` if the route is available',
  function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.headers['content-type'])
        .to.equal('text/html; charset=utf-8');
      done();
    });
  });

// Testing route '/cart/:id'.
  it('should return `404` when id is not a number.',
  function(done) {
    request('http://localhost:7865/cart/me', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return `Payment methods for cart 100` when id is a 100.',
  function(done) {
    request('http://localhost:7865/cart/100', function(error, response, body) {
      expect(response.body).to.equal('Payment methods for cart 100');
      done();
    });
  });

  it('should return `text/html; charset=utf-8` the route is available.',
  function(done) {
    request('http://localhost:7865/cart/100', function(error, response, body) {
      expect(response.headers['content-type'])
        .to.equal('text/html; charset=utf-8');
      done();
    });
  });

});

describe('GET /available_payments', function() {
  it('should return `{"payment_methods":{"credit_cards":true,"paypal":false}}`'
  + ' as a response for the route.',
  function(done) {
    request('http://localhost:7865/available_payments',
    function(error, response, body) {
      const expectedObject = { payment_methods: {
        credit_cards:true,
        paypal:false
        }
      };
      const responseBody = JSON.parse(response.body);
      expect(responseBody).to.deep.equal(expectedObject);
      done();
    });
  });
});


describe('POST /login', function() {
  it('should return `Welcome Emara` for a username called Emara',
  function(done) {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Emara' }
    }, function(error, response, body) {
      expect(response.body).to.equal('Welcome Emara');
      done();
    });
  });
});
