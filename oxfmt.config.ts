import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
  ...ultracite,
  jsxSingleQuote: true,
  printWidth: 85,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  sortImports: {
    ignoreCase: true,
    newlinesBetween: false,
    order: 'asc'
  },
  tabWidth: 4,
  trailingComma: 'none'
})
