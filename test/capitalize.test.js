import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  test("capitalize pizza", () => {
    expect(capitalize("pizza")).toBe("Pizza");
  });

  test("already capitalized", () => {
    expect(capitalize("Pizza")).toBe("Pizza");
  });

  test("all caps", () => {
    expect(capitalize("PIZZA")).toBe("PIZZA");
  });

  test("empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("single letter", () => {
    expect(capitalize("p")).toBe("P");
  });

  test("single capitalized letter", () => {
    expect(capitalize("P")).toBe("P");
  });

  test("special character", () => {
    expect(capitalize("ó")).toBe("Ó");
  });

  test("non-letter first character", () => {
    expect(capitalize("!pizza")).toBe("!pizza");
  });
});
