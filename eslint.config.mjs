import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Customize the `no-unused-vars` rule
      "no-unused-vars": [
        "warn", // Change to 'error' to enforce strict checks
        {
          vars: "all", // Check all variables
          args: "none", // Ignore unused function arguments
          ignoreRestSiblings: true, // Ignore unused siblings in object destructuring
        },
      ],
    },
  },
];

export default eslintConfig;
