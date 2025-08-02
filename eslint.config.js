// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const customRules = require("./eslint-custom-rules"); // 👈 Importa tus reglas personalizadas

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: {
      "custom-rules": customRules, // 👈 Registra el plugin personalizado
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      // 🔧 Reglas personalizadas
      "custom-rules/no-console-log": "error",
      "custom-rules/require-function-comments": "warn",
      "custom-rules/max-lines-per-file": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
