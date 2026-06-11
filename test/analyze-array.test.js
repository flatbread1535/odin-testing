import analyzeArray from "../src/analyze-array.js";

describe("analyze array", () => {
  test("basic array", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  });

  test("empty array", () => {
    const object = analyzeArray([]);
    expect(object).toEqual({ average: 0, min: null, max: null, length: 0 });
  });

  test("array with one element", () => {
    const object = analyzeArray([4]);
    expect(object).toEqual({ average: 4, min: 4, max: 4, length: 1 });
  });

  test("array with negative numbers", () => {
    const object = analyzeArray([-1, -8, -3, -4, -2, -6]);
    expect(object).toEqual({ average: -4, min: -8, max: -1, length: 6 });
  });

  test("array with all numbers the same", () => {
    const object = analyzeArray([1, 1, 1, 1]);
    expect(object).toEqual({ average: 1, min: 1, max: 1, length: 4 });
  });

  test("array with floating point numbers", () => {
    const object = analyzeArray([1.25, 2.25, 3.25]);
    expect(object.average).toBeCloseTo(2.25);
    expect(object.min).toBe(1.25);
    expect(object.max).toBe(3.25);
    expect(object.length).toBe(3);
  });
});
