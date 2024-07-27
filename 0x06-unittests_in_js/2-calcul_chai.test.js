import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function () {
  // Testing 'SUM' functionality.
  it('...', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });
  it('...', function () {
    expect(calculateNumber('SUM', 1, 0)).to.equal(1);
  });
  it('...', function () {
    expect(calculateNumber('SUM', 0.1, 0)).to.equal(0);
  });
  it('...', function () {
    expect(calculateNumber('SUM', 0.1, 0.9)).to.equal(1);
  });
  it('...', function () {
    expect(calculateNumber('SUM', -0.1, -0.9)).to.equal(-1);
  });
  it('...', function () {
    expect(calculateNumber('SUM', -0.4, -0.4)).to.equal(0);
  });

  // Testing 'SUBTRACT' functionality.
  it('...', function () {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });
  it('...', function () {
    expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
  });
  it('...', function () {
    expect(calculateNumber('SUBTRACT', 0.1, 0)).to.equal(0);
  });
  it('...', function () {
    expect(calculateNumber('SUBTRACT', 0.1, 0.9)).to.equal(-1);
  });
  it('...', function () {
    expect(calculateNumber('SUBTRACT', -0.1, -0.9)).to.equal(1);
  });
  it('...', function () {
    expect(calculateNumber('SUBTRACT', -0.4, -0.4)).to.equal(0);
  });


  // Testing 'DIVIDE' functionality.
  it('...', function () {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('...', function () {
    expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
  });
  it('...', function () {
    expect(calculateNumber('DIVIDE', 1.2, 1)).to.equal(1);
  });
  it('...', function () {
    expect(calculateNumber('DIVIDE', 2.6, 1.6)).to.equal(1.5);
  });
  it('...', function () {
    expect(calculateNumber('DIVIDE', -2.6, 1.6)).to.equal(-1.5);
  });
  it('...', function () {
    expect(calculateNumber('DIVIDE', -2.6, -1.6)).to.equal(1.5);
  });

});
