import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";
import astro from "ultracite/oxlint/astro";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";

const jsPlugins = selectJsPlugins(["react-doctor"]);

export default defineConfig({
  env: core.env,
  extends: [core, react, astro, jsPlugins],
  ignorePatterns: core.ignorePatterns,
  jsPlugins: jsPlugins.jsPlugins,
  rules: {
    'require-await': 'allow',
    'unicorn/no-await-expression-member': 'allow'
  },
  settings: jsPluginSettings
});
