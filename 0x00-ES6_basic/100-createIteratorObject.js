export default function createIteratorObject(report) {
  const depEmployees = report.allEmployees;
  const employeesArray = [];
  for (const department in depEmployees) {
    if (department) {
      for (const employee of depEmployees[department]) {
        employeesArray.push(employee);
      }
    }
  }
  return (employeesArray);
}
