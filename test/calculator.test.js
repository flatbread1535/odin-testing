import calculator from "../src/calculator.js";

describe("calculator", () => {
  // Test cases for .add()
  test("add two plus two", () => {
    expect(calculator.add(2, 2)).toEqual(4);
  });

  test("add zero", () => {
    expect(calculator.add(0, 3)).toEqual(3);
  });

  test("add one negative", () => {
    expect(calculator.add(5, -4)).toEqual(1);
  });

  test("add two negatives", () => {
    expect(calculator.add(-3, -5)).toEqual(-8);
  });

  test("add floating point values", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  // Test cases for .subtract()
  test("subtract two plus two", () => {
    expect(calculator.subtract(2, 2)).toEqual(0);
  });

  test("subtract zero", () => {
    expect(calculator.subtract(0, 3)).toEqual(-3);
  });

  test("subtract one negative", () => {
    expect(calculator.subtract(5, -4)).toEqual(9);
  });

  test("subtract two negatives", () => {
    expect(calculator.subtract(-7, -5)).toEqual(-2);
  });

  test("subtract floating point values", () => {
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
  });

  // Test cases for .multiply()
  test("regular multiplication", () => {
    expect(calculator.multiply(3, 2)).toEqual(6);
  });

  test("multiply by one", () => {
    expect(calculator.multiply(5, 1)).toEqual(5);
  });

  test("multiply one negative", () => {
    expect(calculator.multiply(3, -4)).toEqual(-12);
  });

  test("multiply two negatives", () => {
    expect(calculator.multiply(-3, -4)).toEqual(12);
  });

  test("multiply by zero", () => {
    expect(calculator.multiply(0, 4)).toEqual(0);
  });

  test("multiply floating point", () => {
    expect(calculator.multiply(0.2, 0.5)).toBeCloseTo(0.1);
  });

  // Test cases for .divide()
  test("regular division", () => {
    expect(calculator.divide(6, 2)).toEqual(3);
  });

  test("divide by one", () => {
    expect(calculator.divide(5, 1)).toEqual(5);
  });

  test("divide one negative", () => {
    expect(calculator.divide(-9, 3)).toEqual(-3);
  });

  test("divide two negatives", () => {
    expect(calculator.divide(-9, -3)).toEqual(3);
  });

  test("floating point result division", () => {
    expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
  });

  test("zero divided by a number", () => {
    expect(calculator.divide(0, 2)).toEqual(0);
  });

  test("division with floating point numbers", () => {
    expect(calculator.divide(0.5, 0.4)).toBeCloseTo(1.25);
  });

  test("divison by zero", () => {
    expect(() => calculator.divide(2, 0)).toThrow(Error);
  });
});
