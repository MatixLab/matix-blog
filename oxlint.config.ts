import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import astro from "ultracite/oxlint/astro";
import react from "ultracite/oxlint/react";

export default defineConfig({
  env: core.env,
  extends: [core, astro, react],
  ignorePatterns: core.ignorePatterns,
  options: { typeAware: true },
  rules: {
    "func-style": "allow",
    "no-use-before-define": "allow",
    "react/function-component-definition": "allow",
    "typescript/consistent-type-definitions": "allow"
  }
});
