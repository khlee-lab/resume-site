import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use only next/core-web-vitals as it's comprehensive
  ...compat.extends("next/core-web-vitals"),

  // Explicit configuration for .tsx files to ensure JSX parsing
  {
    files: ["**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // project: "./tsconfig.json", // Optional: for type-aware linting
      },
    },
  },
];

export default eslintConfig;
