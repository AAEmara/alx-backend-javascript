interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
};

interface Directors extends Teacher {
  numberOfReports: number;
};

const teacher3: Teacher = {
  contract: false,
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
