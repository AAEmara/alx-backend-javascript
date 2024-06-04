export default function cleanSet(set, startString) {
  let stringOutput = '';
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      stringOutput += `${value.slice(startString.length, value.length)}-`;
    }
  });
  return (stringOutput.slice(0, stringOutput.length - 1));
}
