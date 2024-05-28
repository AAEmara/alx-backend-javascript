export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, arrayValue] of array.entries()) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + arrayValue;
  }

  return array;
}
