import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      js,
      jest,
    },
    extends: ["js/recommended", "jest/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  },
]);
