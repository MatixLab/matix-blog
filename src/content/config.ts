import { defineCollection, z } from 'astro:content'

export const post = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
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

export const timeline = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      versionNumber: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      date: z.date({ coerce: true }),
    }),
})

export const weekly = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform(val => new Date(val)),
    }),
})

export const collections = { post, timeline, weekly }
