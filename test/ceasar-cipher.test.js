import caesarCipher from "../src/caesar-cipher.js";

describe("caesar cipher", () => {
  test("basic caesar cipher", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("wrap around alphabet caesar cipher", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("negative shift caesar cipher", () => {
    expect(caesarCipher("KhOOr", -3)).toBe("HeLLo");
  });

  test("non-character symbols caesar cipher", () => {
    expect(caesarCipher("Hello, World! 123", 3)).toBe("Khoor, Zruog! 123");
  });

  test("empty character string caesar cipher", () => {
    expect(caesarCipher("", 5)).toBe("");
  });

  test("zero shift caesar cipher", () => {
    expect(caesarCipher("HeLLo", 0)).toBe("HeLLo");
  });
});
