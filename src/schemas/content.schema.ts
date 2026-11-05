import { z } from 'astro/zod'
import { reference } from 'astro:content'

const baseSchema = z.object({
    category: z.string().array(),
    coverAlt: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.string().array().optional(),
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
    coverUrl: z.string().optional(),
    description: z.string(),
    id: z.string(),
    pubDate: z.string(),
    skills: z.string().array().optional()
})

const useSchema = z.object({
    intro: z.string().optional(),
    link: z.string(),
    months: z.number().optional(),
    name: z.string(),
    type: z.enum(['Device', 'App']).default('Device')
})

export { postSchema, shortSchema, craftSchema, useSchema }
