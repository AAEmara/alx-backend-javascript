const Utils = {
  calculateNumber: function calculateNumber(type, a, b) {
    const aRounded = Math.round(a);
    const bRounded = Math.round(b);
    if (type === 'SUM') {
      const sum = aRounded + bRounded;
      return (sum);
    } else if (type === 'SUBTRACT') {
      const subtract = aRounded - bRounded;
      return (subtract);
    } else if (type === 'DIVIDE') {
      if (bRounded === 0) {
        return ('Error');
      }
      const divide = aRounded / bRounded;
      return (divide);
    }
  }
};

module.exports = Utils;
