import { markdownConfig } from './markdown.config'
import type { AstroUserConfig } from 'astro'

export const contentConfig = {
    experimental: {
        contentIntellisense: true
    },
    image: {
        remotePatterns: [{ protocol: 'https' }]
    },
    ...markdownConfig
} satisfies Pick<AstroUserConfig, 'experimental' | 'image' | 'markdown'>
