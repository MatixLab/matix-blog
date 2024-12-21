import { envField } from 'astro/config'

const DB_PASSWORD = envField.string({
  context: 'server',
  access: 'public',
  optional: true,
})

export const schema = {
  DB_PASSWORD,
}
