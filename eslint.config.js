import antfu from '@antfu/eslint-config'

export default antfu({
  astro: {
    overrides: {
      'antfu/no-top-level-await': 'off',
    },
  },
  react: true,
})
