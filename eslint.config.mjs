import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // For your browser source files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
  },

  // Override for Node.js files like webpack config
  {
    files: ["webpack.config.js", "webpack.*.js"],
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs", // optional but correct here
    },
  },
]);