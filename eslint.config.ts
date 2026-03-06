import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

export default [
  {
    ignores: ["vite.config.ts"],
  },
  ...neolutionEslintConfig.configs.flat.getConfig({
    ...neolutionEslintConfig.configs.flat.defaults["react-library"],
    cypressRecommended: true,
  }),
  {
    rules: {
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
    files: ["**/cypress/**"],
    rules: {
      "@typescript-eslint/no-namespace": [
        "error",
        {
          allowDeclarations: true,
          allowDefinitionFiles: true,
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
  {
    files: ["**/*.cy.tsx"],
    rules: {
      "no-restricted-imports": "off",
    },
  },
];
