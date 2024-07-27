// Including readFile method from fsPromise module.
const { readFile } = require('node:fs/promises');

async function countStudents(path) {
  try {
    // Reading the database file asynchronously.
    const fileContents = await readFile(path, { encoding: 'utf8' });
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
    console.log(`Number of students: ${count}`);
    for (const key in csvObjects) {
      if (key in csvObjects) {
        const names = csvObjects[key][1].join(', ');
        console.log(`Number of students in ${key}: \
${csvObjects[key][0]}. \
List: ${names}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
