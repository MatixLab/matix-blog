import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
    ...ultracite,

    astro: true,
    jsxSingleQuote: true,
    printWidth: 95,
    semi: false,
    singleAttributePerLine: false,
    singleQuote: true,
    sortImports: {
        ignoreCase: true,
        newlinesBetween: false,
        order: 'asc'
    },
    tabWidth: 4,
    trailingComma: 'none'
})
