// takes a string and returns it with the first character capitalized
const capitalize = function (word) {
  if (word.length === 0) {
    return "";
  } else {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
};

export default capitalize;
