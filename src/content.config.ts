import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const post = defineCollection({
    loader: glob({ base: './src/content/post', pattern: '**/[^_]*.mdx' }),
    schema: ({ image }) =>
        z.object({
            category: z.string().array(),
            cover: image().optional(),
            coverAlt: z.string().optional(),
            description: z.string(),
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            title: z.string(),
            updatedDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val))
        })
})

export const short = defineCollection({
    loader: glob({ base: './src/content/short', pattern: '**/[^_]*.mdx' }),
    schema: ({ image }) =>
        z.object({
            category: z.string().array(),
            cover: image().optional(),
            coverAlt: z.string().optional(),
            description: z.string(),
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            title: z.string(),
            updatedDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val))
        })
})

export const collective = defineCollection({
    loader: glob({ base: './src/content/collective', pattern: '**/[^_]*.mdx' })
})

export const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/[^_]*.mdx' }),
    schema: ({ image }) =>
        z.object({
            cover: image().optional(),
            coverAlt: z.string().optional(),
            description: z.string(),
            name: z.string(),
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val))
        })
})

export const collections = { collective, post, projects, short }
