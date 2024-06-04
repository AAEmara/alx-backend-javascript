export default function cleanSet(set, startString) {
  const stringOutput = [];
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      stringOutput.push(value.slice(startString.length));
    }
  });

  return (stringOutput.join('-'));
}
