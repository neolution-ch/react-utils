import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

export default [
  {
    ignores: ["**/cypress/", "cypress.config.ts", "vite.config.ts"],
  },
  ...neolutionEslintConfig.configs.flat["react-library"],
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    rules: {
      complexity: ["error", { max: 15 }],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["src/**"],
              message: "Use relative import path instead.",
            },
            {
              group: ["**/../src/**"],
              message: "Do not reach the 'src' folder in a relative path.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["eslint.config.ts"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
];
