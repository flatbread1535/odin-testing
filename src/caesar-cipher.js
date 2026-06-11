// takes a string and a shift factor and returns it with
// each character “shifted”.
const caesarCipher = function (string, shiftFactor) {
  return string.replace(/[a-z]/gi, (char) => {
    const code = char.charCodeAt(0);
    const isUpperCase = code >= 65 && code <= 90;
    const base = isUpperCase ? 65 : 97;
    return String.fromCharCode(((code - base + shiftFactor) % 26) + base);
  });
};

export default caesarCipher;
