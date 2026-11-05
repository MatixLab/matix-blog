import {
    craftSchema,
    postSchema,
    shortSchema,
    useSchema
} from '@schemas/content.schema'
import { file, glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

export const post = defineCollection({
    loader: glob({ base: './src/content/post', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        postSchema.safeExtend({
            cover: image().optional()
        })
})

export const short = defineCollection({
    loader: glob({ base: './src/content/short', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        shortSchema.safeExtend({
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

export const uses = defineCollection({
    loader: file('./src/data/uses.json'),
    schema: () => useSchema
})

export const collections = { collective, crafts, post, short }
