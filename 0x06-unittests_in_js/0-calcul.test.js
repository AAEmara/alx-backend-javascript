const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function () {
  it('...', function () {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber(1, 0), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber(-0.9, 1), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber(-0.9, -0.6), -2);
  });
  it('...', function () {
    assert.equal(calculateNumber(0.9, 0.1), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber(0.9, 0.9), 2);
  });
  it('...', function () {
    assert.equal(calculateNumber(0.1, 0.1), 0);
  });
});
