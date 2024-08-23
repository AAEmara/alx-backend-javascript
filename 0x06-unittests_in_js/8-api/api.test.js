const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('IntegrationTest', function() {
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
});
