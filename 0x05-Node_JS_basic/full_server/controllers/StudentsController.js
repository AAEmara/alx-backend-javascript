import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      // Reading the database csv file.
      const databaseFile = process.argv[2] || './database.csv'; 
      const fieldObjects = await readDatabase(databaseFile);
    } catch (error) {
      // Database isn't available, 500 Status Code and error message.
      return res.status(500).send('Cannot load the database');
    }

    // Sorting the field names in order.
    const fieldsArray = Object.keys(fieldObjects).sort(
      (a, b) => {
        return a.localeCompare(b, undefined, {sensitivity: 'base'});
      });
    let responseText = 'This is the list of our students\n';
    for (const field of fieldsArray) {
      // Retrieving First Names according to the field name.
      const firstNamesList = fieldObjects[field];
      responseText += `Number of students in ${field}: ${firstNamesList.length}. List: ${firstNamesList.join(', ')}\n`;
    }

    return res.status(200).send(responseText);
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const databaseFile = process.argv[2] || './database.csv';

    if (major !== 'CS' && major !== 'SWE') {
      // Major not found, return 500 Status Code with Error message.
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const fieldObjects = await readDatabase(databaseFile);
    } catch (error) {
      // Database isn't available, return 500 status Code with Error message.
      return res.status(500).send('Cannot load the database');
    }
    const responseText = `List: ${fieldObjects[major].join(', ')}`;
    return res.status(200).send(responseText);
  }
}
