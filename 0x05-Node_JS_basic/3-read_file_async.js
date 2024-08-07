// Including readFile method from fsPromise module.
const fs = require('fs');

async function countStudents(path) {
  let fileContents;
  try {
    // Reading the database file asynchronously.
    fileContents = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const lines = fileContents.split('\n').slice(1, -1);
  const csvObjects = {};
  for (const line of lines) {
    if (line.trim()) {
      // Splitting the fields of the current row.
      const columns = line.split(',');
      // Retrieving the field name.
      const fieldName = columns[3];
      if (!csvObjects[fieldName]) {
        csvObjects[fieldName] = [];
        csvObjects[fieldName][1] = [];
        csvObjects[fieldName][0] = 0;
      }
      csvObjects[fieldName][0] += 1;
      csvObjects[fieldName][1].push(columns[0]);
    }
  }
  let count = 0;
  for (const line of lines) {
    if (line) {
      count += 1;
    }
  }
  let result = `Number of students: ${count}`;
  console.log(result);
  for (const key in csvObjects) {
    if (key in csvObjects) {
      const names = csvObjects[key][1].join(', ');
      const output = `Number of students in ${key}: \
${csvObjects[key][0]}. \
List: ${names}`;
      console.log(output);
      result += `\n${output}`;
    }
  }
  return (result);
}

module.exports = countStudents;
