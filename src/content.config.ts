import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const post = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.mdx', base: './src/content/post' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      category: z.string().array(),
      pubDate: z
        .string()
        .or(z.date())
        .transform(val => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .transform(val => new Date(val)),
    }),
})

export const short = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.mdx', base: './src/content/short' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      category: z.string().array(),
      pubDate: z
        .string()
        .or(z.date())
        .transform(val => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .transform(val => new Date(val)),
    }),
})

export const collections = { post, short }
