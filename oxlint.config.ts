import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import astro from "ultracite/oxlint/astro";
import react from "ultracite/oxlint/react";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";

const jsPlugins = selectJsPlugins(["react-doctor"]);

export default defineConfig({
  env: core.env,
  extends: [core, astro, react, jsPlugins],
  ignorePatterns: core.ignorePatterns,
  jsPlugins: jsPlugins.jsPlugins,
  options: { typeAware: true },
  rules: {
    "func-style": "allow",
    "no-use-before-define": "allow",
    "react/function-component-definition": "allow",
    "typescript/consistent-type-definitions": "allow",
    "unicorn/filename-case": "allow",
    "unicorn/prefer-string-slice": "allow"
  },
  settings: jsPluginSettings
});
