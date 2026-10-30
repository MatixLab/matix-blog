import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
    ...ultracite,

    astro: true,
    jsxSingleQuote: true,
    printWidth: 85,
    semi: false,
    singleAttributePerLine: true,
    singleQuote: true,
    sortImports: {
        ignoreCase: true,
        newlinesBetween: false,
        order: 'asc'
    },

    tabWidth: 4,

    trailingComma: 'none'
})