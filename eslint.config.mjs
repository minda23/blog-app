import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactRecommended from "eslint-plugin-react/configs/recommended";
import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact, "@next/next": nextPlugin },
    extends: ["js/recommended", "plugin:react/recommended", "plugin:@next/next/recommended"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect", // toto ESLintu povie, že má automaticky detegovať verziu Reactu
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // vypne potrebu importovať React v JSX súboroch
      "react/prop-types": "off",         // ak nepoužívaš prop-types validáciu
      "no-unused-vars": "warn",          // varovanie pri nepoužitých importoch
    },
  },
]);
