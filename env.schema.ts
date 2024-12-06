import {
  envField,
} from 'astro/config'

export const DB = {
  DB_URL: envField.string({
    context: 'server',
    optional: true,
    access: 'secret',
  }),
}
