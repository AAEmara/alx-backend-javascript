const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  // Testing 'SUM' functionality.
  it('...', function () {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUM', 1, 0), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUM', 0.1, 0), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUM', 0.1, 0.9), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUM', -0.1, -0.9), -1);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUM', -0.4, -0.4), 0);
  });

  // Testing 'SUBTRACT' functionality.
  it('...', function () {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 0), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUBTRACT', 0.1, 0), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUBTRACT', 0.1, 0.9), -1);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUBTRACT', -0.1, -0.9), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber('SUBTRACT', -0.4, -0.4), 0);
  });


  // Testing 'DIVIDE' functionality.
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', 0, 1), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', 1.2, 1), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', 2.6, 1.6), 1.5);
  });
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', -2.6, 1.6), -1.5);
  });
  it('...', function () {
    assert.equal(calculateNumber('DIVIDE', -2.6, -1.6), 1.5);
  });

});
