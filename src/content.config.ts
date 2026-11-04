import { file, glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { craftSchema, postSchema, shortSchema } from './schemas/content.schema'

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

export const collections = { collective, crafts, post, short }
