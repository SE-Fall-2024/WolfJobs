import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.chai,
        ...globals.mocha,
      },
      sourceType: "module", // Use "module" for ES module support
    },
  },
  {
    files: ["**/*.{ts,tsx}"], // Apply TypeScript specific rules
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Disable no-require-imports for TypeScript files
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
