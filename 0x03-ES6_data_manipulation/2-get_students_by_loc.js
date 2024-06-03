export default function getStudentsByLocation(arrayOfStudents, city) {
  return arrayOfStudents.filter((object) => object.location === city);
}
