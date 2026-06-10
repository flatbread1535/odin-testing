import capitalize from "../src/capitalize.js";

test("capitalize pizza", () => {
  expect(capitalize("pizza")).toMatch(/Pizza/);
});

test("already capitalized", () => {
  expect(capitalize("Pizza")).toMatch(/Pizza/);
});

test("all caps", () => {
  expect(capitalize("PIZZA")).toMatch(/PIZZA/);
});

test("empty string", () => {
  expect(capitalize("")).toMatch(/^$/);
});

test("single letter", () => {
  expect(capitalize("p")).toMatch(/P/);
});

test("single capitalized letter", () => {
  expect(capitalize("P")).toMatch(/P/);
});

test("special character", () => {
  expect(capitalize("ó")).toMatch(/Ó/);
});

test("non-letter first character", () => {
  expect(capitalize("!pizza")).toMatch(/!pizza/);
});
