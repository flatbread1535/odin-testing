// takes a string and returns it with the first character capitalized
const capitalize = function (string) {
  if (string.length === 0) {
    return "";
  } else {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }
};

export default capitalize;
