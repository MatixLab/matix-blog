import { defineAction } from 'astro:actions'
import { db, Sites } from 'astro:db'

export const SITE = {
  addSite: defineAction({
    handler: async (input) => {
      await db
        .insert(Sites)
        .values(input)
        .returning()
    },
  }),
}
