export default function getStudentIdsSum(arrayOfStudents) {
  const initialValue = 0;
  return arrayOfStudents.reduce(
    (accumulator, currentObject) => accumulator + currentObject.id,
    initialValue,
  );
}
