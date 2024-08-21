const fs = require('fs');

async function readDatabase(path) {
  let fileContents;
  try {
    // Reading the database file content.
    fileContents = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = fileContents.split('\n').slice(1, -1);
  const csvObjects = {};

  for (const line of lines) {
    if (line.trim()) {
      // Splitting the fields of the current user.
      const columns = line.split(', ');
      // Retrieving the field name.
      const fieldName = columns[3];
      if (!csvObjects[fieldName]) {
        // Creating a firstName list for the object if it wasn't created before
        csvObjects[fieldName] = [];
      }
      // Adding the first name of the student.
      csvObjects[fieldName].push(columns[0]);
    }
  }

  // Returning an object of arrays of the firstname of students per field.
  return (csvObjects);
}

module.exports = readDatabase;
