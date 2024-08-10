interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
};

const teacher3: Teacher = {
  contract: false,
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
};

console.log(teacher3);
