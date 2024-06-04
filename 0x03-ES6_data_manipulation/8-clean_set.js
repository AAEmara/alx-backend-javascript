export default function cleanSet(set, startString) {
  const stringOutput = [];

  set.forEach((value) => {
    // Checking if at least the length of the value equals the input string.
    if (value.length >= startString.length) {
      let match = true;
      // Checking if the input string is matching the start of the value.
      for (let i = 0; i < startString.length; i += 1) {
        if (startString[i] !== value[i]) {
          match = false;
          break;
        }
      }

      // Add to the array if the input string's length isn't 0 and it matches.
      if (match && startString.length !== 0) {
        stringOutput.push(value.slice(startString.length));
      }
    }
  });

  return (stringOutput.join('-'));
}
