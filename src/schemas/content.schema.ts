import { z } from 'astro/zod'
import { reference } from 'astro:content'

const baseSchema = z.object({
    category: z.string().array(),
    tags: z.string().array().optional(),
    coverAlt: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    title: z.string(),
    updatedDate: z.coerce.date()
})

const postSchema = baseSchema.extend({
    relatedPosts: z.array(reference('post')).optional()
})
const shortSchema = baseSchema.extend({
    relatedPosts: z.array(reference('short')).optional()
})

const craftSchema = z.object({
    id: z.string(),
    description: z.string(),
    pubDate: z.string(),
    coverUrl: z.string().optional(),
    skills: z.string().array().optional()
})

export { postSchema, shortSchema, craftSchema }
