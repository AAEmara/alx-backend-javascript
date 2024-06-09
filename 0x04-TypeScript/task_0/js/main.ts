interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Tom',
  lastName: 'Ford',
  age: 10,
  location: 'Alexandria',
};

const student2: Student = {
  firstName: 'Elon',
  lastName: 'Musk',
  age: 9,
  location: 'Cairo',
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const studentsData = studentsList.map((student) => ({
  firstName: student.firstName,
  location: student.location,
}));

for (const student of studentsData) {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
}

document.body.appendChild(table);
