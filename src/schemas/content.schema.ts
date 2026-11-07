import { z } from 'astro/zod'
import { reference } from 'astro:content'

export const USE_TYPES = ['Device', 'App'] as const
export type UseType = (typeof USE_TYPES)[number]

const postSchema = z.object({
    category: z.string().array(),
    coverAlt: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    relatedPosts: z.array(reference('post')).optional(),
    tags: z.string().array().optional(),
    title: z.string(),
    updatedDate: z.coerce.date()
})

const craftSchema = z.object({
    coverUrl: z.string().optional(),
    description: z.string(),
    id: z.string(),
    pubDate: z.string(),
    skills: z.string().array().optional()
})

const useSchema = z.object({
    id: z.string(),
    intro: z.string().optional(),
    link: z.string().optional(),
    months: z.number().optional(),
    type: z.enum(USE_TYPES).default('Device')
})

export type Post = z.infer<typeof useSchema>
export type Craft = z.infer<typeof craftSchema>
export type Use = z.infer<typeof useSchema>

export { postSchema, craftSchema, useSchema }
