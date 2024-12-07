import { envField } from 'astro/config'

export const DB_PASSWORD = envField.string({
  context: 'server',
  access: 'public',
  optional: true,
})
