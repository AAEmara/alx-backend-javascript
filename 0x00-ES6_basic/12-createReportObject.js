export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(allObjects) {
      return Object.keys(allObjects).length;
    },
  };
  return reportObject;
}
