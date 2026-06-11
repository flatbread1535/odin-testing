// takes an array of numbers and returns an object with
// the following properties: average, min, max, and length
const analyzeArray = function (array) {
  if (!array || array.length === 0)
    return { average: 0, min: null, max: null, length: 0 };

  let average = array.reduce((total, cur) => total + cur, 0) / array.length;

  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }

  let length = array.length;

  return { average, min, max, length };
};

export default analyzeArray;
