interface MajorCredits {
  _majorCreditsBrand: void;
  credits: number;
};

interface MinorCredits {
  _minorCreditsBrand: void;
  credits: number;
};

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
};

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
};

console.log(sumMajorCredits({credits: 100, _majorCreditsBrand: undefined,}, {credits: 50, _majorCreditsBrand: undefined,}));
console.log(sumMinorCredits({credits: 50, _minorCreditsBrand: undefined,}, {credits: 50, _minorCreditsBrand: undefined,}));
