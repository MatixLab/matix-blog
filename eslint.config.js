import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    prettierOptions: {
      semi: false,
      singleQuote: true,
      plugins: [
        'prettier-plugin-tailwindcss',
        'prettier-plugin-astro',
      ],
      tailwindStylesheet: './src/styles/global.css',
    },
  },
  astro: {
    overrides: {
      'antfu/no-top-level-await': 'off',
    },
  },
  react: true,
})
