export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const arrayValue of array) {
    // eslint-disable-next-line no-param-reassign
    newArray.push(appendString + arrayValue);
  }

  return newArray;
}
