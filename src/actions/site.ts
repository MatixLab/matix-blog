import { defineAction } from 'astro:actions'
import { db, eq, ResourceSites } from 'astro:db'

export const SITE = {
    GET: defineAction({
        handler: async (input: number) =>
            await db
                .select()
                .from(ResourceSites)
                .where(eq(ResourceSites.type, input))
    })
}
