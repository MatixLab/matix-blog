import { craftSchema, creditSchema, postSchema, useSchema } from '@schemas/content.schema'
import { file, glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

export const post = defineCollection({
    loader: glob({ base: './src/content/post', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        postSchema.safeExtend({
            cover: image().optional()
        })
})

export const collective = defineCollection({
    loader: glob({ base: './src/content/collective', pattern: '**/*.{md,mdx}' })
})

export const crafts = defineCollection({
    loader: file('./src/data/crafts.json'),
    schema: () => craftSchema
})

export const credits = defineCollection({
    loader: file('./src/data/credits.json'),
    schema: () => creditSchema
})

export const uses = defineCollection({
    loader: file('./src/data/uses.json'),
    schema: () => useSchema
})

export const collections = { collective, crafts, credits, post, uses }
