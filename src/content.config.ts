import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'
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

export const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            cover: image().optional(),
            coverAlt: z.string().optional(),
            description: z.string(),
            name: z.string(),
            pubDate: z.coerce.date()
        })
})

export const crafts = defineCollection({
    loader: file('./src/data/crafts.json'),
    schema: () => craftSchema
})

export const collections = { collective, post, projects, short, crafts }
