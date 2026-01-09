import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["**/*.test.js"],
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {...globals.browser, ...globals.node},
      sourceType: "module"
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module"
    }
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "error",
    },
  },
]);
