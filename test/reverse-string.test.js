import reverseString from "../src/reverse-string.js";

describe("reverse string", () => {
  test("reverse odd length", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverse even length", () => {
    expect(reverseString("hi")).toBe("ih");
  });

  test("reverses one character", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("reverses empty", () => {
    expect(reverseString("")).toBe("");
  });

  test("space", () => {
    expect(reverseString(" ")).toBe(" ");
  });

  test("non-characters", () => {
    expect(reverseString("abc&123")).toBe("321&cba");
  });

  test("palindrome", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });
});
